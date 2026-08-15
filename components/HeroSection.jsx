import Image from 'next/image'
import Link from 'next/link'

const janji = [
  ['Kemasan', 'Polos, tanpa merek'],
  ['Material', 'Medical-grade, bebas BPA'],
  ['Dukungan', 'Dijawab manusia'],
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-silk pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <p className="micro mb-7 text-gilt">Positive Crave · Untuk pasangan</p>

          <h1 className="text-[2.6rem] leading-[1.06] sm:text-5xl lg:text-[3.9rem]">
            Reimagined
            <br />
            With <em className="italic text-rose">Grace</em>.
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-plum-soft">
            Keintiman yang dibicarakan dengan tenang, bukan dengan berbisik. Kami menyusun koleksi,
            panduan, dan cara pengirimannya supaya tidak ada bagian dari prosesnya yang membuat
            Anda merasa perlu menjelaskan diri.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#ritual"
              className="inline-flex items-center justify-center bg-plum px-8 py-4 text-sm font-semibold text-silk transition-colors duration-300 hover:bg-rose"
            >
              Mulai dari Ritual
            </Link>
            <Link
              href="/#produk"
              className="inline-flex items-center justify-center border border-plum/25 px-8 py-4 text-sm font-semibold text-plum transition-colors duration-300 hover:border-plum/60"
            >
              Lihat Koleksi
            </Link>
          </div>

          <dl className="mt-14 grid gap-7 border-t border-plum/15 pt-8 sm:grid-cols-3">
            {janji.map(([k, v]) => (
              <div key={k}>
                <dt className="micro text-plum-soft/55">{k}</dt>
                <dd className="mt-2.5 text-sm font-semibold text-plum">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="envelope relative bg-silk-2 p-3">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/w3.jpeg"
              alt="Momen tenang berdua"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-2 py-5 text-center">
            <p className="micro text-gilt">Dikirim seperti kado</p>
            <p className="mt-2 text-sm leading-relaxed text-plum-soft">
              Kotak polos, tanpa nama merek di resi maupun mutasi rekening.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
