'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingBag } from 'lucide-react'

export default function ProductDetailPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={ref} className="relative bg-[#0A090C] text-white overflow-hidden pt-16 mt-10">

      {/* 🟣 Ambient Purple Glow */}
      <motion.div
        style={{ y: translateY }}
        className="absolute top-[-10%] left-[-20%] w-[700px] h-[700px] rounded-full bg-[#B48DFF]/20 blur-[180px] z-0"
      />
      <motion.div
        style={{ y: translateY }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#D0B3FF]/15 blur-[160px] z-0"
      />

      {/* 🌌 Background Image + Overlay */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Image
          src="/images/p7.jpg"
          alt="Sensual background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* 🪐 Title & Subtitle */}
      <div className="flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C7A6FF] to-[#8C5EFF]"
        >
          PulseWave™ Dual
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-300 mt-6"
        >
          A modern ritual in motion — sculpted to awaken deeper connection through technology and touch.
        </motion.p>
      </div>

      {/* 🔍 Product Details */}
      <div className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-24 max-w-7xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/p8.jpg"
            alt="PulseWave close-up"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold font-serif text-white">
            Redefining Sensual Design
          </h2>
          <p className="text-neutral-300 leading-relaxed text-base">
            Every curve, every vibration, every pulse—crafted to honor intimacy in all its forms.
            With app control, dual motors, and whisper-quiet elegance, PulseWave™ is more than a device—it’s a ritual.
          </p>
          <ul className="text-sm text-neutral-400 space-y-2 pl-4 list-disc">
            <li>App-enabled for long-distance play</li>
            <li>Wireless magnetic charging</li>
            <li>Whisper-quiet motor tech</li>
            <li>Velvet-touch medical-grade silicone</li>
          </ul>
          <div>
            <p className="text-xl font-semibold text-white mt-4">IDR 899.000</p>
            <button className="group mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-br from-white to-[#E4D9FF] text-black font-medium shadow-md hover:shadow-xl hover:scale-[1.03] transition-all">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>

      {/* 💬 Testimonial */}
      <div className="px-6 md:px-0 py-24 max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl italic text-neutral-400"
        >
          “It wasn’t just about climax. It was about feeling in sync again. This is our new Sunday ritual.”
        </motion.blockquote>
        <p className="text-sm text-neutral-600 mt-4">— Verified Couple (Jakarta)</p>
      </div>
    </section>
  )
}
