import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Impact from './components/Impact'
import Stats from './components/Stats'
import About from './components/About'
import Research from './components/Services'
import News from './components/News'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Impact />
      <Stats />
      <About />
      <Research />
      <News />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
