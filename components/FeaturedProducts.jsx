import Link from 'next/link'
import ProdukGambar from '@/components/ProdukGambar'
import { PRODUK, babakDari, rupiah } from '@/lib/katalog'

export default function FeaturedProducts() {
  const unggulan = PRODUK.filter((p) => p.unggulan)

  return (
    <section id="produk" className="relative overflow-hidden bg-silk py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="micro mb-5 text-gilt-ink">Pilihan</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Yang paling sering <em className="italic text-rose">dijadikan hadiah</em>
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
          {unggulan.map((p) => {
            const b = babakDari(p.babak)
            return (
              <li key={p.slug} className="last:col-span-2 md:last:col-span-1">
                <article className="envelope group relative flex h-full flex-col bg-silk-2 p-2.5">
                  <div className="relative aspect-square overflow-hidden">
                    <ProdukGambar p={p} sizes="(min-width: 768px) 33vw, 50vw" className="transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col px-3 pt-5 pb-3 text-center sm:px-5 sm:pt-6 sm:pb-4">
                    <p className="micro text-plum-soft">Babak {b.no}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg text-plum italic sm:text-xl">
                      <Link href={`/produk/${p.slug}`} className="after:absolute after:inset-0">{p.nama}</Link>
                    </h3>
                    <p className="mt-2.5 hidden flex-1 text-sm leading-relaxed text-plum-soft sm:block">{p.ringkas}</p>
                    <p className="mt-4 border-t border-plum/12 pt-4 text-sm font-semibold text-plum sm:text-base">{rupiah(p.harga)}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 text-center">
          <Link href="/koleksi" className="micro border-b border-gilt pb-1 text-plum hover:text-rose">Seluruh susunan acara</Link>
        </div>
        <p className="micro mt-8 text-center leading-[1.7] text-plum-soft">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
