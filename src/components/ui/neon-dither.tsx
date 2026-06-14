'use client'

import { useEffect, useRef, useState } from 'react'
import { Dithering } from '@paper-design/shaders-react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface NeonDitherHeroProps {
  title: string
  subtitle: string
  /** dithering background (darker terminus of the gradient) */
  colorBack?: string
  /** dithering ink (brighter terminus of the gradient) */
  colorFront?: string
}

export function NeonDitherHero({
  title,
  subtitle,
  colorBack = '#0a2e10',
  colorFront = '#3d8a47',
}: NeonDitherHeroProps) {
  const ref = useRef<HTMLElement>(null)

  // pause the WebGL shader entirely while the hero is off-screen
  // (speed=0 stops its render loop → no GPU cost when scrolled away)
  const [shaderActive, setShaderActive] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => setShaderActive(entry.isIntersecting),
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // progress 0 → 1 as the hero scrolls up out of view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // darken the whole hologram to full black as you scroll past the hero
  const darkenOpacity = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  // gently lift the copy away while it fades into the dark
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -40])

  return (
    <header
      ref={ref}
      id="hero"
      className="relative flex h-svh min-h-[660px] w-full flex-col justify-end overflow-hidden bg-ink"
    >
      {/* neon-dither shader background */}
      <div className="absolute inset-0 z-0">
        <Dithering
          className="h-full w-full"
          style={{ width: '100%', height: '100%' }}
          colorBack={colorBack}
          colorFront={colorFront}
          shape="warp"
          type="4x4"
          size={2.5}
          scale={1.3}
          speed={shaderActive ? 0.55 : 0}
        />
      </div>

      {/* cinematic vignette so the type stays legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 35%, transparent 38%, rgba(0,0,0,0.62) 100%)',
        }}
      />

      {/* hero copy */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 px-7 pb-14 sm:px-12 sm:pb-20"
      >
        <h1 className="animate-in fade-in slide-in-from-bottom-4 text-[clamp(72px,21vw,118px)] font-light leading-[0.88] tracking-[-0.04em] text-white duration-1000">
          {title}
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-2 mt-5 max-w-[340px] text-base font-normal leading-relaxed text-white/60 delay-200 duration-1000 sm:max-w-[420px] sm:text-lg">
          {subtitle}
        </p>
      </motion.div>

      {/* scroll indicator */}
      <motion.a
        style={{ opacity: contentOpacity }}
        href="#about"
        aria-label="Прокрутить к разделу о себе"
        className="absolute bottom-7 right-7 z-20 inline-flex text-white/40 transition-colors hover:text-green-light sm:right-12"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <line x1="12" y1="4" x2="12" y2="20" />
          <polyline points="6 14 12 20 18 14" />
        </svg>
      </motion.a>

      {/* scroll-driven blackout: hologram fades to maximum darkness past the hero */}
      <motion.div
        aria-hidden
        style={{ opacity: darkenOpacity }}
        className="pointer-events-none absolute inset-0 z-30 bg-black"
      />
    </header>
  )
}
