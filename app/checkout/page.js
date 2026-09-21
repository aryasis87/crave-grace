import CheckoutPage from '@/components/CheckoutPage'

export const metadata = {
  title: 'Pemesanan — Positive Crave',
  description: 'Positive Crave — perlengkapan keintiman untuk pasangan, dikirim dalam kemasan polos.',
  alternates: { canonical: 'https://crave-grace.vercel.app/checkout' },
  robots: { index: false, follow: true },
}

export default function Route() {
  return <CheckoutPage />
}
