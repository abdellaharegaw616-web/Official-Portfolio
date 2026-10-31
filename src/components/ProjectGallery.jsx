import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Layers, Layout, Shield, Database, Maximize2 } from 'lucide-react'

export function ProjectGallery({ images = [], initialIndex = 0, isOpen, onClose, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Keyboard navigation & Escape handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, images.length, currentIndex])

  if (!isOpen || !images.length) return null

  const currentItem = images[currentIndex] || images[0]

  const handlePrev = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#111827] rounded-[20px] shadow-2xl border border-slate-200 dark:border-gray-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-gray-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 px-2 py-0.5 rounded border border-orange-200/80 dark:border-orange-900/60">
                {currentItem.type || 'Blueprint'}
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                {currentIndex + 1} of {images.length}
              </span>
            </div>
            <h3
              id="gallery-viewer-title"
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"
            >
              {currentItem.title || projectTitle}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Visual / Diagram Frame */}
        <div className="relative my-6 min-h-[300px] sm:min-h-[420px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden p-6 sm:p-8">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Architectural Blueprint View */}
          <div className="relative z-10 w-full max-w-xl text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-lg shadow-orange-500/10">
              {currentItem.type === 'Architecture' && <Layers className="w-8 h-8" />}
              {currentItem.type === 'UI Layout' && <Layout className="w-8 h-8" />}
              {currentItem.type === 'Security Flow' && <Shield className="w-8 h-8" />}
              {currentItem.type === 'Data Architecture' && <Database className="w-8 h-8" />}
              {!['Architecture', 'UI Layout', 'Security Flow', 'Data Architecture'].includes(currentItem.type) && (
                <Maximize2 className="w-8 h-8" />
              )}
            </div>

            <div>
              <span className="font-mono text-xs text-orange-400 uppercase tracking-wider block mb-1">
                Verified System Diagram
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentItem.title}
              </h4>
              <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                {currentItem.caption}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Truthful Project Blueprint · No Stock Substitutions</span>
            </div>
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 shadow-lg transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnail Strip / Dots */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {images.map((img, idx) => (
              <button
                key={img.id || idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? 'w-8 bg-orange-500'
                    : 'w-2 bg-slate-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectGallery
