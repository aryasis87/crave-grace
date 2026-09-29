import Link from 'next/link'
import { SURAT } from '@/lib/surat'

export default function SuratTeaser() {
  return (
    <section id="surat" className="laid-silk bg-silk-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="micro mb-5 text-gilt-ink">Surat untuk Berdua</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Beberapa hal <em className="italic text-rose">lebih baik ditulis</em>
          </h2>
        </div>
        <ul className="grid gap-10 md:grid-cols-3">
          {SURAT.map((s) => (
            <li key={s.slug}>
              <article className="envelope group relative h-full bg-silk p-8 pt-10 transition-transform duration-500 hover:-translate-y-1">
                <span aria-hidden="true" className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-full bg-plum font-[family-name:var(--font-display)] text-silk italic shadow-md">{s.no}</span>
                <p className="font-[family-name:var(--font-display)] text-sm text-plum-soft italic">{s.sapaan}</p>
                <h3 className="mt-3 text-xl leading-snug">
                  <Link href={`/jurnal/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-rose">{s.judul}</Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-soft">{s.ringkas}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
