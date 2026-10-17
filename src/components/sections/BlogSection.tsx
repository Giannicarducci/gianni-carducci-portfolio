"use client"

import React from 'react'
import { BookOpen } from "lucide-react"

export function BlogSection() {
  // Blog data would go here
  // This is a placeholder for the actual blog data
  // You'd need to copy the complete blog data from the original sections.tsx file
  
  return (
    <section id="blog" className="py-24">
      <div className="glass-card rounded-2xl">
        <div className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Blog</h2>
          </div>
          <div className="mt-8 space-y-8">
            {/* Blog content would go here */}
            <p className="text-white/80">Blog section coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
} 