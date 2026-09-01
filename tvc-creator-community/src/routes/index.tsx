import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Ticker } from '../components/Ticker'
import { Problem } from '../components/Problem'
import { Shift } from '../components/Shift'
import { WhatWeBuild } from '../components/WhatWeBuild'
import { Process } from '../components/Process'
import { WhyWeStandOut } from '../components/WhyWeStandOut'
import { Guarantee } from '../components/Guarantee'
import { WhoFor } from '../components/WhoFor'
import { Founder } from '../components/Founder'
import { WhyNow } from '../components/WhyNow'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { QualifyModal } from '../components/QualifyModal'
import { QualifyModalProvider } from '../context/QualifyModalContext'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'The Viral Circle — Own Your TikTok Shop Creator Community',
      },
      {
        name: 'description',
        content:
          "We'll build you a 150+ member TikTok Shop creator community, 30-35% actively posting for your brand within 30 days, or you don't pay a dollar.",
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <QualifyModalProvider>
      <div className="min-h-screen bg-black">
        <Nav />
        <Hero />
        <Ticker />
        <Problem />
        <Shift />
        <WhatWeBuild />
        <Process />
        <WhyWeStandOut />
        <Guarantee />
        <WhoFor />
        <Founder />
        <WhyNow />
        <FinalCTA />
        <Footer />
      </div>
      <QualifyModal />
    </QualifyModalProvider>
  )
}
