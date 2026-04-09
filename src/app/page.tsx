import GrainyBackground from '@/components/ui/GrainyBackground'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Projects from '@/components/sections/Projects'
import VinylPlayer from '@/components/sections/VinylPlayer'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/layout/Footer'
import FloatingOrb from '@/components/ui/FloatingOrb'

export default function Home() {
  return (
    <>
      <GrainyBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <StatsBar />
        <Projects />
        <VinylPlayer />
        <Experience />
        <Footer />
      </div>
      <FloatingOrb />
    </>
  )
}
