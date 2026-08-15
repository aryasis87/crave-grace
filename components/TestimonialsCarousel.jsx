const suara = [
  {
    kutipan:
      'Yang kami pakai justru bagian panduannya. Malam itu tidak ada barang baru sama sekali — cuma lampu dimatikan dan ponsel ditaruh di ruang lain.',
    nama: 'N. & B.',
    ket: 'Jakarta',
  },
  {
    kutipan:
      'Saya beli untuk kado ulang tahun pernikahan. Kotaknya rapi, dan tidak ada satu pun tulisan yang bikin saya deg-degan waktu kurirnya datang.',
    nama: 'W.',
    ket: 'Bandung',
  },
  {
    kutipan:
      'Bagian "membicarakannya sesudahnya" itu yang paling membekas. Ternyata percakapan setelahnya memang lebih menentukan.',
    nama: 'K. & S.',
    ket: 'Denpasar',
  },
]

export default function TestimonialsCarousel() {
  return (
    <section id="suara" className="relative overflow-hidden bg-silk-2 py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="micro mb-5 text-gilt">Catatan Pembeli</p>
          <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
            Yang paling sering diingat <em className="italic text-rose">bukan barangnya</em>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {suara.map((s) => (
            <figure key={s.nama} className="envelope flex flex-col bg-silk p-8">
              <blockquote className="flex-1 font-[family-name:var(--font-display)] text-[1.05rem] leading-relaxed text-plum italic">
                {s.kutipan}
              </blockquote>
              <figcaption className="mt-7 border-t border-plum/12 pt-5">
                <span className="block text-sm font-semibold text-plum">{s.nama}</span>
                <span className="micro mt-1.5 block text-plum-soft/55">{s.ket}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="micro mt-8 text-center leading-[1.7] text-plum-soft/45">
          Nama disingkat atas permintaan. Kutipan di atas adalah ilustrasi untuk purwarupa desain.
        </p>
      </div>
    </section>
  )
}
