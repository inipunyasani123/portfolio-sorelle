import { pageMeta, SITE_NAME } from '@/lib/seo';

// Judul pakai { default, template } supaya halaman di bawahnya tetap berakhiran " — Sorelle".
const meta = pageMeta({ title: 'Work', description: "Six case studies by Sorelle: a neighbourhood guide, a learning game, a furniture shop, two event pages, and an invitation, all live.", path: '/work' });
export const metadata = { ...meta, title: { default: 'Work', template: `%s — ${SITE_NAME}` } };

export default function Layout({ children }) {
  return children;
}
