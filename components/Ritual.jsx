import Link from 'next/link'

/* ============================================================================
   Bagian penanda varian ini: "Ritual Berdua".
   Alih-alih memajang produk lebih dulu, varian Grace membicarakan suasananya:
   tiga babak sederhana yang bisa disiapkan siapa pun malam ini juga. Produk
   muncul sebagai pelengkap babak, bukan sebagai pusat perhatian.
   ========================================================================== */

const babak = [
  {
    no: 'I',
    nama: 'Menyiapkan ruang',
    waktu: '10 menit',
    isi: 'Matikan lampu utama, sisakan satu sumber cahaya hangat. Singkirkan layar dari jangkauan tangan — termasuk yang menyala di saku.',
    pelengkap: 'Lilin aroma, peredup lampu',
  },
  {
    no: 'II',
    nama: 'Melambatkan tempo',
    waktu: '20 menit',
    isi: 'Mulai dari sentuhan yang tidak menuntut apa-apa. Pijatan di bahu dan punggung lebih dulu, tanpa terburu menuju babak berikutnya.',
    pelengkap: 'Minyak pijat, pelumas berbahan air',
  },
  {
    no: 'III',
    nama: 'Membicarakannya',
    waktu: 'Sesudahnya',
    isi: 'Percakapan setelahnya sering lebih menentukan daripada malamnya sendiri. Tanyakan apa yang paling disukai, lalu ingat untuk lain kali.',
    pelengkap: 'Panduan percakapan pasangan',
  },
]

export default function Ritual() {
  return (
    <section id="ritual" className="relative overflow-hidden bg-silk-2 py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="micro mb-6 text-gilt">Ritual Berdua</p>
          <h2 className="mx-auto max-w-2xl text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Yang paling berkesan biasanya{' '}
            <em className="italic text-rose">bukan barangnya</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-plum-soft">
            Tiga babak sederhana yang bisa disiapkan malam ini juga, tanpa membeli apa pun lebih
            dulu. Produk hanya melengkapi — ia tidak menggantikan perhatian.
          </p>
        </div>

        <ol className="space-y-8">
          {babak.map((b) => (
            <li key={b.no} className="envelope bg-silk p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10">
                <div className="flex items-baseline gap-4 md:flex-col md:items-center md:gap-2">
                  <span
                    aria-hidden="true"
                    className="font-[family-name:var(--font-display)] text-[2.5rem] leading-none text-gilt italic"
                  >
                    {b.no}
                  </span>
                  <span className="micro text-plum-soft/60">{b.waktu}</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl">{b.nama}</h3>
                  <p className="mt-3 leading-relaxed text-plum-soft">{b.isi}</p>

                  <dl className="mt-6 border-t border-plum/12 pt-4">
                    <dt className="micro text-plum-soft/55">Pelengkap</dt>
                    <dd className="mt-2 text-sm font-medium text-plum">{b.pelengkap}</dd>
                  </dl>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="rule-gilt micro mx-auto mt-14 max-w-md text-center text-gilt">Lalu</p>

        <div className="mt-8 text-center">
          <Link
            href="/#produk"
            className="inline-flex items-center justify-center bg-plum px-9 py-4 text-sm font-semibold text-silk transition-colors duration-300 hover:bg-rose"
          >
            Lihat Pelengkapnya
          </Link>
        </div>
      </div>
    </section>
  )
}
