'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const sections = {
  General: [
    {
      q: 'Apa tujuan utama Positive Crave?',
      a: 'Membantu pasangan membangun keintiman sehat, aman, dan menyenangkan—tanpa rasa malu, dengan sentuhan premium dan kepercayaan penuh.',
    },
    {
      q: 'Apakah produk cocok untuk pemula?',
      a: 'Ya! Kami punya kategori dan panduan khusus untuk pasangan pemula yang ingin mengeksplorasi dengan rasa nyaman dan pelan-pelan.',
    },
  ],
  Shipping: [
    {
      q: 'Apakah pengemasan dan billing kami akan terlihat oleh orang lain?',
      a: 'Tidak. Kami menjamin privasi total. Kotak polos tanpa label produk dan billing statement yang sangat tersamar.',
    },
    {
      q: 'Berapa lama pengiriman?',
      a: 'Untuk kota besar, estimasi 1–3 hari kerja. Kami juga menyediakan opsi ekspres dan pelacakan real-time.',
    },
  ],
  Exploration: [
    {
      q: 'Bagaimana cara memilih produk yang tepat?',
      a: 'Gunakan kuis interaktif kami atau baca panduan pemula. Anda juga bisa live chat dengan intimacy concierge kami.',
    },
    {
      q: 'Apakah tersedia panduan penggunaan?',
      a: 'Ya. Setiap produk dilengkapi digital guide, dan kami menyediakan video/animasi non-vulgar untuk membantu eksplorasi yang aman.',
    },
  ],
}

const categories = Object.keys(sections)

export default function AboutAndFAQ() {
  const [selected, setSelected] = useState(categories[0])
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white px-6 py-32 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 💜 Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Sparkles className="mx-auto text-purple-400 mb-4" size={36} />
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.2] text-transparent bg-clip-text bg-gradient-to-tr from-white to-purple-300">
            Intimacy Designed for Discovery
          </h2>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Kami percaya keintiman modern adalah tentang eksplorasi, edukasi, dan empati—bukan sekadar impuls. Positive Crave hadir sebagai teman eksplorasi Anda, bukan hanya toko.
          </p>
        </motion.div>

        {/* 🧠 FAQ Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <div className="space-y-6">
            <div className="flex gap-4 flex-wrap">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelected(cat)
                    setOpenIndex(null)
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition 
                    ${
                      selected === cat
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4 mt-6">
              {sections[selected].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-white/10 transition"
                  >
                    <span className="text-lg font-medium leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-sm text-neutral-300 leading-relaxed"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* 💬 Sticky CTA & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="sticky top-28 space-y-10 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-xl"
          >
            <div className="text-xl font-light italic text-purple-300 border-l-4 pl-4 border-purple-500">
              “Curiosity, comfort, and communication — that's the foundation of intimacy.”
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:to-purple-600 text-white font-semibold rounded-xl shadow-xl transition active:scale-[0.98]">
              Explore Our Guides
            </button>
            <p className="text-sm text-zinc-400 text-center">
              Or chat with our intimacy concierge →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
