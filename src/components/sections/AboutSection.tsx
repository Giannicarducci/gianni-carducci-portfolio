"use client"

import React from 'react'
import { Users } from "lucide-react"
import { RainbowButton } from "../ui/rainbow-button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-16"> {/* Match the reduced padding from other sections */}
      <div className="glass-card rounded-2xl">
        <div className="p-6 lg:p-8"> {/* Match the reduced padding from other sections */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">About Me</h2>
          </div>
          <div className="mt-8 space-y-8">
            {/* Headshot Image and Bio */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
              {/* Headshot Image */}
              <div className="flex justify-center md:justify-end md:order-last">
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden group animate-rainbow bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]">
                  <img
                    src="/Headshot.jpeg"
                    alt="Gianni Carducci Headshot"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-[20%] left-1/2 z-0 h-1/5 w-3/5 -translate-x-1/2 animate-rainbow bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] bg-[length:200%] [filter:blur(calc(0.8*1rem))]" />
                </div>
              </div>
              {/* Bio Text */}
              <div className="space-y-6 md:w-3/4">
                <p className="text-lg text-white/80 leading-relaxed">
                  I build useful software with AI and enjoy helping people get comfortable with new tools. My current project is ProfitTracker, a launched SaaS product that I continue to develop. It brings together earnings and expense tracking, reporting, account access, and subscription billing. Earlier in my career, I worked on software deployment and user training for Latin American teams through staffing-agency assignments at Microsoft. I bring that experience together with hands-on product work and ongoing learning in generative AI.
                </p>
              </div>
            </div>
            
            {/* For Recruiters Section */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                    For Recruiters
                  </h3>
                  <p className="text-white/80 mb-4">I’m interested in AI implementation, product support, onboarding, and product operations roles. I’m based in Los Angeles and especially interested in remote opportunities.</p>
                  <div className="flex gap-4 mt-6">
                    <Link href="/Gianni_Carducci_Resume.pdf" target="_blank">
                      <RainbowButton>
                        Resume
                      </RainbowButton>
                    </Link>
                    <Link href="mailto:info@giannicarducci.com?subject=Job Opportunity">
                      <RainbowButton>
                        Contact Me
                      </RainbowButton>
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Quick Facts</h4>
                  <ul className="space-y-2 text-white/80 mt-4">
                    <li>✓ Built and launched ProfitTracker; development is ongoing</li>
                    <li>✓ Professional Scrum Master I (Scrum.org)</li>
                    <li>✓ Generative AI for Product Managers coursework</li>
                    <li>✓ English, Spanish, and Italian</li>
                    <li>✓ Software deployment and user training experience</li>
                    <li>✓ Remote preferred; local Los Angeles roles considered</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional AboutSection content could be added here */}
          </div>
        </div>
      </div>
    </section>
  )
} 
