'use client'

import { useState } from 'react'
import {
  Briefcase,
  Calendar,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import cn from 'classnames'
import { Button } from '../ui/Button'

interface Experience {
  id: string
  title: string
  company: string
  duration: string
  description: string
  longDescription: string
  category: string[]
  tech: string[]
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Junior Front-end Developer',
    company: 'Lion Sales Funnel',
    duration: 'September 2025 – September 2026',
    description:
      'Worked as an on-call frontend developer, building and maintaining websites and landing pages for different projects.',
    longDescription:
      'Worked as an on-call frontend developer, helping build and maintain websites and landing pages for different projects. My work involved translating designs into responsive web interfaces, implementing updates based on project requirements, fixing frontend issues, and maintaining existing websites.',
    category: ['Frontend', 'Web Development'],
    tech: [
      'React',
      'Vue.js',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
    ],
    responsibilities: [
      'Built and maintained websites and landing pages using React, Vue, and Next.js',
      'Translated designs into responsive and functional web interfaces',
      'Implemented layout, styling, and content updates based on project requirements',
      'Fixed frontend issues and maintained existing websites',
      'Used Git and other development tools as part of the development workflow',
      'Assisted with internal web-based projects and forms',
    ],
  },
  {
    id: '2',
    title: 'Junior Full Stack Web Developer',
    company: 'Ally Public Adjusting',
    duration: 'January 2026 – August 2026',
    description:
      'Worked on frontend interfaces, web workflows, and backend-related tasks based on project requirements and design specs.',
    longDescription:
      'Worked on frontend interfaces and internal workflows based on design specifications, while also contributing to backend-related tasks and bug fixes. My role provided experience working across different parts of a web application, including frontend development, and backend functionality.',
    category: ['Full-stack', 'Frontend'],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'FastAPI',
      'REST API',
    ],
    responsibilities: [
      'Built and maintained frontend interfaces and user workflows',
      'Translated design specifications into responsive web pages',
      'Worked on document and text extraction-related fixes',
      'Worked with PostgreSQL and backend functionality',
      'Explored FastAPI and REST APIs to improve backend development skills',
      'Collaborated with the team on website updates and improvements',
    ],
  },
  {
    id: '3',
    title: 'Software Engineer Intern – DiSH',
    company: 'Hooli Software · Microsoft Project',
    duration: 'June 2025 – September 2025',
    description:
      'Worked on frontend development, accessibility, usability, and performance as part of a Microsoft-related project.',
    longDescription:
      'Worked as part of a collaborative team on DiSH, a Microsoft-related project. My work focused on improving web accessibility, usability, and performance while participating in Agile development practices alongside engineers, QA, designers, and product managers.',
    category: ['Frontend', 'UI/UX', 'Accessibility'],
    tech: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Web Accessibility',
      'Git',
    ],
    responsibilities: [
      'Improved web accessibility compliance to make the website more inclusive for diverse users',
      'Collaborated in Agile sprints with engineers, QA, designers, and product managers',
      'Enhanced usability and performance to improve the overall user experience',
      'Worked within a collaborative software development environment',
    ],
  },
  {
    id: '4',
    title: 'Software Engineer Intern – Zentive',
    company: 'Hooli Software',
    duration: 'August 2024 – October 2024',
    description:
      'Worked on UI modifications and bug fixes based on design specifications.',
    longDescription:
      'Worked on frontend improvements for Zentive, implementing UI changes and fixing bugs based on design specifications. This experience helped strengthen my understanding of React-based development and translating designs into functional interfaces.',
    category: ['Frontend', 'UI Development'],
    tech: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
    ],
    responsibilities: [
      'Implemented UI modifications based on design specifications',
      'Fixed frontend bugs and interface issues',
      'Used React to develop and update user interfaces',
      'Used Tailwind CSS for styling and responsive layouts',
      'Worked within a team development workflow',
    ],
  },
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null)

  return (
    <section id="experience" className="bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-xl max-w-2xl mx-auto text-gray-400/90">
            A look at my professional experience, internships, and the
            technologies I have worked with throughout my development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={cn(
                'border-gray-500/20 border-2 rounded-xl',
                'transition-all duration-300 shadow-[0_0_15px_rgba(0,0,2,0.2)]',
                'hover:shadow-[0_0_25px_rgba(16,185,129,0.8)]',
                'animate-slide-up p-9 transform hover:translate-y-[-10px]',
              )}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedExperience(experience)}
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-300/10 text-emerald-400 flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7" />
              </div>

              <div className="mb-4 flex-wrap gap-2">
                {experience.category.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="inline-block px-3 py-1 text-xs font-medium p-3 bg-emerald-300/10 text-emerald-400 rounded-full mb-2 mr-2"
                  >
                    {category}
                  </span>
                ))}

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {experience.title}
                </h3>

                <p className="text-emerald-400 font-medium mb-2">
                  {experience.company}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-400/90 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>

                <p className="text-gray-400/90 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {experience.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-green-900/20 text-inherit rounded-md border"
                  >
                    {tech}
                  </span>
                ))}

                {experience.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-400/90">
                    +{experience.tech.length - 3} more
                  </span>
                )}
              </div>

              <Button
                className="w-full gradient-bg rounded-md px-4 py-2 text-sm font-medium text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedExperience(experience)
                }}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedExperience}
          onOpenChange={() => setSelectedExperience(null)}
        >
          <DialogContent className="w-[95%] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-8">
            {selectedExperience && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedExperience.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-medium text-emerald-400">
                      {selectedExperience.company}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400/90 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedExperience.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Overview
                    </h3>

                    <p className="text-gray-400/90 leading-relaxed">
                      {selectedExperience.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Responsibilities
                    </h3>

                    <ul className="space-y-2">
                      {selectedExperience.responsibilities.map(
                        (responsibility, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>

                            <span className="text-gray-400/90">
                              {responsibility}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Languages and Tools used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-900/20 text-inherit rounded-lg border font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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