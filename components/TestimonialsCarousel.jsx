'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rhea & David',
    feedback:
      '“We rediscovered each other. Positive Crave didn’t just give us a product — it gave us a ritual.”',
    location: 'Singapore',
    rating: 5,
    company: 'LoveWellness',
    logo: '/images/l1.jpeg',
  },
  {
    name: 'Lana & Hugo',
    feedback:
      '“No awkwardness. Just quiet desire and connection. Every detail feels crafted for closeness.”',
    location: 'Jakarta',
    rating: 5,
    company: 'The Intimacy Co.',
    logo: '/images/l2.jpeg',
  },
  {
    name: 'Amal & Farid',
    feedback:
      '“Sensual, elegant, and respectful. Positive Crave doesn’t feel like a store — it feels like a space.”',
    location: 'Kuala Lumpur, Malaysia',
    rating: 4,
    company: 'Reconnect Studio',
    logo: '/images/l3.jpeg',
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 bg-[#0A090C] py-32 px-6 md:px-12 text-white overflow-hidden">
      {/* 🌌 Purple Ambient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[25%] w-[400px] h-[400px] bg-[#C8A2FF]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[12%] right-[15%] w-[300px] h-[300px] bg-[#E8D8FF]/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
      </div>

      {/* 📝 Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#D6B8FF] to-[#9C6BFF] mb-20"
      >
        Whispers of Experience
      </motion.h2>

      {/* 💬 Testimonial Carousel */}
      <div className="relative max-w-4xl mx-auto text-center min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 px-6"
          >
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl italic text-white/90 leading-relaxed">
              {testimonials[index].feedback}
            </blockquote>

            {/* Identity */}
            <div className="flex flex-col items-center gap-2 text-sm">
              <div className="flex gap-[2px]">
                {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#D0B3FF]"
                    fill="#D0B3FF"
                  />
                ))}
              </div>
              <div className="text-white font-medium">{testimonials[index].name}</div>
              <div className="text-white/60 italic">{testimonials[index].location}</div>
            </div>

            {/* Logo */}
            <div className="mt-4 opacity-80">
              <Image
                src={testimonials[index].logo}
                alt={testimonials[index].company}
                width={120}
                height={40}
                className="mx-auto grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 💠 Purple Decorative Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-[#D0B3FF]/40 via-white/30 to-[#9C6BFF]/40 origin-left"
      />
    </section>
  )
}
