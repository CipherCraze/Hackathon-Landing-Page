import CallToAction from '../components/CallToAction'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Prizes from '../components/Prizes'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Team from '../components/Team'
import Themes from '../components/Themes'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar />
      <main className="space-y-0">
        <HeroSection />
        <About />
        {/* <Themes /> 
        <Schedule />
        <CallToAction />
  <Prizes />
  <Sponsors />
        <Team />
        <FAQ />
        <Contact />*/}
      </main>
      <Footer />
    </div>
  )
}

export default Home
