import React, { useState, useEffect, useRef } from 'react'
import {
  Search,
  Home,
  User,
  FolderGit2,
  GraduationCap,
  Wrench,
  ShieldCheck,
  Mail,
  Github,
  FileText,
  CornerDownLeft,
} from 'lucide-react'
import { profile } from '../data/profile'

export function CommandPalette({ isOpen, onClose, onOpenResumeModal }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const scrollToSection = (id) => {
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
    }
  }

  const commands = [
    {
      id: 'home',
      label: 'Go to Introduction (Top)',
      category: 'Navigation',
      icon: Home,
      action: () => {
        scrollToSection('hero')
        onClose()
      },
    },
    {
      id: 'about',
      label: 'Go to About Me',
      category: 'Navigation',
      icon: User,
      action: () => {
        scrollToSection('about')
        onClose()
      },
    },
    {
      id: 'work',
      label: 'Go to 01 Selected Work',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        scrollToSection('work')
        onClose()
      },
    },
    {
      id: 'experience',
      label: 'Go to 02 Background & Learning',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => {
        scrollToSection('experience')
        onClose()
      },
    },
    {
      id: 'skills',
      label: 'Go to 03 Technical Toolkit',
      category: 'Navigation',
      icon: Wrench,
      action: () => {
        scrollToSection('skills')
        onClose()
      },
    },
    {
      id: 'principles',
      label: 'Go to 04 Engineering Principles',
      category: 'Navigation',
      icon: ShieldCheck,
      action: () => {
        scrollToSection('principles')
        onClose()
      },
    },
    {
      id: 'contact',
      label: 'Go to 05 Contact',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        scrollToSection('contact')
        onClose()
      },
    },
    {
      id: 'resume',
      label: 'View Academic Resume (PDF / Details)',
      category: 'Documents',
      icon: FileText,
      action: () => {
        onClose()
        if (profile.links.hasRealResumePdf) {
          window.open(profile.links.resumePath, '_blank')
        } else if (onOpenResumeModal) {
          onOpenResumeModal()
        }
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      category: 'External',
      icon: Github,
      action: () => {
        window.open(profile.links.github, '_blank', 'noopener,noreferrer')
        onClose()
      },
    },
  ]

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#11131A] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-[#F59E0B] mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type a section or command to navigate..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none"
            aria-autocomplete="list"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, idx) => {
              const Icon = command.icon
              const isSelected = idx === selectedIndex
              return (
                <button
                  key={command.id}
                  type="button"
                  onClick={command.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors text-left ${
                    isSelected
                      ? 'bg-amber-500/10 text-amber-300 font-semibold border border-amber-500/20'
                      : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F59E0B]' : 'text-zinc-500'}`} />
                    <span>{command.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      {command.category}
                    </span>
                    {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-[#F59E0B]" />}
                  </div>
                </button>
              )
            })
          ) : (
            <div className="p-6 text-center text-sm text-zinc-500">
              No matching sections found.
            </div>
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Abdellah Aregaw · QuickNav</span>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
