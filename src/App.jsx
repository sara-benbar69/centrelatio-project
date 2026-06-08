import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Landing = lazy(() => import('./pages/Landing'))
const Tarifs = lazy(() => import('./pages/Tarifs'))
const Ressources = lazy(() => import('./pages/Ressources'))
const Entreprises = lazy(() => import('./pages/Entreprises'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <Navbar />
      <div className="public-site">
        <Suspense fallback={<div className="page-loader">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/entreprises" element={<Entreprises />} />
            <Route path="/tarifs" element={<Tarifs showTestimonials={false} />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#ffffff',
            color: '#0b1a2a',
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)',
            border: '1px solid #e2e8f0',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </>
  )
}

export default App
