"use client"

import React from 'react'
import { GlareCard } from "../ui/glare-card" // Keep GlareCard import for other projects
import Link from "next/link" // Add Link import

export function ProjectsSection() {
  return (
    <>
      <section id="projects" className="py-24">
        <div className="glass-card rounded-2xl">
          <div className="p-4 sm:p-8 lg:p-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Projects</h2>
            {/* First Row - 2 Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {/* Cream App Card */}
              <div className="w-full lg:w-[45%] lg:min-w-[280px] h-full flex flex-shrink-0">
                <GlareCard
                  className="flex flex-col items-center py-4 sm:py-6 px-3 sm:px-4 w-full h-[350px] bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
                  backgroundImageUrl="/creamgroup.JPG"
                >
                  <div className="relative h-full p-6 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Cream App</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">
                        A niche marketing app specializing in LGBTQ oriented events and business.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">React Native</span>
                        <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">iOS</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Android</span>
                      </div>
                    </div>
                  </div>
                </GlareCard>
              </div>

              {/* ProfitTracker.net Card */}
              <div className="w-full lg:w-[45%] lg:min-w-[280px] h-full flex flex-shrink-0">
                <Link href="https://profit-tracker-e3aaa.web.app/app" target="_blank" className="block w-full h-full">
                  <GlareCard className="flex flex-col items-center py-4 sm:py-6 px-3 sm:px-4 w-full h-[350px] bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-full p-6 flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">PT</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white">ProfitTracker.net</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">
                          Spearheaded a company-wide digital transformation project, implementing automated workflows and modern collaboration tools.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">WEBAPP</span>
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">SAAS</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">CLOUD</span>
                        </div>
                      </div>
                    </div>
                  </GlareCard>
                </Link>
              </div>
            </div>

            {/* Second Row - 2 Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {/* YouTube Channel Card */}
              <div className="w-full lg:w-[45%] lg:min-w-[280px] h-full flex flex-shrink-0">
                <Link href="#" target="_blank" className="block w-full h-full">
                  <GlareCard className="flex flex-col items-center py-4 sm:py-6 px-3 sm:px-4 w-full h-[350px] bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-full p-6 flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">YT</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white">YouTube Channel</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">
                          Educational content focused on AI, product development, and tech innovation. Sharing insights and experiences in digital transformation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Content Creation</span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">AI & Tech</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Education</span>
                        </div>
                      </div>
                    </div>
                  </GlareCard>
                </Link>
              </div>

              {/* Luis Gilberto Website Card */}
              <div className="w-full lg:w-[45%] lg:min-w-[280px] h-full flex flex-shrink-0">
                <Link href="https://luis-gilberto.com" target="_blank" className="block w-full h-full">
                  <GlareCard className="flex flex-col items-center py-4 sm:py-6 px-3 sm:px-4 w-full h-[350px] bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group cursor-pointer">
                    <div className="relative h-full p-6 flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">LG</span>
                          </div>
                          <h3 className="text-xl font-semibold text-white">Luis Gilberto</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 flex-grow">
                          Collaborated with Luis Gilberto to rebuild and modernize his personal website. I owned technical direction and setup, building the initial framework and first pages.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Next.js</span>
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">Website</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Collaboration</span>
                        </div>
                      </div>
                    </div>
                  </GlareCard>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}