import LoginPage from '@/components/LoginPage'

export const metadata = {
  title: 'Masuk — Positive Crave',
  description: 'Positive Crave — perlengkapan keintiman untuk pasangan, dikirim dalam kemasan polos.',
  alternates: { canonical: 'https://crave-grace.pintuweb.com/masuk' },
  robots: { index: false, follow: true },
}

export default function Route() {
  return <LoginPage />
}
