import Link from 'next/link'

/* Pita ajakan menuju /hadiah: kotak berpita plum + kartu miring,
   digambar dengan CSS supaya tidak mengulang foto produk. */
export default function HadiahBand() {
  return (
    <section aria-labelledby="judul-hadiah-band" className="bg-plum py-20 text-silk md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div aria-hidden="true" className="relative mx-auto h-56 w-72">
          <div className="absolute inset-x-6 bottom-0 h-44 bg-[#f3e9dc] shadow-[0_30px_40px_-24px_rgb(0_0_0/0.6)]">
            <span className="absolute inset-y-0 left-[40%] w-4 bg-plum" />
            <span className="absolute inset-x-0 top-[40%] h-4 bg-plum" />
            <span className="absolute top-[40%] left-[40%] h-12 w-12 -translate-x-[35%] -translate-y-[35%] rounded-full bg-gilt" />
          </div>
          <div className="absolute -top-2 right-0 w-40 rotate-[6deg] bg-silk p-4 text-plum shadow-lg">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase opacity-70">Untukmu</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-sm leading-snug italic">Untuk malam-malam kita yang pelan.</p>
          </div>
        </div>
        <div>
          <p className="micro text-silk/80">Hadiah</p>
          <h2 id="judul-hadiah-band" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.6rem]">
            {/* Warna lewat span: aturan h2 di globals.css (di luar layer) mengalahkan kelas pada h2 */}
            <span className="text-silk">Tulis kartunya sendiri, <em className="italic">kami yang membungkus</em></span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-silk/80">
            Pilih kertas gading, plum, atau kotak polos. Tentukan tanggal tibanya. Nota dikirim tanpa harga.
          </p>
          <Link href="/hadiah" className="mt-8 inline-flex items-center justify-center bg-silk px-8 py-4 text-sm font-semibold text-plum transition-colors hover:bg-gilt hover:text-silk">
            Susun hadiah
          </Link>
        </div>
      </div>
    </section>
  )
}
