'use client'

import { ArrowUp, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center justify-center gap-5 text-center sm:gap-6">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="ghost contact-btn group w-full max-w-[180px] border border-gray-500/20 font-medium sm:w-auto"
          >
            <ArrowUp className="mr-2 h-4 w-4 text-emerald-300 transition-transform group-hover:-translate-y-0.5 group-hover:text-inherit" />

            <span className="gradient-text transition-colors group-hover:text-inherit">
              Back to Top
            </span>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 text-sm text-gray-400/90 sm:text-base">
            <span>© {currentYear} John Paul.</span>

            <span>Made with</span>

            <Heart className="h-4 w-4 shrink-0 animate-pulse fill-red-400 text-red-400" />

            <span>and lots of coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}