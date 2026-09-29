import AkunForm from '@/components/AkunForm'

export const metadata = {
  title: 'Daftar — Positive Crave',
  description: 'Buat akun Positive Crave dan simpan satu tanggal penting — kami ingatkan dua minggu sebelumnya.',
  alternates: { canonical: 'https://crave-grace.vercel.app/register' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <AkunForm mode="daftar" />
}
