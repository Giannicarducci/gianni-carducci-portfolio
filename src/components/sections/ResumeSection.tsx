"use client"

import React from 'react'
import { RainbowButton } from "../ui/rainbow-button"
import { FileText, GraduationCap, Calendar } from "lucide-react"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip" // Remove Tooltip imports
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover" // Add Popover imports
import Link from "next/link"

export function ResumeSection() {
  // Education credentials mapping
  const educationCredentials = [
    { institution: "FIU", year: "2008", title: "Master of International Business", image: "/education/credentials/10.jpg" },
    { institution: "UNITEC", year: "", title: "Ingeniero en Información (Information Engineering)", image: "/education/credentials/11.jpg" },
  ];
  
  // Courses and certifications mapping
  const coursesAndCertifications = [
    { institution: "Udemy", year: "2025", title: "The Ultimate Project Management PMP prep course", image: "/education/credentials/1.jpg" },
    { institution: "Project Management Institute", year: "2025", title: "Free introduction to cognitive project Management in AI (CPMAI)", image: "/education/credentials/3.jpg" },
    { institution: "Project Management Institute", year: "2025", title: "Generative AI overview for Project Managers", image: "/education/credentials/4.jpg" },
    { institution: "IBM / SkillUp EdTech", year: "2024", title: "Generative AI for Product Managers specialization", image: "/education/credentials/5.jpg" },
    { institution: "Scrum Alliance", year: "2019", title: "Certified ScrumMaster (CSM) — awarded 2019; inactive", image: "/education/credentials/9.jpg" },
    { institution: "Scrum.org", year: "2019", title: "Professional Scrum Master I (PSM I)", image: "/education/credentials/8.jpg" },
  ];
  
  // Resume experience data would be included here
  // You'd need to copy the complete experience data from the original sections.tsx file
  
  return (
    <section id="resume" className="py-24">
      <div className="glass-card rounded-2xl">
        <div className="p-8 lg:p-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Resume</h2>
            <Link href="/Gianni_Carducci_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <RainbowButton>
                Download PDF
              </RainbowButton>
            </Link>
          </div>
          
          <div className="mt-8 space-y-12">
            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Summary</h3>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <p className="text-lg text-white/80 leading-relaxed">
                  From concept to execution, I turn innovative ideas into scalable solutions. Whether it's enhancing user engagement, streamlining workflows, or leveraging AI—let's build something extraordinary together.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-sm text-white/60 -mt-4 mb-4">(Tap card to view certificate)</p>
              {/* <TooltipProvider> Removed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reverted to grid layout */}
                  {educationCredentials.map((credential, index) => (
                    <Popover key={index}> {/* Replace Tooltip */}
                      <PopoverTrigger asChild> {/* Replace TooltipTrigger */}
                        <div className="bg-black/30 rounded-lg p-4 flex-1 min-w-[200px] max-w-[280px] border border-white/10 cursor-pointer hover:bg-black/40 transition-colors">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-white/80">{credential.institution}</p>
                            <div className="flex items-center gap-1 text-white/60 text-xs">
                              <Calendar className="w-3 h-3" />
                              <span>{credential.year}</span>
                            </div>
                          </div>
                          <h4 className="text-sm font-medium text-white mt-2">{credential.title}</h4>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 overflow-hidden max-w-md bg-black/90 border border-white/20" sideOffset={10}> {/* Replace TooltipContent */}
                        <img 
                          src={credential.image} 
                          alt={`${credential.institution} - ${credential.title} Certificate`} 
                          className={`w-full h-auto max-h-[400px] object-contain ${credential.institution === "UNITEC" ? "rotate-90" : ""}`}
                        />
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              {/* </TooltipProvider> Removed */}
            </div>
            
            {/* Courses and Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Courses and Certifications</h3>
              </div>
              <p className="text-sm text-white/60 -mt-4 mb-4">(Tap card to view certificate)</p>
              {/* <TooltipProvider> Removed */}
                <div className="flex flex-wrap gap-4 justify-between">
                  {coursesAndCertifications.map((credential, index) => (
                    <Popover key={index}> {/* Replace Tooltip */}
                      <PopoverTrigger asChild> {/* Replace TooltipTrigger */}
                        <div className="bg-black/30 rounded-lg p-4 flex-1 min-w-[200px] max-w-[280px] border border-white/10 cursor-pointer hover:bg-black/40 transition-colors">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-white/80">{credential.institution}</p>
                            <div className="flex items-center gap-1 text-white/60 text-xs">
                              <Calendar className="w-3 h-3" />
                              <span>{credential.year}</span>
                            </div>
                          </div>
                          <h4 className="text-sm font-medium text-white mt-2">{credential.title}</h4>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 overflow-hidden max-w-md bg-black/90 border border-white/20" sideOffset={10}> {/* Replace TooltipContent */}
                        <img 
                          src={credential.image} 
                          alt={`${credential.institution} - ${credential.title} Certificate`} 
                          className="w-full h-auto max-h-[400px] object-contain"
                        />
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              {/* </TooltipProvider> Removed */}
            </div>
            
            {/* Experience section would go here */}
            {/* You'd need to copy the complete experience section from the original sections.tsx file */}
          </div>
        </div>
      </div>
    </section>
  )
} 