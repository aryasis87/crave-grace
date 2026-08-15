import Link from 'next/link'

const produk = [
  {
    nama: 'Lilin Malam Pertama',
    harga: 'Rp 245.000',
    babak: 'Babak I',
    desc: 'Menyala tenang selama empat jam, dengan aroma yang tidak menusuk ruangan.',
    image: '/images/p5.jpg',
  },
  {
    nama: 'Minyak Pijat Sutra',
    harga: 'Rp 185.000',
    babak: 'Babak II',
    desc: 'Menyerap perlahan, tidak meninggalkan lapisan lengket di kulit maupun seprai.',
    image: '/images/p7.jpg',
  },
  {
    nama: 'Kotak Berdua',
    harga: 'Rp 1.480.000',
    babak: 'Babak III',
    desc: 'Lilin, minyak pijat, pelumas, dan kartu percakapan dalam satu kotak bertutup kain.',
    image: '/images/p8.jpg',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="produk" className="relative overflow-hidden bg-silk py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="micro mb-5 text-gilt">Pilihan</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Tiga yang paling sering <em className="italic text-rose">dijadikan hadiah</em>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {produk.map((p) => (
            <article key={p.nama} className="envelope group flex flex-col bg-silk-2 p-2.5">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.nama}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pt-6 pb-4 text-center">
                <p className="micro text-gilt">{p.babak}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-plum">
                  {p.nama}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-plum-soft">{p.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-plum/12 pt-5">
                  <span className="text-base font-semibold text-plum">{p.harga}</span>
                  <Link href="/produk" className="micro text-gilt transition-colors hover:text-rose">
                    Rincian
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="micro mt-8 text-center leading-[1.7] text-plum-soft/45">
          Harga dan nama barang di atas adalah contoh untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  )
}
