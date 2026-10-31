import React, { useEffect } from 'react'
import { X, FileText, ExternalLink, AlertCircle } from 'lucide-react'
import { profile } from '../data/profile'

export function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#151821] rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="text-xl font-bold text-white">
              Resume / Curriculum Vitae
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              {profile.fullName} · {profile.university}
            </p>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-amber-300 mb-1">
              Resume Placeholder Notice
            </p>
            <p className="text-xs leading-relaxed text-zinc-300">
              The official academic resume PDF is being prepared for upcoming 2026/2027 internship and software engineering applications. To attach your verified PDF, place <code className="font-mono text-amber-300">Abdellah_Aregaw_Resume.pdf</code> into the <code className="font-mono text-amber-300">public/</code> directory.
            </p>
          </div>
        </div>

        <div className="space-y-2.5 text-sm text-zinc-300 mb-6 font-mono text-xs">
          <div className="flex justify-between py-2 border-b border-white/5">
            <span className="text-zinc-500">Degree:</span>
            <span className="font-medium text-white">{profile.degree}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/5">
            <span className="text-zinc-500">University:</span>
            <span className="font-medium text-white">{profile.university}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/5">
            <span className="text-zinc-500">Expected Graduation:</span>
            <span className="font-medium text-amber-400">{profile.expectedGraduation}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/5">
            <span className="text-zinc-500">Primary Stack:</span>
            <span className="font-medium text-white">MongoDB · Express · React · Node.js</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-colors"
          >
            <span>View Verified GitHub Code</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CvModal
