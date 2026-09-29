import { Suspense } from 'react'
import Link from 'next/link'
import PenyusunHadiah from '@/components/PenyusunHadiah'

export const metadata = {
  title: 'Menyusun Hadiah — Positive Crave',
  description:
    'Pilih barangnya, kertas pembungkusnya, dan tulis kartunya sendiri. Lihat pratinjau hadiah Anda sebelum dipesan — termasuk pilihan tanggal antar dan nota tanpa harga.',
  alternates: { canonical: 'https://crave-grace.vercel.app/hadiah' },
}

const CATATAN = [
  ['Kartu ditulis tangan', 'Pesan Anda kami salin dengan tinta di kartu katun, bukan dicetak.'],
  ['Nota tanpa harga', 'Penerima hanya melihat nama barang — atau tidak sama sekali bila kotak polos.'],
  ['Tanggal antar', 'Kami tahan paketnya dan mengirim agar tiba tepat di tanggal yang dipilih.'],
]

export default function HadiahPage() {
  return (
    <>
      <section className="laid-silk bg-silk pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto max-w-2xl text-center">
            <p className="micro text-gilt-ink">Hadiah</p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.08] md:text-[3.5rem]">
              Hadiah yang <em className="text-rose italic">tidak bisa dipajang</em>
            </h1>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-plum-soft">
              Pilih barangnya, cara membungkusnya, lalu tulis kartunya sendiri. Semua yang Anda ubah langsung
              terlihat di pratinjau.
            </p>
            <div className="rule-gilt mx-auto mt-10 max-w-xs" aria-hidden="true">◆</div>
          </header>
          <div className="mt-16">
            <Suspense fallback={<div className="min-h-[40rem]" />}>
              <PenyusunHadiah />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-silk-2 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ul className="grid gap-10 md:grid-cols-3">
            {CATATAN.map(([j, d], i) => (
              <li key={j} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-4xl text-gilt-ink italic">{['I', 'II', 'III'][i]}</p>
                <h2 className="mt-4 text-xl italic">{j}</h2>
                <p className="mt-3 text-sm leading-relaxed text-plum-soft">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-14 text-center text-plum-soft">
            Bingung memilih? Baca{' '}
            <Link href="/jurnal/hadiah-yang-tidak-dipajang" className="text-plum italic underline decoration-gilt underline-offset-4 hover:text-rose">
              surat kami tentang memberi hadiah
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
