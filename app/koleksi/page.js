import Link from 'next/link'
import ProdukGambar from '@/components/ProdukGambar'
import { BABAK, PRODUK, rupiah } from '@/lib/katalog'

const SITE = 'https://crave-grace.vercel.app'

export const metadata = {
  title: 'Susunan Acara — Koleksi Positive Crave',
  description:
    'Koleksi Positive Crave disusun seperti susunan acara: tiga babak, dari menyiapkan ruang sampai percakapan sesudahnya. Setiap barang siap dibungkus sebagai hadiah.',
  alternates: { canonical: `${SITE}/koleksi` },
}

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Koleksi Positive Crave menurut babak',
  itemListElement: PRODUK.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/produk/${p.slug}`, name: p.nama })),
}

export default function KoleksiPage() {
  return (
    <section className="laid-silk relative bg-silk pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center">
          <p className="micro text-gilt-ink">Susunan Acara</p>
          <h1 className="mt-6 text-[2.5rem] leading-[1.08] md:text-[3.5rem]">
            Satu malam, <em className="text-rose italic">tiga babak</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-plum-soft">
            Kami tidak menyusun koleksi menurut jenis barang. Kami menyusunnya seperti undangan — menurut
            urutan malamnya. Setiap barang bisa{' '}
            <Link href="/hadiah" className="text-plum underline decoration-gilt underline-offset-4 hover:text-rose">dibungkus sebagai hadiah</Link>.
          </p>
          <div className="rule-gilt mx-auto mt-10 max-w-xs" aria-hidden="true">◆</div>
        </header>

        {BABAK.map((b) => {
          const isi = PRODUK.filter((p) => p.babak === b.id)
          return (
            <section key={b.id} id={`babak-${b.no.toLowerCase()}`} aria-labelledby={`judul-${b.id}`} className="mt-20 scroll-mt-28">
              <div className="grid gap-4 border-b border-plum/15 pb-6 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-end">
                <p className="font-[family-name:var(--font-display)] text-6xl leading-none text-gilt italic">{b.no}</p>
                <div>
                  <h2 id={`judul-${b.id}`} className="text-[1.8rem] leading-[1.1] md:text-[2.2rem]">{b.nama}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-plum-soft">{b.ringkas}</p>
                </div>
                <p className="micro text-plum-soft">{b.waktu}</p>
              </div>

              <ul className="divide-y divide-plum/10">
                {isi.map((p) => (
                  <li key={p.slug} className="group relative grid grid-cols-[4.5rem_minmax(0,1fr)] gap-5 py-6 sm:grid-cols-[6rem_minmax(0,1fr)]">
                    <div className="envelope relative aspect-square overflow-hidden bg-silk-2">
                      <ProdukGambar p={p} sizes="96px" className="transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:flex-nowrap">
                        <h3 className="min-w-0 text-lg italic sm:shrink-0 md:text-xl">
                          <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-rose">{p.nama}</Link>
                        </h3>
                        <span aria-hidden="true" className="hidden h-px flex-1 translate-y-[-0.3em] border-b border-dotted border-plum/35 sm:block" />
                        <span className="shrink-0 text-sm font-semibold text-plum sm:ml-auto">{rupiah(p.harga)}</span>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-plum-soft">{p.ringkas}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        <p className="micro mt-16 text-center leading-[1.7] text-plum-soft">
          Nama, harga, dan spesifikasi adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  )
}
