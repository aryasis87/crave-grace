'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative bg-white dark:bg-[#0B0B0B] text-black dark:text-white min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      {/* Subtle Texture Background */}
      <div className="absolute inset-0 bg-[url('/images/w3.jpeg')] opacity-[0.02] z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Text Side */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.15]"
          >
            Intimacy, <br className="hidden md:block" />
            Reimagined With Grace.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto md:mx-0"
          >
            Designed for couples who value connection as much as pleasure — our products balance sensuality with subtle sophistication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="group inline-flex items-center gap-2 px-7 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full hover:opacity-90 transition active:scale-[0.97]">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-7 py-3 border border-neutral-300 dark:border-white/20 text-black dark:text-white rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition">
              Discover Philosophy
            </button>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative w-full max-w-[420px] h-[480px] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/w3.jpeg"
            alt="Elegant couple embracing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black/10 via-neutral-200/20 to-black/10 dark:from-white/10 dark:to-white/10" />
    </motion.section>
  )
}
