import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Roles />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Cakrawala Hub · Career Management System Kampus
        </div>
      </footer>
    </div>
  )
}

export default App
