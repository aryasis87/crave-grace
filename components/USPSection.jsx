'use client'

import { motion } from 'framer-motion'
import { Sparkles, Smartphone, Droplet, Waves } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'SilentPulse™ Engine',
    description:
      'A near-silent motor that keeps your moments discreet — power meets elegance with zero noise.',
  },
  {
    icon: Smartphone,
    title: 'Long-Distance Sync',
    description:
      'Connect with your partner from anywhere via app control. Love, uninterrupted by distance.',
  },
  {
    icon: Droplet,
    title: 'VelvetSkin Silicone',
    description:
      'A premium medical-grade material that feels like second skin — warm, soft, unforgettable.',
  },
  {
    icon: Waves,
    title: '10+ Pleasure Modes',
    description:
      'Explore rhythms designed by intimacy experts — from gentle waves to deep pulses.',
  },
]

export default function USPSection() {
  return (
    <section className="relative z-10 bg-[#0B090C] text-white py-28 px-6 md:px-12 overflow-hidden">
      {/* 🟣 Ambient Purple Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#B48DFF]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#E0C9FF]/15 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
      </div>

      {/* ✨ Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#D0B3FF] to-[#8C5EFF]">
          The Invisible Edge of Intimacy
        </h2>
        <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">
          Engineered touches that feel like magic — invisible, intelligent, irresistible.
        </p>
      </motion.div>

      {/* 💡 Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(176,148,255,0.12)] transition-shadow group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-full group-hover:rotate-6 transition-transform duration-300 ease-in-out">
                <item.icon className="w-6 h-6 text-[#D0B3FF]" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 🧬 Decorative Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-[#C7A6FF]/40 to-transparent origin-left"
      />
    </section>
  )
}
