import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NewsArticle1 from './pages/NewsArticle1.jsx'
import NewsArticle2 from './pages/NewsArticle2.jsx'
import NewsArticle3 from './pages/NewsArticle3.jsx'
import NewsArticle4 from './pages/NewsArticle4.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news/uvu-bio-bootcamp" element={
          <>
            <Navbar />
            <NewsArticle4 />
            <Footer />
          </>
        } />
        <Route path="/news/rwanda-fda-who-certification" element={
          <>
            <Navbar />
            <NewsArticle1 />
            <Footer />
          </>
        } />
        <Route path="/news/ama-appoints-first-ceo" element={
          <>
            <Navbar />
            <NewsArticle2 />
            <Footer />
          </>
        } />
        <Route path="/news/who-budget-cuts" element={
          <>
            <Navbar />
            <NewsArticle3 />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
