import Link from 'next/link'

const spek = [
  ['Isi kotak', 'Lilin, minyak pijat, pelumas, kartu'],
  ['Lilin', 'Menyala tenang ±4 jam'],
  ['Minyak pijat', '100 ml, menyerap tanpa lengket'],
  ['Pelumas', 'Berbahan air, 75 ml'],
  ['Kartu percakapan', '12 kartu, bahasa Indonesia'],
  ['Kemasan', 'Kotak bertutup kain, siap jadi kado'],
]

const galeri = ['/images/p5.jpg', '/images/p9.jpeg', '/images/p10.jpeg']

export default function ProductDetailPage() {
  return (
    <section className="relative overflow-hidden bg-silk pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="laid-silk absolute inset-x-0 top-0 h-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <nav aria-label="Remah roti" className="micro mb-10 flex flex-wrap items-center gap-2 text-plum-soft/55">
          <Link href="/" className="transition-colors hover:text-gilt">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-plum">Kotak Berdua</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="relative aspect-square overflow-hidden envelope bg-silk-2">
              <img src={galeri[0]} alt="Kotak Berdua" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {galeri.map((g, i) => (
                <div key={g} className="relative aspect-square overflow-hidden envelope bg-silk-2">
                  <img src={g} alt={`Kotak Berdua tampilan ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="micro mb-4 text-gilt">Babak III</p>
            <h1 className="text-[2.2rem] leading-[1.06] md:text-[2.9rem]">Kotak Berdua</h1>

            <p className="mt-5 leading-relaxed text-plum-soft">
              Lilin, minyak pijat, pelumas, dan kartu percakapan dalam satu kotak bertutup kain.
              Disusun mengikuti tiga babak, supaya malamnya tidak perlu diburu-buru.
            </p>

            <p className="mt-8 text-2xl font-semibold text-plum">Rp 1.480.000</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/checkout"
                className="inline-flex flex-1 items-center justify-center bg-plum px-8 py-4 text-sm font-semibold text-silk transition-colors duration-300 hover:bg-rose"
              >
                Pesan Kotaknya
              </Link>
              <Link
                href="/#kontak"
                className="inline-flex items-center justify-center border border-plum/25 px-8 py-4 text-sm font-semibold text-plum transition-colors duration-300 hover:border-plum/60"
              >
                Tanya Dulu
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3.5 envelope bg-silk-2 px-5 py-4">
              <span aria-hidden="true" className="h-8 w-8 shrink-0 bg-gilt/30" />
              <p className="text-sm leading-relaxed text-plum/85">
                Sudah rapi sebagai kado. Tidak ada nama merek di kotak maupun di resi.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-plum/12 border-t border-plum/12">
              {spek.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="micro text-plum-soft/55">{k}</dt>
                  <dd className="text-sm text-plum sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="micro mt-8 leading-[1.7] text-plum-soft/45">
              Spesifikasi dan harga di atas adalah contoh untuk keperluan purwarupa desain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
