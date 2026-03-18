import { Link, useLocation } from 'react-router-dom'
import { FiCamera, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <FiCamera className="w-8 h-8 text-slate-800 group-hover:text-slate-600 transition-colors" />
            <span className="text-2xl font-light text-slate-800 tracking-wide">
              Studio<span className="font-semibold">Lens</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.path)
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-[1.1rem] left-0 right-0 h-0.5 bg-slate-900" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 hover:text-slate-600 transition-colors"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-slate-900 bg-slate-50 px-4 rounded'
                    : 'text-slate-600 hover:text-slate-900 px-4'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
