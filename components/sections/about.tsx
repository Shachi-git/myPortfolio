'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume - John Paul Olimpo - Software Engineer.pdf'
    link.download = 'Resume - John Paul Olimpo - Software Engineer.pdf'
    link.click()
  }

  return (
    <section
      id="about"
      className="bg-background py-32 lg:py-32 md:justify-center md:items-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up px-3">
            <h2 className="text-4xl mb-6 font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 flex-grow text-muted-foreground leading-relaxed text-justify text-gray-400/90">
              <p>
                I am Computer Engineering graduate from the Polytechnic
                University of the Philippines - Santa Maria Bulacan Campus who
                discovered a real passion for software development. Even though
                my course leans more toward hardware and automation, I have
                grown to enjoy both sides. I like hardware just as much as I
                enjoy software development, and right now I am exploring how to
                maximize my skills in both areas while continuing to learn and
                grow.
              </p>

              <p>
                Most of what I know comes from a mix of internships, hands-on
                projects, and plenty of self-study. Along the way, I have gotten
                comfortable with React, Next.js, TypeScript, Tailwind CSS, and
                Node.js, and I like experimenting with new tools that make
                development faster and cleaner. I enjoy taking an idea from
                scratch and shaping it into something people can actually use.
              </p>

              <p>
                Outside of coding, I am the type of person who always wants to
                outdo {"yesterday's"} version of myself, whether that means
                learning a new framework, fixing a tricky bug, or just picking
                up a random skill that sparks my curiosity. For me, growth and
                fun go hand in hand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={handleDownloadResume}
                className="gradient-bg group font-medium hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="ghost border font-medium border-gray-500/20 gradient-text hover:text-inherit contact-btn"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {"Let's"} Connect
              </Button>
            </div>
          </div>

          {/* Image/Visual (only on large screens) */}
          <div className="hidden lg:block relative border-b-4 border-emerald-400">
            <Image
              src="/jp.png"
              alt="JohnPaul-Photo"
              width={700}
              height={700}
              className="ml-5 drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] -mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
