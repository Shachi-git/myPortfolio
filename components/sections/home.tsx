'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const Home = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4"
    >
      {/* Effects */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-bg opacity-15 rounded-full blur-3xl"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 gradient-bg opacity-15 rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute -bottom-40 w-full h-80 gradient-bg opacity-5  blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <p className="font-medium mb-4 text-lg gradient-text">Hello, I am</p>
          <h1 className="text-5xl font-extrabold mb-6 text-foreground">
            John Paul <span className="gradient-text">Olimpo</span>
          </h1>
          <p className="text-xl text-gray-400/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating beautiful, functional
            web applications that solve real-world problems and deliver
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="gradient-bg group font-medium  hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="ghost border font-medium border-gray-500/20 gradient-text hover:text-inherit contact-btn"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/shachi-git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/olimpo-john-paul-dc-13a9621b8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:johnpaulolimpo7@gmail.com"
              className="p-3 rounded-full border transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500/70  rounded-full flex justify-center">
          <div className="w-1 h-3 border-x border-transparent bg-gray-500/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
