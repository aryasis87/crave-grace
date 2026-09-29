import HeroSection from '@/components/HeroSection'
import Ritual from '@/components/Ritual'
import FeaturedProducts from '@/components/FeaturedProducts'
import HadiahBand from '@/components/HadiahBand'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import SuratTeaser from '@/components/SuratTeaser'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

/* Beranda Grace: ritual tiga babak lebih dulu, barangnya belakangan. Susunan
   acara lengkap di /koleksi, penyusun hadiah di /hadiah, surat di /jurnal. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <Ritual />
      <FeaturedProducts />
      <HadiahBand />
      <USPSection />
      <TestimonialsCarousel />
      <SuratTeaser />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
