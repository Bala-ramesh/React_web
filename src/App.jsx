import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import ComponentLab from './pages/ComponentLab'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app-wrap">
      <Header />
      <main id="main-content" tabIndex={-1} className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/component-lab" element={<ComponentLab />} />
          <Route path="/component-lab/:componentId" element={<ComponentLab />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
