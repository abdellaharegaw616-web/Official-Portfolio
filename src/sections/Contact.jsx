import React, { useState } from 'react'
import { ArrowUpRight, Github, Mail, Phone, MapPin, Send, Check, AlertCircle, FileText } from 'lucide-react'
import { profile } from '../data/profile'

export function Contact({ onOpenResumeModal }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) return

    setIsLoading(true)

    // Simulate preparation & launch functional mailto fallback
    setTimeout(() => {
      setIsLoading(false)
      setIsSent(true)

      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${formData.name.trim()}`
      )
      const body = encodeURIComponent(
        `Hello Abdellah,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      )
      window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
    }, 400)
  }

  return (
    <section id="contact" aria-label="Contact Section" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-[#F59E0B] font-mono text-xs uppercase tracking-widest font-semibold">
              05
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              CONTACT
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#F5F5F5] tracking-tight leading-[1.08]">
              {profile.contact.heading}
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-base sm:text-lg leading-relaxed">
              {profile.contact.body}
            </p>
          </div>
        </div>

        {/* Content: Left Info & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[#232736] pt-12 sm:pt-16">
          <div className="hidden lg:block lg:col-span-3" />

          {/* Left: Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                  Location
                </span>
                <span className="text-base text-zinc-200 font-medium block">
                  {profile.location}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  Campus: {profile.university}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                  Direct Email
                </span>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-[#F59E0B] transition-colors break-all"
                >
                  {profile.contact.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:${profile.contact.phone}`}
                  className="text-base sm:text-lg font-medium text-white hover:text-[#F59E0B] transition-colors font-mono"
                >
                  {profile.contact.phoneDisplay} ({profile.contact.phone})
                </a>
              </div>
            </div>

            {/* Profiles & Resume */}
            <div className="pt-5 border-t border-[#232736] space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                Profiles & Documents
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-[#F59E0B] transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                {profile.links.linkedin ? (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-[#F59E0B] transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-500">
                    LinkedIn profile in configuration
                  </span>
                )}

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-[#F59E0B] transition-colors text-left"
                >
                  <FileText className="w-4 h-4 text-zinc-400" />
                  <span>View Academic Resume (Placeholder)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a message
            </h3>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-[#11131A] border border-emerald-500/30 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">Message prepared!</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Your mail client has been opened with your inquiry pre-filled. You can also send directly to{' '}
                  <a href={`mailto:${profile.contact.email}`} className="text-[#F59E0B] underline">
                    {profile.contact.email}
                  </a>{' '}
                  or call{' '}
                  <a href={`tel:${profile.contact.phone}`} className="text-[#F59E0B] underline font-mono">
                    {profile.contact.phoneDisplay}
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false)
                    setFormData({ name: '', email: '', message: '' })
                  }}
                  className="text-xs font-mono text-zinc-400 hover:text-white underline pt-2 block mx-auto"
                >
                  Reset form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: null })
                    }}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F59E0B] transition-colors text-sm ${
                      errors.name ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: null })
                    }}
                    placeholder="Your email address"
                    className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F59E0B] transition-colors text-sm ${
                      errors.email ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Message <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: null })
                    }}
                    placeholder="Tell me about your project, opportunity, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#151821] border text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F59E0B] transition-colors text-sm resize-none ${
                      errors.message ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold text-sm transition-all duration-150 active:scale-[0.98] shadow-md shadow-amber-500/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isLoading ? 'Preparing...' : 'Send Message'}</span>
                  </button>

                  <span className="text-[11px] font-mono text-zinc-500">
                    // Triggers functional mail client dispatch
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
