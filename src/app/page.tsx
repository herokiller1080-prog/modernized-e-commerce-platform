import Header from '@/components/sections/header';
import HeroBanner from '@/components/sections/hero-banner';
import ProductGrid from '@/components/sections/product-grid';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="w-full">
        <HeroBanner />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}