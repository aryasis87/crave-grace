import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SURAT, suratBySlug } from '@/lib/surat'

const SITE = 'https://crave-grace.vercel.app'

export function generateStaticParams() {
  return SURAT.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const s = suratBySlug(slug)
  if (!s) return {}
  return {
    title: `${s.judul} — Surat untuk Berdua`,
    description: s.ringkas,
    alternates: { canonical: `${SITE}/jurnal/${s.slug}` },
    openGraph: { type: 'article' },
  }
}

function Blok({ b }) {
  if (b.h) return <h2 className="mt-12 text-[1.5rem] leading-[1.25] italic md:text-[1.7rem]">{b.h}</h2>
  if (b.kutip)
    return (
      <figure className="my-12">
        <div className="rule-gilt" aria-hidden="true">◆</div>
        <blockquote className="px-2 py-6 text-center font-[family-name:var(--font-display)] text-[1.45rem] leading-snug text-plum italic md:text-[1.7rem]">
          {b.kutip}
        </blockquote>
        <div className="rule-gilt" aria-hidden="true">◆</div>
      </figure>
    )
  if (b.daftar)
    return (
      <ul className="mt-6 space-y-3">
        {b.daftar.map((x) => (
          <li key={x} className="flex gap-4 text-plum">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gilt" />
            <span className="leading-relaxed">{x}</span>
          </li>
        ))}
      </ul>
    )
  return <p className="mt-6 text-[1.075rem] leading-[1.9] text-plum-soft">{b.p}</p>
}

export default async function SuratArtikel({ params }) {
  const { slug } = await params
  const s = suratBySlug(slug)
  if (!s) notFound()
  const i = SURAT.findIndex((x) => x.slug === s.slug)
  const berikut = SURAT[(i + 1) % SURAT.length]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: s.judul,
    description: s.ringkas,
    author: { '@type': 'Organization', name: 'Positive Crave' },
    mainEntityOfPage: `${SITE}/jurnal/${s.slug}`,
  }

  return (
    <article className="bg-silk-2 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <nav aria-label="Remah roti" className="micro mb-10 text-center text-plum-soft">
          <Link href="/jurnal" className="hover:text-rose">Surat untuk Berdua</Link> · Surat {s.no}
        </nav>

        {/* Lembar surat */}
        <div className="laid-silk envelope relative bg-silk px-6 py-12 shadow-[0_30px_60px_-40px_rgb(74_35_56/0.5)] sm:px-14 sm:py-16">
          <span aria-hidden="true" className="absolute -top-6 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-plum font-[family-name:var(--font-display)] text-lg text-silk italic shadow-md ring-4 ring-silk">
            {s.no}
          </span>
          <header className="text-center">
            <p className="micro text-gilt-ink">{s.tanggal}</p>
            <h1 className="mt-5 text-[2.1rem] leading-[1.12] md:text-[2.8rem]">{s.judul}</h1>
          </header>
          <div className="rule-gilt mx-auto mt-8 max-w-[8rem]" aria-hidden="true">◆</div>

          <p className="mt-10 font-[family-name:var(--font-display)] text-xl text-plum italic">{s.sapaan}</p>
          {s.isi.map((b, k) => <Blok key={k} b={b} />)}

          <footer className="mt-14 text-right">
            <p className="font-[family-name:var(--font-display)] text-plum-soft italic">{s.penutup}</p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-plum italic">Positive Crave</p>
          </footer>
        </div>

        <Link href={`/jurnal/${berikut.slug}`} className="group mt-12 block text-center">
          <span className="micro block text-plum-soft">Surat berikutnya · {berikut.no}</span>
          <span className="mt-3 block font-[family-name:var(--font-display)] text-2xl text-plum italic group-hover:text-rose">{berikut.judul}</span>
        </Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
