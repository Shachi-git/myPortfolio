'use client'

import { useState } from 'react'
import {
  Code,
  Palette,
  Server,
  Smartphone,
  Globe,
  Atom,
  Zap,
  FileText,
  Layers,
  GitBranch,
  Settings,
  Accessibility,
  Brush,
  Lightbulb,
  Users,
  Cloud,
} from 'lucide-react'
import { FaVuejs, FaCode, FaNodeJs } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiSanity,
  SiDirectus,
  SiFigma,
  SiReactquery,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
} from 'react-icons/si'
import { PiFileCSharp } from 'react-icons/pi'

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code,
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: PiFileCSharp },
      { name: 'C', icon: Code },
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
      { name: 'Go High Level', icon: FaCode },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Services',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Sanity', icon: SiSanity },
      { name: 'Directus', icon: SiDirectus },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    id: 'tools',
    label: 'Framework & Tools',
    icon: Settings,
    skills: [
      { name: 'Vercel', icon: Cloud },
      { name: 'Vite', icon: Zap },
      { name: 'Git', icon: GitBranch },
      { name: 'Sanity Studio', icon: Settings },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    skills: [{ name: 'React Native', icon: Atom }],
  },
  {
    id: 'design',
    label: 'Design & Others',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Adobe Photoshop', icon: Brush },
      { name: 'Adobe Illustrator', icon: Brush },
      { name: 'Canva', icon: Lightbulb },
      { name: 'UI/UX Design', icon: Lightbulb },
      { name: 'Web Accessibility', icon: Accessibility },
    ],
  },
  {
    id: 'management',
    label: 'Project Management',
    icon: Users,
    skills: [
      { name: 'Jira', icon: Users },
      { name: 'Atlassian Suite', icon: Users },
      { name: 'Agile/Scrum', icon: Users },
      { name: 'Project Planning', icon: Users },
    ],
  },
]

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const activeSkills =
    skillCategories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <section id="skills" className="bg-background py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-400/90">
            A collection of programming languages, frameworks, tools, and
            technologies I work with and have gained experience in through
            projects and hands-on practice.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 cursor-pointer border border-gray-500/20 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'gradient-bg shadow-[0_0_10px_rgba(16,185,129,0.8)]'
                    : 'text-foreground skills-btn shadow-[0_0_15px_rgba(0,0,2,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.8)]'
                }`}
              >
                <Icon className="h-5 w-5" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Skills*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeSkills.map((skill, index) => {
            const SkillIcon = skill.icon
            return (
              <div
                key={skill.name}
                className="flex items-center border border-gray-500/20 gap-3 px-6 py-4 shadow-[0_0_15px_rgba(0,0,2,0.2)] rounded-lg font-medium text-foreground "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillIcon className="h-5 w-5 flex-shrink-0" />
                <span>{skill.name}</span>
              </div>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="heading-md mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['BitBucket', 'SourceTree'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border-gray-500/20 rounded-lg text-sm font-medium text-foreground  shadow-[0_0_15px_rgba(0,0,10,0.5)]  transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
