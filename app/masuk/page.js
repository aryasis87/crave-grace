import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Masuk ke akun Positive Crave untuk melihat hadiah dalam perjalanan dan tanggal yang Anda simpan.',
  alternates: { canonical: 'https://crave-grace.vercel.app/masuk' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="masuk" />
}
