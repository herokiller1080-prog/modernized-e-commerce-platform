import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative font-body bg-gradient-to-b from-background to-white border-t border-secondary/30 min-h-[120px] text-foreground font-medium overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <p className="text-base">
              &copy; 2025 عين على سوريا
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-base hover:text-primary hover:underline transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/guidelines"
              className="text-base hover:text-primary hover:underline transition-colors"
            >
              إرشادات المجتمع
            </Link>
            <Link
              href="/contact"
              className="text-base hover:text-primary hover:underline transition-colors"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;