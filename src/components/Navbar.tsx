import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Emergency', href: '/emergency', important: true },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold tracking-tight",
                isScrolled ? "text-navy-950" : "text-navy-900"
              )}>
                Houston<span className="text-brand-600">Plumb</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 leading-none">
                Elite Services
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-brand-600",
                  link.important ? "text-red-600 hover:text-red-700" : "text-navy-900"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:7135550123" 
              className="flex items-center space-x-2 text-navy-900 hover:text-brand-600 transition-colors"
            >
              <div className="bg-brand-50 p-2 rounded-full">
                <Phone className="h-4 w-4 text-brand-600" />
              </div>
              <span className="font-bold text-sm">(713) 555-0123</span>
            </a>
            <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
              Get Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-navy-950 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-semibold py-2 border-b border-gray-50",
                    link.important ? "text-red-600" : "text-navy-900"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <a 
                  href="tel:7135550123" 
                  className="flex items-center space-x-3 text-navy-900"
                >
                  <Phone className="h-5 w-5 text-brand-600" />
                  <span className="font-bold">(713) 555-0123</span>
                </a>
                <Button className="w-full bg-brand-600">Get Free Estimate</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
