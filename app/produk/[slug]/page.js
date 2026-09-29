import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProdukGambar from '@/components/ProdukGambar'
import { BUNGKUS, PRODUK, babakDari, produkBySlug, rupiah } from '@/lib/katalog'

const SITE = 'https://crave-grace.vercel.app'

export function generateStaticParams() {
  return PRODUK.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) return {}
  const b = babakDari(p.babak)
  return {
    title: `${p.nama} — Babak ${b.no}, Positive Crave`,
    description: `${p.ringkas} Bisa dibungkus sebagai hadiah dengan kartu tulisan tangan.`,
    alternates: { canonical: `${SITE}/produk/${p.slug}` },
    openGraph: p.image ? { images: [{ url: p.image }] } : undefined,
  }
}

export default async function ProdukPage({ params }) {
  const { slug } = await params
  const p = produkBySlug(slug)
  if (!p) notFound()
  const b = babakDari(p.babak)
  const sebabak = PRODUK.filter((x) => x.babak === p.babak && x.slug !== p.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nama,
    description: p.ringkas,
    ...(p.image ? { image: `${SITE}${p.image}` } : {}),
    offers: { '@type': 'Offer', priceCurrency: 'IDR', price: p.harga, availability: 'https://schema.org/InStock' },
  }

  return (
    <>
      <section className="laid-silk relative overflow-clip bg-silk pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="micro mb-12 flex flex-wrap items-center justify-center gap-2 text-plum-soft">
            <Link href="/" className="hover:text-rose">Beranda</Link>
            <span aria-hidden="true">·</span>
            <Link href={`/koleksi#babak-${b.no.toLowerCase()}`} className="hover:text-rose">Babak {b.no}</Link>
            <span aria-hidden="true">·</span>
            <span className="text-plum" aria-current="page">{p.nama}</span>
          </nav>

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Bingkai amplop berlapis */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="envelope bg-silk-2 p-4 sm:p-6">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ProdukGambar p={p} priority sizes="(min-width: 1024px) 45vw, 100vw" />
                </div>
                <p className="micro mt-4 text-center text-plum-soft">Babak {b.no} · {b.nama}</p>
              </div>
            </div>

            <div>
              <p className="micro text-gilt-ink">Babak {b.no} — {b.nama}</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.06] italic md:text-[3.2rem]">{p.nama}</h1>
              <div className="rule-gilt mt-7 max-w-[10rem]" aria-hidden="true">◆</div>
              <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.85] text-plum-soft">
                {p.cerita.map((c) => <p key={c.slice(0, 24)}>{c}</p>)}
              </div>
              <p className="mt-9 font-[family-name:var(--font-display)] text-3xl text-plum">{rupiah(p.harga)}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/checkout?produk=${p.slug}`} className="inline-flex flex-1 items-center justify-center bg-plum px-8 py-4 text-sm font-semibold text-silk transition-colors hover:bg-rose">
                  Pesan untuk berdua
                </Link>
                <Link href={`/hadiah?produk=${p.slug}`} className="inline-flex flex-1 items-center justify-center border border-plum/30 px-8 py-4 text-sm font-semibold text-plum transition-colors hover:border-rose hover:text-rose">
                  Jadikan hadiah
                </Link>
              </div>

              <dl className="mt-12 border-t border-plum/15">
                {p.spek.map(([k, v]) => (
                  <div key={k} className="grid gap-1 border-b border-plum/10 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                    <dt className="micro pt-0.5 text-plum-soft">{k}</dt>
                    <dd className="text-sm text-plum">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="micro mt-8 leading-[1.7] text-plum-soft">Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bila dijadikan hadiah — ciri khas halaman produk Grace */}
      <section aria-labelledby="judul-hadiah" className="bg-silk-2 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="micro text-gilt-ink">Bila dijadikan hadiah</p>
          <h2 id="judul-hadiah" className="mx-auto mt-5 max-w-xl text-[1.9rem] leading-[1.15] md:text-[2.4rem]">
            {p.nama}, dibungkus <em className="text-rose italic">dengan salah satu dari tiga cara</em>
          </h2>
          <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {BUNGKUS.map((w) => (
              <li key={w.id} className="envelope bg-silk p-6">
                <div aria-hidden="true" className="relative mx-auto h-24 w-32" style={{ backgroundColor: w.warna }}>
                  {w.pita && (
                    <>
                      <span className="absolute inset-y-0 left-1/2 w-2.5 -translate-x-1/2" style={{ backgroundColor: w.pita }} />
                      <span className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2" style={{ backgroundColor: w.pita }} />
                      <span className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-silk/60" style={{ backgroundColor: w.pita }} />
                    </>
                  )}
                </div>
                <h3 className="mt-6 text-lg italic">{w.nama}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-soft">{w.ket}</p>
              </li>
            ))}
          </ul>
          <Link href={`/hadiah?produk=${p.slug}`} className="micro mt-10 inline-block border-b border-gilt pb-1 text-plum hover:text-rose">
            Susun hadiahnya & tulis kartunya
          </Link>
        </div>
      </section>

      {sebabak.length > 0 && (
        <section className="bg-silk py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-[1.8rem] leading-[1.1] md:text-[2.2rem]">
              Juga di babak <em className="text-rose italic">{b.no}</em>
            </h2>
            <ul className="mt-10 divide-y divide-plum/10 border-y border-plum/10">
              {sebabak.map((x) => (
                <li key={x.slug} className="group relative flex items-baseline gap-4 py-5">
                  <h3 className="text-lg italic">
                    <Link href={`/produk/${x.slug}`} className="after:absolute after:inset-0 group-hover:text-rose">{x.nama}</Link>
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 border-b border-dotted border-plum/35" />
                  <span className="text-sm font-semibold text-plum">{rupiah(x.harga)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
