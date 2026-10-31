import React, { useState } from 'react'
import {
  Search,
  X,
  ChevronRight,
  MessageSquare,
  FileText,
  Wand2,
  Check,
  Terminal,
} from 'lucide-react'
import { profile } from '../data/profile'

/**
 * DeveloperProfileVisual:
 * Authentic developer visual for Abdellah Aregaw.
 * Features:
 * - Signature "AA." circular seal monogram and portfolio graphic
 * - Interactive AI Tools widget with full dropdown and Magic Tools submenu
 * - Student credentials: Arba Minch University & MERN stack
 * - Bottom caption: KOMBOLCHA, ET · CLASS OF 2027
 * - Completely free of any personal/third-party photographs
 */
export function DeveloperProfileVisual() {
  const [isAiToolsOpen, setIsAiToolsOpen] = useState(false)
  const [isMagicSubmenuOpen, setIsMagicSubmenuOpen] = useState(false)
  const [aiFeedback, setAiFeedback] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(true)

  const handleAiAction = (actionName) => {
    setAiFeedback(`AI Tools: ${actionName} ready`)
    setTimeout(() => setAiFeedback(null), 3000)
    setIsMagicSubmenuOpen(false)
    setIsAiToolsOpen(false)
  }

  return (
    <figure
      aria-label="Abdellah Aregaw Developer Profile Visual"
      className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#151821] shadow-2xl group flex flex-col justify-between aspect-[4/5] sm:aspect-[3/4]"
    >
      {/* Background Subtle Grid & Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #F59E0B 1px, transparent 1px), linear-gradient(to bottom, #F59E0B 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
      />

      {/* Top Bar with Developer Terminal / Brand Header */}
      <div className="relative z-20 pt-4 px-5 pb-3 border-b border-white/5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
          <span className="text-zinc-400 ml-1 font-medium">abdellah.dev</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-zinc-300">
          <Terminal className="w-3 h-3 text-[#F59E0B]" />
          <span>MERN STACK</span>
        </div>
      </div>

      {/* Main Visual Body */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-gradient-to-b from-[#0d0f15] via-[#11131a] to-[#090a0f] flex flex-col items-center justify-center p-6">
        
        {/* AI Tools Badge on top-left (matching user reference) */}
        <div className="absolute top-3.5 left-3.5 z-30">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAiToolsOpen(!isAiToolsOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16171b]/95 hover:bg-[#202228] border border-white/20 text-white shadow-xl backdrop-blur-md transition-all active:scale-95 focus:outline-none"
              title="AI Tools"
              aria-expanded={isAiToolsOpen}
            >
              <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center">
                <Search className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-semibold tracking-tight text-white">AI Tools</span>
              <X className="w-3 h-3 text-zinc-400 hover:text-white" />
            </button>

            {/* AI Tools Floating Popup Menu */}
            {isAiToolsOpen && (
              <div className="absolute top-10 left-0 w-44 rounded-2xl bg-[#1c1d22]/98 border border-white/15 shadow-2xl p-1.5 backdrop-blur-xl animate-in fade-in duration-150 z-40">
                <div className="space-y-0.5 text-xs text-white">
                  <button
                    type="button"
                    onClick={() => handleAiAction('Chat with Image')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left hover:bg-white/10 transition-colors font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Chat with Image</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAiAction('Extract Text')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left hover:bg-white/10 transition-colors font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Extract Text</span>
                  </button>

                  {/* Magic Tools with Submenu trigger */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsMagicSubmenuOpen(true)}
                    onMouseLeave={() => setIsMagicSubmenuOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsMagicSubmenuOpen(!isMagicSubmenuOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left hover:bg-white/10 transition-colors font-medium"
                    >
                      <div className="flex items-center gap-2">
                        <Wand2 className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Magic Tools</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>

                    {/* Magic Tools Submenu */}
                    {isMagicSubmenuOpen && (
                      <div className="absolute top-0 left-full ml-1.5 w-48 rounded-2xl bg-[#1c1d22]/98 border border-white/15 shadow-2xl p-1.5 backdrop-blur-xl animate-in fade-in duration-150 z-50">
                        <div className="space-y-0.5 text-xs text-white">
                          <button
                            type="button"
                            onClick={() => handleAiAction('Image Upscaler')}
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                          >
                            <span>Image Upscaler</span>
                            <span className="font-mono text-[10px] text-zinc-400">8</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAiAction('Background Remover')}
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                          >
                            <span>Background Remover</span>
                            <span className="font-mono text-[10px] text-zinc-400">1</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAiAction('Background Replacer')}
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                          >
                            <span>Background Replacer</span>
                            <span className="font-mono text-[10px] text-zinc-400">8</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAiAction('Object Remover')}
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                          >
                            <span>Object Remover</span>
                            <span className="font-mono text-[10px] text-zinc-400">4</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAiAction('3D Rotation Video')}
                            className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                          >
                            <span>3D Rotation Video</span>
                            <span className="font-mono text-[10px] text-zinc-400">43</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Feedback Toast */}
          {aiFeedback && (
            <div className="mt-2 px-3 py-1.5 rounded-xl bg-black/90 border border-amber-500/40 text-amber-300 text-[11px] font-mono shadow-lg flex items-center gap-1.5 animate-in fade-in">
              <Check className="w-3 h-3 text-emerald-400" />
              <span>{aiFeedback}</span>
            </div>
          )}
        </div>

        {/* Central Developer Emblem & Monogram (No personal photo) */}
        <div className="relative z-10 w-full my-auto flex flex-col items-center justify-center text-center">
          <div className="relative mb-5 group-hover:scale-[1.02] transition-transform duration-300">
            {imageLoaded ? (
              <div className="w-48 sm:w-56 overflow-hidden rounded-2xl border border-amber-500/30 bg-black/50 shadow-2xl shadow-amber-500/10 p-1.5">
                <img
                  src="/my-portfolio.jpg"
                  alt="Abdellah Aregaw Portfolio Emblem"
                  onError={() => setImageLoaded(false)}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            ) : (
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#1c202d] to-[#0d0f15] border-2 border-amber-500/40 shadow-2xl flex flex-col items-center justify-center">
                <span className="font-mono text-4xl font-extrabold tracking-tight text-white">
                  AA<span className="text-[#F59E0B]">.</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-1">
                  FULL-STACK
                </span>
              </div>
            )}

            {/* Circular AA. Badge Seal (User prompt: "please add on AA") */}
            <div
              className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full bg-[#11131A] border-2 border-[#F59E0B] shadow-xl flex items-center justify-center transition-transform hover:scale-110"
              title="Abdellah Aregaw Monogram Seal"
            >
              <span className="font-mono text-sm font-extrabold tracking-tight text-white">
                AA<span className="text-[#F59E0B]">.</span>
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Abdellah Aregaw
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1 max-w-xs">
            Software Engineering · Arba Minch University
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-xs">
            {['MongoDB', 'Express', 'React', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-zinc-300 bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Caption Overlay: KOMBOLCHA, ET · CLASS OF 2027 */}
      <figcaption className="relative z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-6 pb-5 px-6 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest text-zinc-300">
        <span className="font-semibold text-zinc-200">
          {profile.panelCaption.location}
        </span>
        <span className="text-zinc-300 font-medium tracking-widest">
          {profile.panelCaption.classYear}
        </span>
      </figcaption>
    </figure>
  )
}

export default DeveloperProfileVisual
