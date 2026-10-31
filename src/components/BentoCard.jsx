import React from 'react'

/**
 * BentoCard: Core Bento container component.
 * Features:
 * - 20px moderate rounded corners (`rounded-[20px]`)
 * - 70% neutral light / 20% dark card styling
 * - Subtle hover effects with restrained orange accent
 * - Proper dark mode tokens (#111827 background, #1F2937 border)
 */
export function BentoCard({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      onClick={onClick}
      className={`relative bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-gray-800 rounded-[20px] p-6 sm:p-8 transition-all duration-200 overflow-hidden ${
        hoverEffect
          ? 'hover:border-orange-500/40 dark:hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default BentoCard
