'use client'

import React, { Suspense, lazy, useEffect } from 'react'
import styles from './spline.module.css'
import { cn } from '@/lib/utils'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: () => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  // Improved loading mechanism with proper cleanup
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    
    if (onLoad) {
      // Use a shorter timeout for better UX
      timer = setTimeout(onLoad, 800);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [onLoad])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className={styles.loader}></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={cn(className)}
        onLoad={() => {
          console.log('Spline scene loaded')
          onLoad?.()
        }}
      />
    </Suspense>
  )
} 