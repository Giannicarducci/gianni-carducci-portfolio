'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SplineScene } from "./ui/spline"
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
import { Home, User, Briefcase, FileText, BookOpen } from 'lucide-react'
import { NavBar } from "./ui/tubelight-navbar"
import { RainbowButton } from "./ui/rainbow-button"

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Resume', url: '#resume', icon: FileText }
]

export function NavBarDemo() {
  return <NavBar items={navItems} />
}

export function SplineSceneBasic() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full h-full">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="loader"></div>
        </div>
      )}
    </div>
  )
}