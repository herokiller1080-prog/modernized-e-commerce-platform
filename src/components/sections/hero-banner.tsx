import React from 'react';

const HeroBanner = () => {
  const patternUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/White-and-Dark-Blue-Modern-Minimalist-AI-Technology-Science-Fiction-Book-Cover-1763540537163.png";

  return (
    <section 
      className="relative w-full bg-background overflow-hidden"
      dir="rtl"
    >
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(${patternUrl})`,
          backgroundPosition: 'center',
          backgroundSize: '300px', 
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Decorative Corner: Top-Right (for RTL) */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-[0.15]"
        style={{
          backgroundColor: '#002623', // --color-accent-primary
          maskImage: `url(${patternUrl})`,
          WebkitMaskImage: `url(${patternUrl})`,
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
        }}
      />

      {/* Decorative Corner: Bottom-Left (for RTL) */}
      <div 
        className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-[0.15]"
        style={{
          backgroundColor: '#002623', // --color-accent-primary
          maskImage: `url(${patternUrl})`,
          WebkitMaskImage: `url(${patternUrl})`,
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          transform: 'rotate(180deg)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center animate-in fade-in-0 duration-1000">
          <h1 className="text-foreground font-bold text-[1.75rem] leading-[1.2] tracking-[-0.02em] sm:text-[2.5rem] lg:text-5xl">
            دفعة مؤسسين عين على سوريا - أسبوع #١
          </h1>
          <p className="mt-4 text-secondary text-base max-w-2xl mx-auto">
            {/* Subheading is empty but styled for consistency */}
          </p>
      </div>
    </section>
  );
};

export default HeroBanner;