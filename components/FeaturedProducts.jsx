'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const moods = [
  {
    label: 'Playful',
    description: 'Light, fun, teasing energy for a spark of joy.',
    products: [
      {
        name: 'Tease Me Mini',
        price: 'Rp 520.000',
        image: '/images/p4.jpg',
      },
      {
        name: 'Tango Touch',
        price: 'Rp 660.000',
        image: '/images/p5.jpg',
      },
    ],
  },
  {
    label: 'Sensual',
    description: 'Slow, immersive, and deeply connective.',
    products: [
      {
        name: 'Velvet Aura',
        price: 'Rp 1.220.000',
        image: '/images/p6.jpg',
      },
      {
        name: 'Silk Pulse',
        price: 'Rp 890.000',
        image: '/images/p7.jpg',
      },
    ],
  },
  {
    label: 'Adventurous',
    description: 'Push boundaries, try something new.',
    products: [
      {
        name: 'Embrace Pro Kit',
        price: 'Rp 1.700.000',
        image: '/images/p8.jpg',
      },
      {
        name: 'Remote Rhythm',
        price: 'Rp 1.320.000',
        image: '/images/p3.jpg',
      },
    ],
  },
]

export default function FeaturedProducts() {
  const [selectedMood, setSelectedMood] = useState(null)

  return (
    <section className="bg-[#0A090D] text-white py-28 px-6 md:px-12">
      {/* ✨ Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-[#D9BBFF] to-[#A175FF] mb-12"
      >
        How Do You Want to Feel Tonight?
      </motion.h2>

      {/* 🧠 Mood Selector */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {moods.map((mood) => (
          <motion.button
            key={mood.label}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood)}
            className={`px-6 py-3 rounded-full font-medium transition-all border text-sm tracking-wide ${
              selectedMood?.label === mood.label
                ? 'bg-white text-black border-white shadow-lg shadow-purple-300/10'
                : 'bg-white/5 text-white hover:bg-white/10 border-white/10'
            }`}
          >
            {mood.label}
          </motion.button>
        ))}
      </div>

      {/* 🌙 Product Reveal */}
      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.div
            key={selectedMood.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <p className="text-white/70 mb-12 text-lg">{selectedMood.description}</p>

            <div className="grid md:grid-cols-2 gap-10">
              {selectedMood.products.map((product, idx) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-2xl hover:shadow-purple-400/10 transition"
                >
                  <div className="relative w-full h-[340px] mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-300 hover:scale-105 rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-[#D2B2FF] font-medium mt-1">{product.price}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
