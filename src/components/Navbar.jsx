import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const NAV_ITEMS = [
  { id: 'hero', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({ onOpenResumeModal }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 820) setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('resize', handleResize)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const navOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth',
      })
      window.history.pushState(null, '', `#${id}`)
      setActiveSection(id)
    }
  }

  const handleResumeClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (profile.links.hasRealResumePdf) {
      window.open(profile.links.resumePath, '_blank')
    } else if (onOpenResumeModal) {
      onOpenResumeModal()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="group flex items-center font-bold text-xl sm:text-2xl text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <span>Abdellah Aregaw</span>
            <span className="text-amber-500">.</span>
          </a>

          {/* Desktop Navigation Links & Action: ONLY About, Work, Experience, Skills, Contact, Resume */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            {/* Resume Button */}
            <button
              type="button"
              onClick={handleResumeClick}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-sm font-medium text-white transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Resume
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-3">
            <button
              type="button"
              onClick={handleResumeClick}
              className="px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white bg-white/5"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 z-30 bg-black/85 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#11131A] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-lg font-medium text-zinc-300 hover:text-white py-1.5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleResumeClick}
                className="w-full text-center py-3 rounded-full bg-amber-500 text-black font-semibold text-sm"
              >
                View Academic Resume
              </button>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full border border-white/10 text-zinc-300 text-sm font-medium"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
