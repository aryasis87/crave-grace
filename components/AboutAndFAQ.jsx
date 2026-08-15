'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tanya = [
  {
    q: 'Apa tujuan utama Positive Crave?',
    a: 'Membuat keintiman bisa dibicarakan dengan tenang. Karena itu kami mulai dari panduan suasana lebih dulu, dan produk hanya melengkapi — bukan menggantikan perhatian.',
  },
  {
    q: 'Saya ingin memberikannya sebagai kado. Bisa?',
    a: 'Bisa, dan itu pemakaian yang paling sering. Kotaknya sudah rapi dan polos; Anda dapat menambahkan kartu tanpa nama pengirim bila mau.',
  },
  {
    q: 'Apa yang tertulis di paket?',
    a: 'Tidak ada nama merek di mana pun. Resi mencantumkan pengirim atas nama badan usaha dan keterangan isi "perlengkapan pribadi", termasuk pada mutasi rekening.',
  },
  {
    q: 'Apakah aman untuk kulit sensitif?',
    a: 'Alat memakai silikon medical-grade bebas BPA yang tidak berpori. Untuk pelumas, pilih yang berbahan air — paling jarang memicu iritasi.',
  },
  {
    q: 'Bagaimana merawat dan menyimpannya?',
    a: 'Cuci dengan sabun lembut dan air hangat, keringkan menyeluruh, lalu simpan dalam kantong kain yang disertakan. Jauhkan dari sinar matahari langsung.',
  },
  {
    q: 'Kalau saya berubah pikiran?',
    a: 'Selama segel belum dibuka, penukaran dapat diproses. Untuk alasan higienis, barang yang sudah dibuka tidak dapat dikembalikan.',
  },
]

export default function AboutAndFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="tanya" className="relative overflow-hidden bg-silk py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="micro mb-5 text-gilt">Tanya Jawab</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Enam yang paling sering ditanyakan
          </h2>
        </div>

        <dl className="border-t border-plum/15">
          {tanya.map((t, i) => {
            const terbuka = open === i
            return (
              <div key={t.q} className="border-b border-plum/15">
                <dt>
                  <button
                    onClick={() => setOpen(terbuka ? null : i)}
                    aria-expanded={terbuka}
                    aria-controls={`g-jwb-${i}`}
                    className="flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-[family-name:var(--font-display)] text-sm text-gilt italic"
                    >
                      {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
                    </span>
                    <span className="flex-1 font-[family-name:var(--font-display)] text-lg text-plum md:text-xl">
                      {t.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-3.5 w-3.5 shrink-0 border-t border-r border-plum/50 transition-transform duration-300 ${
                        terbuka ? '-rotate-45' : 'rotate-135'
                      }`}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {terbuka && (
                    <motion.dd
                      id={`g-jwb-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-9 text-sm leading-relaxed text-plum-soft">{t.a}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
