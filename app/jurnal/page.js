import Link from 'next/link'
import { SURAT } from '@/lib/surat'

export const metadata = {
  title: 'Surat untuk Berdua — Positive Crave',
  description:
    'Tiga surat pendek dari Positive Crave: tentang malam yang tidak harus sempurna, memberi hadiah yang tidak bisa dipajang, dan percakapan sesudahnya.',
  alternates: { canonical: 'https://crave-grace.vercel.app/jurnal' },
}

export default function SuratPage() {
  return (
    <section className="laid-silk bg-silk pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center">
          <p className="micro text-gilt-ink">Surat untuk Berdua</p>
          <h1 className="mt-6 text-[2.5rem] leading-[1.08] md:text-[3.5rem]">
            Beberapa hal yang <em className="text-rose italic">lebih baik ditulis</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-plum-soft">
            Kami tidak menulis artikel. Kami menulis surat — pendek, pelan, dan ditujukan untuk kalian berdua.
          </p>
          <div className="rule-gilt mx-auto mt-10 max-w-xs" aria-hidden="true">◆</div>
        </header>

        <ol className="mt-16 space-y-10">
          {SURAT.map((s, i) => (
            <li key={s.slug} className={i % 2 ? 'sm:pl-16' : 'sm:pr-16'}>
              <article className="envelope group relative bg-silk-2 p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-10">
                {/* Segel lilin */}
                <span aria-hidden="true" className="absolute -top-5 right-8 grid h-12 w-12 place-items-center rounded-full bg-plum font-[family-name:var(--font-display)] text-lg text-silk italic shadow-md ring-4 ring-plum/15">
                  {s.no}
                </span>
                <p className="micro text-plum-soft">{s.tanggal} · {s.menit} menit</p>
                <p className="mt-5 font-[family-name:var(--font-display)] text-plum-soft italic">{s.sapaan}</p>
                <h2 className="mt-3 text-[1.7rem] leading-[1.2] md:text-[2.1rem]">
                  <Link href={`/jurnal/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-rose">{s.judul}</Link>
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-plum-soft">{s.ringkas}</p>
                <p className="micro mt-6 text-plum">Buka suratnya →</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
