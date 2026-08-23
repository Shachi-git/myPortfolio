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
                I am a Computer Engineering graduate from the Polytechnic University of
                the Philippines - Santa Maria Bulacan Campus with a growing passion for
                software development. While my degree has a strong foundation in hardware
                and automation, I enjoy working across both hardware and software and
                continue to explore how I can make the most of both skill sets.
              </p>

              <p>
                I now have professional experience as an on-call Frontend Developer from Septempber
                upto August, working on websites and frontend interfaces while gaining experience in
                real-world development environments. I also gained professional
                experience as a Web Developer earlier this year, from January to August, which helped me
                strengthen my development skills and better understand how software is
                built and maintained in a professional setting.
              </p>

              <p>
                My experience has given me a strong foundation in React, Next.js,
                TypeScript, Tailwind CSS, and FastAPI. I am now broadening my skills toward
                full-stack development and currently studying FastAPI to strengthen my
                backend knowledge. I am also exploring how backend systems connect with
                AI, including agentic patterns, tool calling, and the development of more
                capable AI-powered applications.
              </p>

              <p>
                I believe learning never really stops, and I am always looking for ways
                to improve through professional experience, personal projects, and
                continuous study. I enjoy solving problems, experimenting with new
                technologies, and gradually becoming a more well-rounded developer.
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
