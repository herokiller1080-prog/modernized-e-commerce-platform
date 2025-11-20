import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import GuidelinesContent from '@/components/sections/guidelines-content';

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="w-full">
        <GuidelinesContent />
      </main>
      <Footer />
    </div>
  );
}
