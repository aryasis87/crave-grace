import { PRODUK } from '@/lib/katalog'
import { SURAT } from '@/lib/surat'

const SITE = 'https://crave-grace.vercel.app'

export default function sitemap() {
  const now = new Date()
  return [
    { url: SITE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/koleksi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/hadiah`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/jurnal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...PRODUK.map((p) => ({ url: `${SITE}/produk/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })),
    ...SURAT.map((a) => ({ url: `${SITE}/jurnal/${a.slug}`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 })),
  ]
}
