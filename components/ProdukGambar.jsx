import Image from 'next/image'

/* Gambar produk Grace. Barang tanpa foto (mis. Kartu Percakapan) digambar
   dengan CSS: tumpukan kartu katun dengan satu pertanyaan bertinta plum. */
export default function ProdukGambar({ p, sizes, priority = false, className = '' }) {
  if (p.image)
    return <Image src={p.image} alt={p.nama} fill priority={priority} sizes={sizes} className={`object-cover ${className}`} />

  return (
    <div role="img" aria-label={`${p.nama} — ilustrasi`} className="laid-silk absolute inset-0 grid place-items-center bg-silk-2">
      <div className="relative h-[58%] w-[46%]">
        <span className="absolute inset-0 translate-x-[14%] rotate-[9deg] rounded-sm bg-rose/35 shadow-sm" />
        <span className="absolute inset-0 -translate-x-[10%] -rotate-[6deg] rounded-sm bg-gilt/30 shadow-sm" />
        <span className="absolute inset-0 grid place-items-center rounded-sm bg-silk p-[8%] text-center shadow-md">
          <span className="font-[family-name:var(--font-display)] text-[clamp(0.7rem,2.4vw,1.35rem)] leading-snug text-plum italic">
            &ldquo;Apa yang ingin kita ulangi minggu depan?&rdquo;
          </span>
        </span>
      </div>
    </div>
  )
}
