'use client'

import {
  Code,
  Palette,
  Server,
  Globe,
  Atom,
  Zap,
  FileText,
  Layers,
  GitBranch,
  Settings,
  Accessibility,
  Lightbulb,
  Users,
} from 'lucide-react'
import { FaVuejs, FaPython } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiReactquery,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiPostgresql,
} from 'react-icons/si'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code,
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    id: 'frontend',
    label: 'Front-end',
    icon: Globe,
    skills: [
      { name: 'React', icon: Atom },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'Next.js', icon: Zap },
      { name: 'HTML/CSS', icon: FileText },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: Layers },
      { name: 'React Query', icon: SiReactquery },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    id: 'tools',
    label: 'Version Control',
    icon: Settings,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Bitbucket', icon: GitBranch },
      { name: 'SourceTree', icon: GitBranch },
    ],
  },
  {
    id: 'design',
    label: 'Design & Others',
    icon: Palette,
    skills: [
      { name: 'Canva', icon: Lightbulb },
      { name: 'UI/UX Design', icon: Lightbulb },
      { name: 'Web Accessibility', icon: Accessibility },
    ],
  },
  {
    id: 'management',
    label: 'Development Practices',
    icon: Users,
    skills: [
      { name: 'Jira', icon: Users },
      { name: 'Agile/Scrum', icon: Users },
    ],
  },
]

export const Skills = () => {
  return (
    <section id="skills" className="bg-background px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-gray-400/90">
            Technologies and tools I have worked with through professional
            experience, projects, and hands-on practice.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <div
                key={category.id}
                className="rounded-lg border border-gray-500/20 p-6 shadow-[0_0_15px_rgba(0,0,2,0.2)]"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <CategoryIcon className="h-6 w-6" />

                  <h3 className="text-lg font-semibold">{category.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-gray-500/20 px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-emerald-500/40"
                      >
                        <SkillIcon className="h-4 w-4 flex-shrink-0" />

                        <span>{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
