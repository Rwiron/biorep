import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import NewsArticle1 from './pages/NewsArticle1.jsx'
import NewsArticle2 from './pages/NewsArticle2.jsx'
import NewsArticle3 from './pages/NewsArticle3.jsx'
import NewsArticle4 from './pages/NewsArticle4.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/news/uvu-bio-bootcamp" element={<NewsArticle4 />} />
          <Route path="/news/rwanda-fda-who-certification" element={<NewsArticle1 />} />
          <Route path="/news/ama-appoints-first-ceo" element={<NewsArticle2 />} />
          <Route path="/news/who-budget-cuts" element={<NewsArticle3 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
