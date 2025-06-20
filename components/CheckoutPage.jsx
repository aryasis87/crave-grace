'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, X, Lock, CheckCircle, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const initialCart = [
  { id: 1, name: 'Velvet Pulse Wand', price: 79, quantity: 1, image: '/images/p3.jpg' },
  { id: 2, name: 'Silken Lube Noir', price: 29, quantity: 2, image: '/images/p5.jpg' },
]

export default function CheckoutPage() {
  const [cart, setCart] = useState(initialCart)
  const [promo, setPromo] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const updateQuantity = (id, type) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 12
  const promoDiscount = promoApplied ? 15 : 0
  const total = subtotal + shipping - promoDiscount

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 py-24 md:px-16">
      {/* Stepper */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-between items-center text-sm font-medium text-zinc-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-purple-400 w-4 h-4" /> Cart
          </div>
          <div className="w-full mx-2 h-[1px] bg-zinc-700" />
          <div className="text-purple-400">Checkout</div>
          <div className="w-full mx-2 h-[1px] bg-zinc-700" />
          <div>Confirmation</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        {/* Cart Items */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#D7BBFF] to-[#A075FF] mb-6">
            Your Selection
          </h2>

          <div className="space-y-10">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-6 pb-6 border-b border-white/10"
              >
                <div className="relative w-full md:w-40 h-60 md:h-40 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-light">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-500 hover:text-rose-400 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, 'decrease')}
                        className="w-8 h-8 flex items-center justify-center border border-zinc-600 rounded hover:border-purple-400 hover:text-purple-300 shadow-inner"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 'increase')}
                        className="w-8 h-8 flex items-center justify-center border border-zinc-600 rounded hover:border-purple-400 hover:text-purple-300 shadow-inner"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-lg text-purple-300 font-medium">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Checkout Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="sticky top-28 self-start bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-serif tracking-tight text-white">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm text-zinc-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-green-400">
                <span>Promo Discount</span>
                <span>-${promoDiscount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-zinc-700 pt-4 flex justify-between text-base text-white font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="pt-4">
            <input
              value={promo}
              onChange={e => setPromo(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-xl placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Have a promo code?"
            />
            <button
              onClick={() => {
                if (promo.toLowerCase() === 'intimate15') setPromoApplied(true)
              }}
              className="mt-2 w-full py-2 bg-purple-500 hover:bg-purple-600 transition text-white rounded-lg text-sm font-medium"
            >
              Apply Promo
            </button>
          </div>

          <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#D7BBFF] to-[#A074FF] hover:to-[#8B5CF6] text-white font-semibold rounded-xl transition shadow-lg">
            Proceed to Secure Checkout
          </button>

          <div className="flex items-center gap-2 text-xs text-zinc-400 mt-4">
            <Lock size={14} className="text-purple-400" />
            Secure & discreet billing — your privacy is our priority.
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-4">
            <Truck size={14} className="text-green-400" />
            Estimated delivery: <span className="text-white">2–4 business days</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
