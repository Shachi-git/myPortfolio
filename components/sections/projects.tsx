'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import cn from 'classnames'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tech: string[]
  category: string
  demoUrl: string
  sourceUrl: string
  features: string[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Konek - Blog Platform',
    description:
      'A full-stack blog platform where users can create, publish, and browse posts.',
    longDescription:
      'Konek is a full-stack blog application built with Next.js, Sanity (headless CMS), and deployed on Vercel. It allows users to log in, create and publish their own posts, and explore content from other users with filtering options by views and recency. The project demonstrates integration of modern frontend frameworks with a content management system, delivering a scalable and production-ready blogging experience.',
    image: '/Konek.png',
    tech: ['React', 'Next.js', 'TailwindCSS', 'Sanity'],
    category: 'Full-stack',
    demoUrl: 'https://konek.vercel.app',
    sourceUrl: 'https://github.com/Shachi-git/Konek',
    features: [
      'Manual authentication for user login',
      'Post creation & publishing powered by Sanity CMS',
      'Filtering options by views and latest posts',
      'CMS integration for managing posts and user data',
      'Deployed on Vercel for fast and scalable hosting',
      'Responsive design for all devices',
      'Planned enhancements: like, comment, share, UI improvements, edit, and delete',
    ],
  },
  {
    id: '2',
    title: 'Tic-Tac-Toe - Two Player Game',
    description:
      'A simple two-player digital Tic-Tac-Toe game with responsive UI and turn-based logic.',
    longDescription:
      'This project recreates the classic pencil-and-paper game Tic-Tac-Toe in a modern web format using Next.js and deployed on Vercel. Designed for two players, it features responsive design, smooth interactions, and accurate game logic for win/draw conditions. Future improvements are planned to extend functionality and user engagement.',
    image: '/3T.png',
    tech: ['Next.js', 'React', 'TailwindCSS'],
    category: 'Frontend',
    demoUrl: 'https://tic-tac-toe-rho-murex-43.vercel.app',
    sourceUrl: 'https://github.com/Shachi-git/Tic-tac-toe',
    features: [
      'Two-player mode with turn-based interactions',
      'Win/draw validation for accurate outcomes',
      'Responsive design for smooth play across devices',
      'Deployed on Vercel',
      'Planned improvements: AI opponent, diffeculty base, UI animations',
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-400/90">
            A showcase of my recent work, demonstrating my expertise in various
            programming languages and my passion for web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'border-gray-500/20 border-2 rounded-xl',
                'transition-all duration-300 shadow-[0_0_15px_rgba(0,0,2,0.2)]',
                'hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] animate-slide-up p-9 transform hover:translate-y-[-10px]',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium p-3 bg-emerald-300/10 text-emerald-400 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400/90 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-green-900/20 text-inherit rounded-md border"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400/90">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  className="flex-1 gradient-bg"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="ghost border font-medium border-gray-500/20 hover:text-inherit contact-btn p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.demoUrl, '_blank')
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="ghost border font-medium border-gray-500/20 hover:text-inherit contact-btn p-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.sourceUrl, '_blank')
                  }}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-gray-400/90 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Languages and Tools used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-900/20 text-inherit rounded-lg border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="gradient-bg font-medium hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.4)] hover:scale-105 flex-1"
                      onClick={() =>
                        window.open(selectedProject.demoUrl, '_blank')
                      }
                    >
                      <ExternalLink className="mr-2 h-4 w-4 " />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border font-medium border-gray-500/20 text-emerald-400 hover:text-inherit contact-btn flex-1"
                      onClick={() =>
                        window.open(selectedProject.sourceUrl, '_blank')
                      }
                    >
                      <Github className="mr-2 h-4 w-4 " />
                      Source Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
