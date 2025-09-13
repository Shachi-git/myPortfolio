import { Footer } from '@/components/Footer'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Home } from '@/components/sections/home'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

export default function HomePage() {
  return (
    <div className="min-h-full">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
