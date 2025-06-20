'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react'

export default function ContactSupport() {
  return (
    <section className="bg-zinc-950 text-white px-6 py-32 md:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 📣 Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
            Need Someone to Talk To?
          </h2>
          <p className="mt-6 text-zinc-400 text-lg">
            Whether it's a question about shipping, product recommendations, or emotional support — we’re here, privately and respectfully.
          </p>
        </motion.div>

        {/* 💬 Contact Options */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <MessageCircle className="text-purple-400" size={28} />,
              title: 'Live Chat',
              desc: 'Talk anonymously with our team in real-time. Available 10AM–10PM.',
              btn: 'Start Chat',
            },
            {
              icon: <Mail className="text-purple-400" size={28} />,
              title: 'Email Us',
              desc: 'Drop us a message anytime. We reply within 24 hours.',
              btn: 'Send Email',
            },
            {
              icon: <Phone className="text-purple-400" size={28} />,
              title: 'Call Concierge',
              desc: 'Need a private voice conversation? Call our intimacy concierge.',
              btn: 'Call Now',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-md shadow-lg hover:shadow-purple-500/10 transition-shadow"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              <button className="mt-2 px-5 py-2 text-sm bg-purple-500 hover:bg-purple-600 focus:outline-none rounded-full text-white font-medium transition-all duration-200 shadow-md hover:shadow-purple-400/20">
                {item.btn}
              </button>
            </motion.div>
          ))}
        </div>

        {/* ⏱️ Response Info */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-2 text-zinc-400 text-sm">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Avg. response time: 1–4 hrs (chat), 6–12 hrs (email)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
