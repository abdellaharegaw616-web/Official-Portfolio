import React from 'react'
import { Crown, Dumbbell } from 'lucide-react'
import { hobbies } from '../data/hobbies'

export function Hobbies() {
  return (
    <section id="hobbies" aria-label="Beyond the code" className="py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-3 flex items-baseline gap-2.5">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold">
              04
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              OFF THE CLOCK
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-[1.08]">
              Beyond the code
            </h2>
          </div>
        </div>

        {/* 2-Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 border-t border-[#232736] pt-12 sm:pt-16">
          <div className="hidden lg:block lg:col-span-3" />
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="space-y-3">
                <h3 className="flex items-center gap-2.5 text-xl font-semibold text-white">
                  {hobby.id === 'chess' ? (
                    <Crown className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Dumbbell className="w-5 h-5 text-amber-400" />
                  )}
                  <span>{hobby.title}</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {hobby.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hobbies
