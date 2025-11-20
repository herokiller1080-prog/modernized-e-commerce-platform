import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ContactContent from '@/components/sections/contact-content';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="w-full">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
