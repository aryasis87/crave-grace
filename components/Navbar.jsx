'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Ritual', href: '/#ritual' },
  { label: 'Koleksi', href: '/#produk' },
  { label: 'Jaminan', href: '/#jaminan' },
  { label: 'Tanya Jawab', href: '/#tanya' },
  { label: 'Bantuan', href: '/#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'border-b border-plum/12 bg-silk/92 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg text-plum" aria-label="Positive Crave — beranda">
          Positive<em className="text-rose italic">Crave</em>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="micro text-plum-soft transition-colors hover:text-plum">
              {n.label}
            </Link>
          ))}
          <Link
            href="/masuk"
            className="micro bg-plum px-5 py-3 text-silk transition-colors hover:bg-rose"
          >
            Masuk
          </Link>
        </nav>

        <button
          className="-mr-2 p-2 text-plum md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-plum/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-silk md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-plum/12 px-6 py-4">
                <span className="micro text-plum-soft/60">Menu</span>
                <button onClick={() => setOpen(false)} className="-mr-2 p-2 text-plum" aria-label="Tutup menu">
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="flex-1 px-6" aria-label="Navigasi mobile">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-plum/10 py-5 font-[family-name:var(--font-display)] text-xl text-plum"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6">
                <Link
                  href="/masuk"
                  onClick={() => setOpen(false)}
                  className="micro block bg-plum py-4 text-center text-silk"
                >
                  Masuk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
