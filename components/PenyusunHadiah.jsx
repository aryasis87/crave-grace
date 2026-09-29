'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BUNGKUS, PRODUK, produkBySlug, rupiah } from '@/lib/katalog'

const BATAS = 160

export default function PenyusunHadiah() {
  const q = useSearchParams()
  const [slug, setSlug] = useState(produkBySlug(q.get('produk'))?.slug ?? 'kotak-berdua')
  const [bungkus, setBungkus] = useState('gading')
  const [pesan, setPesan] = useState('Untuk malam-malam kita yang pelan.')
  const [dari, setDari] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [tanpaHarga, setTanpaHarga] = useState(true)

  const p = produkBySlug(slug)
  const w = BUNGKUS.find((x) => x.id === bungkus)
  const polos = bungkus === 'polos'

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      {/* Formulir */}
      <form className="space-y-9" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="barang" className="micro mb-3 block text-plum-soft">1 · Barangnya</label>
          <select
            id="barang"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border-b border-plum/30 bg-transparent py-2.5 font-[family-name:var(--font-display)] text-xl text-plum italic focus:border-rose focus:outline-none"
          >
            {PRODUK.map((x) => (
              <option key={x.slug} value={x.slug}>{x.nama} — {rupiah(x.harga)}</option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="micro mb-4 text-plum-soft">2 · Cara dibungkus</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {BUNGKUS.map((x) => (
              <label key={x.id} className={`envelope flex cursor-pointer flex-col items-center gap-3 p-4 text-center transition-colors ${bungkus === x.id ? 'bg-silk-2' : 'bg-silk hover:bg-silk-2'}`}>
                <input type="radio" name="bungkus" value={x.id} checked={bungkus === x.id} onChange={() => setBungkus(x.id)} className="sr-only" />
                <span aria-hidden="true" className={`h-8 w-12 ring-offset-2 ring-offset-silk ${bungkus === x.id ? 'ring-2 ring-rose' : ''}`} style={{ backgroundColor: x.warna }} />
                <span className="text-sm text-plum">{x.nama}</span>
              </label>
            ))}
          </div>
          <p className="mt-3 text-sm text-plum-soft">{w.ket}</p>
        </fieldset>

        <div className={polos ? 'opacity-50' : ''}>
          <label htmlFor="pesan" className="micro mb-3 flex justify-between text-plum-soft">
            <span>3 · Isi kartu</span>
            <span>{pesan.length}/{BATAS}</span>
          </label>
          <textarea
            id="pesan"
            rows={3}
            maxLength={BATAS}
            disabled={polos}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full resize-none border border-plum/20 bg-silk p-4 font-[family-name:var(--font-display)] text-lg text-plum italic focus:border-rose focus:outline-none"
          />
          <label htmlFor="dari" className="micro mt-5 mb-3 block text-plum-soft">Dari (boleh inisial)</label>
          <input
            id="dari"
            disabled={polos}
            value={dari}
            onChange={(e) => setDari(e.target.value)}
            placeholder="mis. R."
            className="w-full border-b border-plum/30 bg-transparent py-2 text-plum placeholder:text-plum-soft focus:border-rose focus:outline-none"
          />
          {polos && <p className="mt-3 text-sm text-plum-soft">Kotak polos dikirim tanpa kartu.</p>}
        </div>

        <fieldset className="space-y-4">
          <legend className="micro mb-4 text-plum-soft">4 · Saat tiba</legend>
          <div>
            <label htmlFor="tanggal" className="mb-2 block text-sm text-plum">Antar pada tanggal (opsional)</label>
            <input id="tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="border-b border-plum/30 bg-transparent py-2 text-plum focus:border-rose focus:outline-none" />
          </div>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-plum">
            <input type="checkbox" checked={tanpaHarga} onChange={(e) => setTanpaHarga(e.target.checked)} className="h-4 w-4 accent-[#4a2338]" />
            Sembunyikan harga di nota yang ikut dalam kotak
          </label>
        </fieldset>

        <Link
          href={`/checkout?produk=${slug}&bungkus=${bungkus}`}
          className="inline-flex w-full items-center justify-center bg-plum px-8 py-4 text-sm font-semibold text-silk transition-colors hover:bg-rose"
        >
          Lanjut ke pemesanan · {rupiah(p.harga + (polos ? 0 : 35000))}
        </Link>
        <p className="micro leading-[1.7] text-plum-soft">Pembungkus & kartu Rp 35.000 · kotak polos gratis. Purwarupa desain.</p>
      </form>

      {/* Pratinjau */}
      <div className="lg:sticky lg:top-28 lg:self-start" aria-live="polite">
        <p className="micro mb-5 text-center text-gilt-ink">Pratinjau</p>
        <div className="laid-silk envelope grid place-items-center bg-silk-2 px-6 py-14">
          <div aria-hidden="true" className="relative h-48 w-60 shadow-[0_24px_40px_-24px_rgb(74_35_56/0.5)] sm:h-56 sm:w-72" style={{ backgroundColor: w.warna }}>
            {w.pita && (
              <>
                <span className="absolute inset-y-0 left-[38%] w-4" style={{ backgroundColor: w.pita }} />
                <span className="absolute inset-x-0 top-[42%] h-4" style={{ backgroundColor: w.pita }} />
                <span className="absolute top-[42%] left-[38%] h-12 w-12 -translate-x-[35%] -translate-y-[35%] rounded-full" style={{ backgroundColor: w.pita, boxShadow: 'inset 0 0 0 3px rgb(250 245 242 / 0.25)' }} />
              </>
            )}
          </div>

          {!polos && (
            <div className="relative -mt-10 ml-12 w-52 rotate-[-3deg] bg-silk p-5 shadow-lg sm:ml-32 sm:w-64 sm:p-6">
              <p className="micro text-gilt-ink">Untukmu</p>
              <p className="mt-3 min-h-[3.5rem] font-[family-name:var(--font-display)] text-lg leading-snug break-words text-plum italic">
                {pesan || '…'}
              </p>
              {dari && <p className="mt-4 text-right font-[family-name:var(--font-display)] text-plum-soft italic">— {dari}</p>}
            </div>
          )}

          <dl className="mt-10 w-full max-w-sm divide-y divide-plum/10 border-y border-plum/10 text-sm">
            <div className="flex justify-between py-2.5"><dt className="text-plum-soft">Isi kotak</dt><dd className="text-plum italic">{p.nama}</dd></div>
            <div className="flex justify-between py-2.5"><dt className="text-plum-soft">Bungkus</dt><dd className="text-plum">{w.nama}</dd></div>
            <div className="flex justify-between py-2.5"><dt className="text-plum-soft">Tiba</dt><dd className="text-plum">{tanggal ? new Date(tanggal + 'T00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long' }) : 'Secepatnya'}</dd></div>
            <div className="flex justify-between py-2.5"><dt className="text-plum-soft">Nota</dt><dd className="text-plum">{tanpaHarga ? 'Tanpa harga' : 'Dengan harga'}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  )
}
