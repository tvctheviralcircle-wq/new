import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Ticker } from '../components/Ticker'
import { Problem } from '../components/Problem'
import { Shift } from '../components/Shift'
import { Playbook } from '../components/Playbook'
import { WhatWeBuild } from '../components/WhatWeBuild'
import { Process } from '../components/Process'
import { TrustedBy } from '../components/TrustedBy'
import { WhyWeStandOut } from '../components/WhyWeStandOut'
import { Guarantee } from '../components/Guarantee'
import { CommunityInAction } from '../components/CommunityInAction'
import { WhoFor } from '../components/WhoFor'
import { Founder } from '../components/Founder'
import { WhyNow } from '../components/WhyNow'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'

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
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Shift />
      <Playbook />
      <WhatWeBuild />
      <Process />
      <TrustedBy />
      <WhyWeStandOut />
      <Guarantee />
      <CommunityInAction />
      <WhoFor />
      <Founder />
      <WhyNow />
      <FinalCTA />
      <Footer />
    </div>
  )
}
