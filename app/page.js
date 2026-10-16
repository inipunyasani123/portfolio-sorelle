// app/page.js
import Hero from '@/components/Hero'
import RecentWork from '@/components/RecentWork'
import Brands from '@/components/Brands'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentWork />
      <Brands />
      <Services />
    </main>
  )
}
