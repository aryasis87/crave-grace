import Link from 'next/link'

const saluran = [
  {
    label: 'Chat',
    nilai: 'Setiap hari 10.00–22.00 WIB',
    ket: 'Dijawab orang, dengan bahasa yang tenang dan tanpa sindiran.',
  },
  {
    label: 'Surel',
    nilai: 'halo@positivecrave.id',
    href: 'mailto:halo@positivecrave.id',
    ket: 'Untuk pertanyaan panjang, pesanan kado, atau klaim garansi.',
  },
  {
    label: 'Telepon',
    nilai: '+62 812 3456 7890',
    href: 'tel:+628123456789',
    ket: 'Sen–Jum 09.00–17.00 WIB.',
  },
]

export default function ContactSupport() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-silk-2 py-20 md:py-28">
      <div aria-hidden="true" className="laid-silk absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="micro mb-5 text-gilt">Bantuan</p>
            <h2 className="text-[2rem] leading-[1.14] md:text-[2.7rem]">
              Bertanya dulu <em className="italic text-rose">selalu boleh</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-plum-soft">
              Termasuk pertanyaan yang terasa terlalu sederhana untuk ditanyakan. Tidak ada jawaban
              kami yang berujung tawaran barang.
            </p>

            <Link
              href="/#ritual"
              className="mt-9 inline-flex items-center justify-center bg-plum px-8 py-4 text-sm font-semibold text-silk transition-colors duration-300 hover:bg-rose"
            >
              Baca Ritual Berdua
            </Link>
          </div>

          <dl className="divide-y divide-plum/12 border-y border-plum/12">
            {saluran.map((s) => (
              <div key={s.label} className="py-6">
                <dt className="micro text-plum-soft/55">{s.label}</dt>
                <dd className="mt-2 text-base font-semibold text-plum">
                  {s.href ? (
                    <a href={s.href} className="break-all transition-colors hover:text-rose">
                      {s.nilai}
                    </a>
                  ) : (
                    s.nilai
                  )}
                </dd>
                <dd className="mt-1.5 text-sm leading-relaxed text-plum-soft">{s.ket}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
