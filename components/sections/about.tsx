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
                I am a Computer Engineering graduate from the Polytechnic
                University of the Philippines with professional experience in
                web development. I have worked on frontend interfaces, websites,
                and web applications using technologies such as React, Next.js,
                TypeScript, Vue.js, and Tailwind CSS.
              </p>

              <p>
                My professional experience has mainly been focused on frontend
                development, while also giving me opportunities to work with
                backend systems, databases, and application workflows. These
                experiences have motivated me to expand beyond frontend
                development and build a stronger understanding of the full web
                development process.
              </p>

              <p>
                I am currently developing my backend skills with Python,
                FastAPI, REST APIs, and PostgreSQL as I work toward becoming a
                Junior Full-Stack Developer. I enjoy learning how frontend
                applications communicate with backend services and how the
                different parts of a web application work together.
              </p>

              <p>
                I believe learning never really stops, and I am always looking
                for ways to improve through professional experience, personal
                projects, and continuous study. My goal is to continue growing
                as a developer, take on more backend responsibilities, and
                become a well-rounded full-stack developer.
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

          <div className="hidden lg:block relative border-b-4 border-emerald-400">
            <Image
              src="/jp.png"
              alt="JohnPaul-Photo"
              width={700}
              height={700}
              className="ml-5 block"
              style={{
                filter: 'drop-shadow(0 0 25px rgba(16,185,129,0.8))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
