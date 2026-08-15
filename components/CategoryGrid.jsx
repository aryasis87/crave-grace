import Link from 'next/link'

const kategori = [
  {
    nama: 'Babak I — Menyiapkan ruang',
    desc: 'Lilin aroma, peredup lampu, dan hal-hal kecil yang mengubah suasana.',
    jumlah: '14 barang',
    image: '/images/p2.jpg',
  },
  {
    nama: 'Babak II — Melambatkan tempo',
    desc: 'Minyak pijat dan pelumas untuk sentuhan yang tidak menuntut apa-apa.',
    jumlah: '19 barang',
    image: '/images/p3.jpg',
  },
  {
    nama: 'Babak III — Berdua',
    desc: 'Barang yang dipakai bersama, ketika keduanya sudah sepakat.',
    jumlah: '17 barang',
    image: '/images/p4.jpg',
  },
]

export default function CategoryGrid() {
  return (
    <section id="kategori" className="relative overflow-hidden bg-silk-2 py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="micro mb-5 text-gilt">Kategori</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
              Disusun mengikuti <em className="italic text-rose">babaknya</em>
            </h2>
          </div>
          <Link
            href="/produk"
            className="micro shrink-0 border-b border-gilt/50 pb-1 text-gilt transition-colors hover:border-gilt"
          >
            Lihat semua
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {kategori.map((k) => (
            <Link key={k.nama} href="/produk" className="group block">
              <div className="envelope bg-silk p-2.5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={k.image}
                    alt={k.nama}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-plum">{k.nama}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-plum-soft">{k.desc}</p>
                <p className="micro mt-3 text-gilt">{k.jumlah}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
