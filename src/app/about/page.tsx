import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import AboutContent from '@/components/sections/about-content';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="w-full">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
