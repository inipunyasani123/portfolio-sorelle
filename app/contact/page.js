'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Check, ListChecks } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const doneRef = useRef(null);
  useEffect(() => { if (sent) doneRef.current?.focus(); }, [sent]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true); // Portfolio template: the message is not delivered anywhere.
  };

  const field = 'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100';
  const label = 'mb-1.5 block text-sm font-medium text-gray-700';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s work" accent="together." subtitle="Open for freelance & collaboration. Tell me about your project and I’ll get back to you." />

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                <ListChecks size={18} aria-hidden="true" /> A useful first note
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>Who the site is for: a family, a class, a workshop.</li>
                <li>The honest downside you would rather say first.</li>
                <li>A rough date, if there is one.</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={28} aria-hidden="true" /></div>
                <h2 ref={doneRef} tabIndex={-1} className="mt-4 text-2xl font-bold text-gray-900 outline-none">Thanks for trying the form!</h2>
                <p className="mt-1 text-gray-600">This is a portfolio template, {form.name}, so your message wasn’t actually sent. In a live version, it lands straight in the owner’s inbox.</p>
                <button type="button" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 min-h-11 rounded-full border border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">Back to the form</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-name" className={label}>Name</label>
                    <input id="f-name" name="name" value={form.name} onChange={handle} autoComplete="name" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="f-email" className={label}>Email</label>
                    <input id="f-email" type="email" name="email" value={form.email} onChange={handle} autoComplete="email" required className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-message" className={label}>About the project</label>
                  <textarea id="f-message" name="message" value={form.message} onChange={handle} placeholder="Who is it for, and what should it say first?" rows={6} required className={`${field} resize-none`} />
                </div>
                <button type="submit" className="min-h-12 w-full rounded-full bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700">Send message</button>
                <p className="text-center text-xs text-gray-600">Demo form: nothing is sent or stored.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="mt-0.5 font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
