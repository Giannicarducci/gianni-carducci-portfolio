'use client'

import { SplineSceneBasic } from "../components/demo"
import { NavBarDemo } from "../components/demo"
import { AboutSection } from "../components/sections/AboutSection"
import { ProjectsSection, ResumeSection } from "../components/sections"
import { Footer } from "../components/ui/large-name-footer"
import { RainbowButton } from "../components/ui/rainbow-button"
import Link from "next/link"



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#08080D]">
      <NavBarDemo />
      
      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen">
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="container-custom relative z-20 text-left">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Gianni Carducci
              </h1>
              <h2 className="text-2xl sm:text-3xl mt-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                AI Product Development &amp; Implementation
              </h2>
              <p className="text-xl sm:text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Building software. Helping people use it.
              </p>
              <p className="mt-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 font-medium mx-auto max-w-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Creator of ProfitTracker, with experience in software deployment, user training, and AI-assisted development. English, Spanish, and Italian.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/Gianni_Carducci_Resume.pdf" target="_blank">
                  <RainbowButton>
                    Resume/CV
                  </RainbowButton>
                </Link>
                <Link href="mailto:info@giannicarducci.com?subject=Job Opportunity">
                  <RainbowButton>
                    Contact me
                  </RainbowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Robot Scene */}
        <div className="absolute inset-y-0 right-0 z-10 w-full md:w-1/2">
          <SplineSceneBasic />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08080D] pointer-events-none" />
      </section>

      {/* Content Sections */}
      <div className="container-custom relative z-20">
        <AboutSection />

        <ProjectsSection />
        <ResumeSection />

      </div>

      <Footer />
    </main>
  )
}

