import { Rocket, Users, Target, Heart, Sparkles, TrendingUp } from "lucide-react";

export default function AboutContent() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/White-and-Dark-Blue-Modern-Minimalist-AI-Technology-Science-Fiction-Book-Cover-1763540537163.png')`,
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            من نحن
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            محور ص هو مجتمع لدعم وتطوير المؤسسين ورواد الأعمال في المملكة العربية السعودية
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-card rounded-2xl border-2 border-border-light shadow-lg p-6 md:p-8 lg:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                مهمتنا
              </h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                نسعى لبناء أقوى مجتمع لرواد الأعمال والمؤسسين في المملكة العربية السعودية، من خلال توفير منصة لعرض المنتجات الناشئة، تبادل الخبرات، والحصول على الدعم والتوجيه من مجتمع نشط ومتفاعل.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Value 1 */}
          <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Rocket className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  الابتكار والريادة
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  نؤمن بقوة الابتكار ونشجع المؤسسين على تطوير حلول إبداعية تحل مشاكل حقيقية في المجتمع.
                </p>
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  المجتمع والتعاون
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  نبني مجتمعاً قوياً يساعد فيه المؤسسون بعضهم البعض من خلال التواصل والتعاون المثمر.
                </p>
              </div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  النمو المستمر
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  نوفر الموارد والتوجيه اللازم لمساعدة المؤسسين على النمو والتطور في رحلتهم الريادية.
                </p>
              </div>
            </div>
          </div>

          {/* Value 4 */}
          <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  الشغف والالتزام
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  نحتفي بالمؤسسين المتحمسين والملتزمين ببناء منتجات تحدث فرقاً حقيقياً.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-border-light p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            ماذا نقدم؟
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">منصة لعرض المنتجات:</strong> نوفر مساحة لعرض المنتجات الناشئة والحصول على تقييمات وآراء من المجتمع
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">دفعات أسبوعية:</strong> نطلق دفعة جديدة من المنتجات كل أسبوع، مما يتيح للمؤسسين عرض أعمالهم أمام جمهور واسع
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">التصويت والتفاعل:</strong> يمكن للمجتمع التصويت على المنتجات المفضلة ودعم المؤسسين من خلال التفاعل الإيجابي
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed">
                <strong className="text-foreground">موارد وإرشادات:</strong> نقدم إرشادات ومعايير واضحة لمساعدة المؤسسين على تقديم منتجاتهم بأفضل شكل ممكن
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            انضم إلى مجتمعنا اليوم
          </h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            سواء كنت مؤسساً يبحث عن عرض منتجه أو مهتماً باكتشاف منتجات جديدة، نحن هنا لدعمك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Rocket className="w-5 h-5" />
              قدّم منتجك
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border-2 border-secondary text-foreground font-semibold rounded-xl hover:bg-white hover:shadow-md hover:scale-[1.02] transition-all"
            >
              استكشف المنتجات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
