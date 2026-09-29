'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Cangkang akun Grace: kartu undangan di tengah halaman terang. Sudut
   pandangnya: akun mengingat tanggal penting (opsional), supaya kami bisa
   mengingatkan dua minggu sebelumnya. Purwarupa tanpa autentikasi. */

const MODE = {
  masuk: {
    eyebrow: 'Selamat datang kembali',
    judul: 'Masuk',
    lead: 'Untuk melihat hadiah yang sedang dalam perjalanan dan tanggal-tanggal yang Anda simpan.',
    tombol: 'Masuk',
    medan: [
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'current-password' },
    ],
    selesai: 'Di toko sungguhan, Anda kini masuk. Ini purwarupa desain, jadi tidak ada akun yang diperiksa.',
  },
  daftar: {
    eyebrow: 'Undangan',
    judul: 'Buat akun',
    lead: 'Simpan satu tanggal yang ingin diingat — kami kirim pengingat halus dua minggu sebelumnya. Boleh dikosongkan.',
    tombol: 'Buat akun',
    medan: [
      { name: 'sapaan', label: 'Nama panggilan', type: 'text', auto: 'nickname', wajib: false },
      { name: 'surel', label: 'Surel', type: 'email', auto: 'email' },
      { name: 'sandi', label: 'Kata sandi', type: 'password', auto: 'new-password' },
      { name: 'tanggal', label: 'Tanggal yang ingin diingat', type: 'date', auto: 'off', wajib: false },
    ],
    selesai: 'Di toko sungguhan, akun Anda kini aktif. Ini purwarupa desain — tidak ada data yang tersimpan.',
  },
  lupa: {
    eyebrow: 'Tidak apa-apa',
    judul: 'Lupa kata sandi',
    lead: 'Kami kirim tautan untuk mengatur ulang ke surel Anda. Subjeknya polos: "Atur ulang kata sandi".',
    tombol: 'Kirim tautan',
    medan: [{ name: 'surel', label: 'Surel', type: 'email', auto: 'email' }],
    selesai: 'Di toko sungguhan, tautannya sudah terkirim dan berlaku 30 menit. Ini purwarupa desain.',
  },
}

export default function AkunForm({ mode }) {
  const m = MODE[mode]
  const [proses, setProses] = useState(false)
  const [ok, setOk] = useState(false)

  const kirim = (e) => {
    e.preventDefault()
    setProses(true)
    setTimeout(() => {
      setProses(false)
      setOk(true)
    }, 900)
  }

  return (
    <section className="laid-silk bg-silk-2 px-4 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="envelope mx-auto max-w-lg bg-silk px-7 py-12 text-center shadow-[0_30px_60px_-40px_rgb(74_35_56/0.5)] sm:px-12">
        <p className="micro text-gilt-ink">{m.eyebrow}</p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.08] italic">{m.judul}</h1>
        <div className="rule-gilt mx-auto mt-6 max-w-[8rem]" aria-hidden="true">◆</div>
        <p className="mx-auto mt-6 max-w-sm leading-relaxed text-plum-soft">{m.lead}</p>

        {ok ? (
          <p role="status" className="mt-10 bg-silk-2 p-6 font-[family-name:var(--font-display)] text-lg leading-snug text-plum italic">{m.selesai}</p>
        ) : (
          <form onSubmit={kirim} className="mt-10 space-y-6 text-left">
            {m.medan.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="micro mb-2 block text-plum-soft">
                  {f.label}
                  {f.wajib !== false ? <span className="ml-1 text-rose">*</span> : <span className="ml-2 normal-case tracking-normal">(opsional)</span>}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.auto}
                  required={f.wajib !== false}
                  className="w-full border-b border-plum/30 bg-transparent py-2.5 text-plum focus:border-rose focus:outline-none"
                />
              </div>
            ))}
            <button type="submit" disabled={proses} className="w-full bg-plum py-4 text-sm font-semibold text-silk transition-colors hover:bg-rose disabled:opacity-70">
              {proses ? 'Memproses…' : m.tombol}
            </button>
          </form>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {mode !== 'masuk' && <Link href="/masuk" className="micro text-plum hover:text-rose">Masuk</Link>}
          {mode !== 'daftar' && <Link href="/register" className="micro text-plum hover:text-rose">Buat akun</Link>}
          {mode === 'masuk' && <Link href="/forgot" className="micro text-plum-soft hover:text-rose">Lupa kata sandi</Link>}
        </div>
        <p className="micro mt-8 leading-[1.7] text-plum-soft">Purwarupa desain — tidak ada autentikasi sungguhan.</p>
      </div>
    </section>
  )
}
