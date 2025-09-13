'use client'

import { ArrowUp, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="ghost border font-medium border-gray-500/20 contact-btn group"
          >
            <ArrowUp className="mr-2 h-4 w-4 text-emerald-300 group-hover:text-inherit group-hover:-translate-y-0.5 transition-transform" />
            <span className="gradient-text group-hover:text-inherit group">
              Back to Top
            </span>
          </Button>
          <div className="flex items-center gap-2 text-gray-400/90">
            <span>© {currentYear} John Paul. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
