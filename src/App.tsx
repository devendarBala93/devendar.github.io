import { About } from './components/About'
import { CaseStudies, Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Engineering } from './components/Engineering'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { useScrollReveals } from './hooks/useScrollReveals'

export default function App() {
  useScrollReveals()

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="content" className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-4 sm:px-6">
        <Hero />
        <Projects />
        <CaseStudies />
        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <Skills />
          <Engineering />
        </div>
        <About />
        <Contact />
      </main>
    </>
  )
}
