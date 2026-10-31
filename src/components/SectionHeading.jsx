import React from 'react'

export function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center'

  return (
    <div
      className={`mb-10 sm:mb-14 ${
        isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 mb-3 ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        {number && (
          <span className="font-mono text-xs font-bold tracking-wider text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-950/50 px-2 py-0.5 rounded border border-orange-200/80 dark:border-orange-900/60">
            {number}
          </span>
        )}
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400 border border-orange-200/80 dark:border-orange-900/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
