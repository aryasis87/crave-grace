'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import ProdukGambar from '@/components/ProdukGambar'
import { BUNGKUS, PRODUK, babakDari, produkBySlug, rupiah } from '@/lib/katalog'

const ONGKIR = 25000
const BIAYA_BUNGKUS = 35000

function Medan({ label, name, type = 'text', auto, wajib = true }) {
  return (
    <div>
      <label htmlFor={name} className="micro mb-2 block text-plum-soft">
        {label}
        {wajib && <span className="ml-1 text-rose">*</span>}
      </label>
      <input id={name} name={name} type={type} autoComplete={auto} required={wajib} className="w-full border-b border-plum/30 bg-transparent py-2.5 text-plum focus:border-rose focus:outline-none" />
    </div>
  )
}

export default function CheckoutPage() {
  const q = useSearchParams()
  const p = produkBySlug(q.get('produk')) ?? PRODUK[0]
  const [bungkus, setBungkus] = useState(BUNGKUS.some((b) => b.id === q.get('bungkus')) ? q.get('bungkus') : 'polos')
  const [hadiah, setHadiah] = useState(q.get('bungkus') !== null && q.get('bungkus') !== 'polos')
  const [proses, setProses] = useState(false)
  const [selesai, setSelesai] = useState(false)
  const b = babakDari(p.babak)
  const w = BUNGKUS.find((x) => x.id === bungkus)
  const biayaBungkus = bungkus === 'polos' ? 0 : BIAYA_BUNGKUS
  const total = p.harga + ONGKIR + biayaBungkus

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setSelesai(true)
    }, 1000)
  }

  return (
    <section className="laid-silk bg-silk pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <p className="micro text-gilt-ink">Pemesanan</p>
          <h1 className="mt-5 text-[2.3rem] leading-[1.08] md:text-[3rem]">
            Satu langkah <em className="text-rose italic">lagi</em>
          </h1>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {selesai ? (
            <div role="status" className="envelope bg-silk-2 px-8 py-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-3xl text-plum italic">Terima kasih</p>
              <p className="mx-auto mt-4 max-w-sm leading-relaxed text-plum-soft">
                Ini purwarupa desain untuk kontes — tidak ada pesanan atau pembayaran yang diproses. Di toko
                sungguhan, {p.nama} dibungkus dengan {w.nama.toLowerCase()}{hadiah ? ' dan dikirim langsung ke penerima hadiah' : ''}.
              </p>
              <button onClick={() => setSelesai(false)} className="micro mt-8 text-plum hover:text-rose">Kembali ke formulir</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-10">
              <label className="envelope flex cursor-pointer items-start gap-4 bg-silk-2 p-5">
                <input type="checkbox" checked={hadiah} onChange={(e) => setHadiah(e.target.checked)} className="mt-1 h-4 w-4 accent-[#4a2338]" />
                <span>
                  <span className="block font-[family-name:var(--font-display)] text-lg text-plum italic">Ini hadiah untuk orang lain</span>
                  <span className="mt-1 block text-sm text-plum-soft">Paket dikirim ke alamat penerima, nota tanpa harga.</span>
                </span>
              </label>

              <fieldset className="space-y-6">
                <legend className="micro mb-2 text-plum">{hadiah ? 'Pengirim (Anda)' : 'Penerima'}</legend>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Medan label="Nama" name="nama" auto="name" />
                  <Medan label="Telepon" name="telepon" type="tel" auto="tel" />
                </div>
                <Medan label="Surel" name="surel" type="email" auto="email" />
                {!hadiah && <Medan label="Alamat pengiriman" name="alamat" auto="street-address" />}
              </fieldset>

              {hadiah && (
                <fieldset className="space-y-6">
                  <legend className="micro mb-2 text-plum">Penerima hadiah</legend>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Medan label="Nama penerima" name="penerima" auto="off" />
                    <Medan label="Telepon penerima" name="telepon-penerima" type="tel" auto="off" />
                  </div>
                  <Medan label="Alamat penerima" name="alamat-penerima" auto="off" />
                </fieldset>
              )}

              <fieldset>
                <legend className="micro mb-4 text-plum">Cara dibungkus</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {BUNGKUS.map((x) => (
                    <label key={x.id} className={`envelope flex cursor-pointer items-center gap-3 p-4 ${bungkus === x.id ? 'bg-silk-2' : 'hover:bg-silk-2'}`}>
                      <input type="radio" name="bungkus" value={x.id} checked={bungkus === x.id} onChange={() => setBungkus(x.id)} className="h-4 w-4 accent-[#4a2338]" />
                      <span aria-hidden="true" className="h-5 w-7 shrink-0" style={{ backgroundColor: x.warna }} />
                      <span className="text-sm text-plum">{x.nama}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button type="submit" disabled={proses} className="w-full bg-plum py-4 text-sm font-semibold text-silk transition-colors hover:bg-rose disabled:opacity-70">
                {proses ? 'Memproses…' : `Pesan · ${rupiah(total)}`}
              </button>
              <p className="micro text-center leading-[1.7] text-plum-soft">Purwarupa desain — tidak ada pembayaran maupun data yang tersimpan.</p>
            </form>
          )}

          <aside className="envelope h-fit bg-silk-2 p-6 sm:p-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <ProdukGambar p={p} sizes="(min-width: 1024px) 35vw, 100vw" />
            </div>
            <p className="micro mt-6 text-gilt-ink">Babak {b.no} · {b.nama}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-plum italic">{p.nama}</p>
            <dl className="mt-6 divide-y divide-plum/10 border-y border-plum/10 text-sm">
              {[[p.nama, rupiah(p.harga)], [w.nama, biayaBungkus ? rupiah(biayaBungkus) : 'Gratis'], ['Pengiriman', rupiah(ONGKIR)]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3">
                  <dt className="text-plum-soft">{k}</dt>
                  <dd className="text-plum">{v}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 py-4">
                <dt className="font-semibold text-plum">Total</dt>
                <dd className="font-[family-name:var(--font-display)] text-xl text-plum">{rupiah(total)}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <Link href={`/produk/${p.slug}`} className="micro text-plum hover:text-rose">← Barangnya</Link>
              <Link href={`/hadiah?produk=${p.slug}`} className="micro text-plum hover:text-rose">Tulis kartu</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
