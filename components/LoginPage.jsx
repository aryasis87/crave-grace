'use client'

import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-10 border border-white/10"
      >
        {/* ✨ Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-zinc-400 mb-8">
          Enter your details to access your account
        </p>

        {/* 🧾 Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-zinc-400 w-5 h-5" />
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-700 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-zinc-400 w-5 h-5" />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="Your password"
              className="w-full pl-10 pr-10 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-700 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-zinc-400 hover:text-purple-300 transition"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all shadow-md hover:shadow-purple-500/20"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-zinc-700" />
          <span className="px-4 text-zinc-400 text-xs uppercase tracking-wider">
            or
          </span>
          <div className="flex-grow h-px bg-zinc-700" />
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="w-1/2 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-all shadow">
            Google
          </button>
          <button className="w-1/2 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white hover:bg-zinc-700 transition-all">
            Apple
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-xs text-zinc-400 mt-6 text-center">
          Forgot password?{' '}
          <a href="#" className="text-purple-400 hover:underline">
            Reset here
          </a>
        </div>
      </motion.div>
    </section>
  )
}
