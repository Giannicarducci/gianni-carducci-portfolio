"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed top-6 w-full z-50">
      <div className="w-full max-w-[90rem] mx-auto px-2 sm:px-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-4 bg-black/25 backdrop-blur-xl py-2 px-2 rounded-full border border-white/[0.15] shadow-xl">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative px-4 py-2 rounded-full transition-colors",
                    "text-sm font-medium text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/[0.12] rounded-full" />
                      {/* Glow effect */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
                        <div className="absolute w-16 h-4 bg-white/[0.08] rounded-full blur-md -top-1 -left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
