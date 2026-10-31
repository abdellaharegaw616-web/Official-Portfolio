import React from 'react'
import { ArrowUp, Github } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    window.history.pushState(null, '', '#hero')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#232736] py-12 bg-[#090A0F]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          {/* Copyright Note */}
          <div>
            © {currentYear} Abdellah Aregaw. Built with care.
          </div>

          {/* Center Info / Stack */}
          <div className="text-zinc-600 hidden md:block">
            MERN Stack · Arba Minch University
          </div>

          {/* Links: GitHub & Back to top */}
          <div className="flex items-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
