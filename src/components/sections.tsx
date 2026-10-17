"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { GlareCard } from "./ui/glare-card"
import { BentoGrid } from "./ui/bento-grid"
import { RainbowButton } from "./ui/rainbow-button"
import {
  Brain,
  Database,
  Settings,
  BarChart,
  Palette,
  GraduationCap,
  Calendar,
  Lightbulb,
  Briefcase,
  FileText,
  Search,
} from "lucide-react"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip" // Remove Tooltip imports
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover" // Add Popover imports
import Link from "next/link"


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16"> {/* Reduced from py-24 */}
      <div className="glass-card rounded-2xl">
        <div className="p-4 sm:p-6 lg:p-8"> {/* Reduced from p-4 sm:p-8 lg:p-12 */}
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6"> {/* Changed from md:grid-cols-3 to md:grid-cols-2 */}
            {/* ProfitTracker.net */}
            <Link href="https://www.profittracker.net/" target="_blank" className="block w-full">
              <GlareCard
                className="flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4 mx-auto w-full cursor-pointer transition-transform hover:scale-[1.02]"
                backgroundImageUrl="/PTbackground.png"
              >
                <div className="flex justify-center items-center w-16 h-16 mb-4">
                   <img src="/PT.png" alt="ProfitTracker Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ProfitTracker.net SaaS</h3>
                <p className="font-normal text-base text-white mt-4 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Built and launched a SaaS product for tracking income, expenses, appointments, and reports. I continue developing it with AI assistance.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">WEB APP</span>
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">SAAS</span>
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">CLOUD</span>
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">AI-ASSISTED DEVELOPMENT</span>
                </div>
              </GlareCard>
            </Link>

            {/* Cream App */}
            <GlareCard
              className="flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4 mx-auto w-full"
              backgroundImageUrl="/creamgroup.JPG"
            >
              <div className="flex justify-center items-center w-16 h-16 mb-4">
                <img src="/cream icon.png" alt="Cream App Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Cream Guide — Personal Venture</h3>
              <p className="font-normal text-base text-white mt-4 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                A niche marketing app specializing in LGBTQ oriented events and business.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">iOS</span>
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Android</span>
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">React Native</span>
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">HTML</span>
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">CMS</span>
              </div>
            </GlareCard>

            {/* YouTube Channel */}
            <Link href="https://www.youtube.com/@giannicarducci" target="_blank" className="block w-full">
              <GlareCard
                className="flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4 mx-auto w-full youtube-card relative cursor-pointer transition-transform hover:scale-[1.02]"
                backgroundImageUrl="/YTbackground.jpeg"
              >
                <div className="flex justify-center items-center w-16 h-16 mb-4">
                  <img src="/youtube-logo.svg" alt="YouTube Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">YouTube Channel</h3>
                <p className="font-normal text-base text-white mt-4 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Educational content focused on AI, product development, and tech innovation. Sharing insights and experiences in digital transformation.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Content Creation</span>
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">AI & Tech</span>
                  <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Education</span>
                </div>
              </GlareCard>
            </Link>

            {/* Luis Gilberto Website */}
            <Link href="https://luis-gilberto.com" target="_blank" className="block w-full">
              <GlareCard
                className="flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4 mx-auto w-full cursor-pointer transition-transform hover:scale-[1.02]"
                backgroundImageUrl="/LGbackground.png"
              >
                <div className="flex justify-center items-center w-20 h-20 mb-4">
                   <img src="/LGLogo.svg" alt="Luis Gilberto Logo" className="w-full h-full object-contain" />
                 </div>
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Luis Gilberto</h3>
                <p className="font-normal text-base text-white mt-4 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Collaborated with Luis Gilberto to rebuild and modernize his personal website. I owned technical direction and setup, building the initial framework and first pages.
                </p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                   <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Vibe Coding</span>
                   <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Coding</span>
                   <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Collaboration</span>
                   <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">Development</span>
                   <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white font-medium">AI</span>
                 </div>
              </GlareCard>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// BlogSection removed as it's not being used in the main page

const experienceItems = [
  {
    "id": "1",
    "company": "ProfitTracker",
    "location": "Los Angeles, CA",
    "title": "Founder and Product Builder",
    "period": "2025 - Present",
    "logo": "/PT.png",
    "details": [
      "Built, launched, and continue to develop a web application for independent service providers to track income, expenses, appointments, and financial reports.",
      "Use AI-assisted coding with React and Firebase, including Google sign-in, Stripe subscription billing, and separate USD and EUR reporting.",
      "Maintain product onboarding and support resources, including FAQs, a downloadable user guide, and support request workflows."
    ]
  },
  {
    "id": "2",
    "company": "Cream Guide",
    "location": "Los Angeles, CA",
    "title": "Personal Venture",
    "period": "2019 - 2024",
    "logo": "/cream icon.png",
    "details": [
      "Developed a digital events and business platform, working on product planning, user experience, publishing workflows, and launch coordination."
    ]
  },
  {
    "id": "5",
    "company": "Microsoft — Staffing-agency contract assignment",
    "location": "Redmond, WA",
    "title": "Project Manager and Field Deployment Lead, Latin America",
    "period": "Aug 2012 - Jan 2014",
    "logo": "/Microsoft2.png",
    "details": [
      "Supported rollout of Global Marketing Operations tools across Latin America, including Execution Planning, ExactTarget, and Dynamics.",
      "Trained field marketers and coordinated requirements and feedback among regional stakeholders, product owners, and development teams."
    ]
  },
  {
    "id": "6",
    "company": "Microsoft — Staffing-agency contract assignment",
    "location": "Redmond, WA",
    "title": "Associate Product Manager, Windows Phone Latin America",
    "period": "Aug 2011 - May 2012",
    "logo": "/Microsoft2.png",
    "details": [
      "Worked on regional product deployment, content publishing, developer engagement, bug tracking, and pre-launch quality assurance."
    ]
  }
];

const skillItems = [
  {
    title: "Product Planning",
    description: "Product roadmaps, requirements gathering, stakeholder communication, Agile and Scrum.",
    icon: <Brain className="w-4 h-4 text-purple-500" />,
    status: "Experience",
    tags: ["Planning", "Requirements", "Scrum"],
  },
  {
    title: "AI-Assisted Development",
    description: "Building and maintaining ProfitTracker with AI-assisted coding, React, Firebase, and Stripe.",
    icon: <Database className="w-4 h-4 text-blue-500" />,
    status: "Current work",
    tags: ["AI", "Firebase", "Stripe"],
  },
  {
    title: "User Experience",
    description: "Product workflows, interface design, onboarding, and clear documentation for users.",
    icon: <Palette className="w-4 h-4 text-pink-500" />,
    status: "Experience",
    tags: ["UX", "Onboarding", "Documentation"],
    colSpan: 2,
  },
  {
    title: "Deployment and Training",
    description: "Software rollouts, user training, issue tracking, and coordination across regional teams.",
    icon: <Settings className="w-4 h-4 text-emerald-500" />,
    status: "Experience",
    tags: ["Rollouts", "Training", "Coordination"],
  },
];

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
  return (
    <section id="resume" className="py-16"> {/* Reduced from py-24 */}
      <div className="glass-card rounded-2xl">
        <div className="p-6 lg:p-8"> {/* Reduced from p-8 lg:p-12 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Resume</h2>
            <Link href="/Gianni_Carducci_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <RainbowButton>
                Download PDF
              </RainbowButton>
            </Link>
          </div>
          
          <div className="mt-6 space-y-8"> {/* Reduced from mt-8 space-y-12 */}
            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Summary</h3>
              </div>
              {/* Apply styling similar to Education cards */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/10">
                <p className="text-lg text-white/80 leading-relaxed"> {/* Reverted text color back to white/80 as the background is dark now */}
                  I bring together current AI-assisted product development and earlier software deployment and training experience. I’m interested in helping teams put useful technology into practice and helping customers get value from it.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4"> {/* Reduced from mb-6 */}
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              {/* <TooltipProvider> Removed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reverted to grid layout */}
                  {educationCredentials.map((credential, index) => (
                    <Popover key={index}>
                      <PopoverTrigger asChild>
                        {/* The comment was moved outside the trigger */}
                        <div className="relative bg-black/30 rounded-lg p-4 flex-1 min-w-[200px] max-w-[280px] border border-white/10 cursor-pointer hover:bg-black/40 transition-colors">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-white/80">{credential.institution}</p>
                            <div className="flex items-center gap-1 text-white/60 text-xs">
                              <Calendar className="w-3 h-3" />
                              <span>{credential.year}</span>
                            </div>
                          </div>
                          <h4 className="text-sm font-medium text-white mt-2">{credential.title}</h4>
                          <Search className="absolute bottom-2 right-2 w-4 h-4 text-white/50" /> {/* Added Search Icon */}
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
              <div className="flex items-center gap-2 mb-4"> {/* Reduced from mb-6 */}
                <FileText className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Courses and Certifications</h3>
              </div>
              {/* <TooltipProvider> Removed */}
                <div className="flex flex-wrap gap-4 justify-between">
                  {coursesAndCertifications.map((credential, index) => (
                    <Popover key={index}>
                      <PopoverTrigger asChild>
                         {/* The comment was moved outside the trigger */}
                        <div className="relative bg-black/30 rounded-lg p-4 flex-1 min-w-[200px] max-w-[280px] border border-white/10 cursor-pointer hover:bg-black/40 transition-colors">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-white/80">{credential.institution}</p>
                            <div className="flex items-center gap-1 text-white/60 text-xs">
                              <Calendar className="w-3 h-3" />
                              <span>{credential.year}</span>
                            </div>
                          </div>
                          <h4 className="text-sm font-medium text-white mt-2">{credential.title}</h4>
                          <Search className="absolute bottom-2 right-2 w-4 h-4 text-white/50" /> {/* Added Search Icon */}
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

            {/* Skills */}
            <div>
              <div className="flex items-center gap-2 mb-4"> {/* Reduced from mb-6 */}
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Skills</h3>
              </div>
              <BentoGrid items={skillItems} />
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4"> {/* Reduced from mb-6 */}
                <Briefcase className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">Selected Experience and Independent Projects</h3>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {experienceItems.map((item) => (
                  <AccordionItem
                    value={item.id}
                    key={item.id}
                    className="overflow-hidden border-none bg-white/5 rounded-lg backdrop-blur-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 text-[15px] hover:no-underline flex items-center w-full gap-4"> {/* Added gap */}
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-10 h-10 object-contain flex-shrink-0" // Removed margin
                        />
                      )}
                      <div className="text-left flex-grow"> {/* Added flex-grow */}
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{item.title}</span>
                        </div>
                        <div className="text-sm text-white/60 font-normal">
                          {item.company} • {item.period}
                        </div>
                        <div className="text-sm text-white/60 font-normal">
                          {item.location}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-white/70">
                      <ul className="list-disc list-inside space-y-2">
                        {item.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}