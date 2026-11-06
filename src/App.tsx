import Hero from './components/Hero.tsx'
import Features from './components/Features.tsx'
import InstallSteps from './components/InstallSteps.tsx'
import Faq from './components/Faq.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070c] text-slate-100">
      <Hero />
      <Features />
      <InstallSteps />
      <Faq />
      <Footer />
    </div>
  )
}
