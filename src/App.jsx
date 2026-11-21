import Hero from './components/Hero'
import Challenge from './components/Challenge'
import Research from './components/Research'
import About from './components/About'
import Insights from './components/Insights'
import News from './components/News'
import FAQs from './components/FAQs'
import Contact from './components/Contact'

// The home page. The navbar and footer live in components/Layout.jsx.
function App() {
  return (
    <>
      <Hero />
      <Challenge />
      <Research />
      <About />
      <Insights />
      <News />
      <FAQs />
      <Contact />
    </>
  )
}

export default App
