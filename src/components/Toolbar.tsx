import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

export const Toolbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        const offsetTop = element.offsetTop - 100
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'scale-100' : 'scale-95'
      }`}
    >
      <div className="surface-elevated rounded-full px-6 py-3 shadow-subtle border border-border/30 backdrop-blur-md">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold text-primary hover:scale-110 transition-transform flex-shrink-0 cursor-pointer"
          >
            Nacho
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white hover:text-primary transition-colors relative group py-2 px-3 rounded-full hover:bg-secondary/30 cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8" />
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('#contact')}
            size="sm"
            className="gradient-primary rounded-full hover:scale-105 transition-all duration-300 hidden md:flex cursor-pointer"
          >
            Hire Me
          </Button>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-secondary/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute bottom-full left-0 right-0 mb-4">
            <div className="surface-elevated rounded-2xl p-4 shadow-subtle border border-border/30 backdrop-blur-md">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-white hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-secondary/30"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="gradient-primary w-full py-2 rounded-lg mt-2"
                  size="sm"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
