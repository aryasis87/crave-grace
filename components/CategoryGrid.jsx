'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  {
    title: 'For Couples',
    desc: 'Designed for shared experiences.',
    image: '/images/p4.jpg',
    color: 'from-[#EAA4FF] to-[#9F72FF]',
  },
  {
    title: 'Remote-Controlled',
    desc: 'Intimacy at your fingertips.',
    image: '/images/p3.jpg',
    color: 'from-[#72F3FF] to-[#3A98FF]',
  },
  {
    title: 'Beginner Friendly',
    desc: 'Explore gently. Perfect for first steps.',
    image: '/images/p2.jpg',
    color: 'from-[#FFD6A5] to-[#FFB347]',
  },
  {
    title: 'App-Enabled',
    desc: 'Smart pleasure made simple.',
    image: '/images/p5.jpg',
    color: 'from-[#C9FFBF] to-[#83E1FF]',
  },
  {
    title: 'Lingerie & More',
    desc: 'Dress the moment.',
    image: '/images/p6.jpg',
    color: 'from-[#FFC8DD] to-[#FFAFCC]',
  },
  {
    title: 'Long Distance',
    desc: 'Feel close, no matter how far.',
    image: '/images/p7.jpg',
    color: 'from-[#A1C4FD] to-[#C2E9FB]',
  },
]

export default function CategoryGrid() {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-6 md:px-12 bg-[#0A090C] text-white overflow-hidden">
      {/* Background Blur Decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF6B6B]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A0C4FF]/10 blur-[120px] rounded-full -z-10" />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.2] text-transparent bg-clip-text bg-gradient-to-tr from-white to-gray-300">
          What Sparks Your Curiosity?
        </h2>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mt-4">
          Discover products based on your connection style, energy, and playfulness.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden group shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <div className="relative h-[280px] w-full">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${cat.color} opacity-30 z-10`}
              />
              <div className="absolute inset-0 bg-black/40 z-20" />
              <div className="absolute bottom-6 left-6 z-30">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight drop-shadow-md">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
