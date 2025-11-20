import { Shield, CheckCircle, XCircle, AlertTriangle, FileText, Users } from "lucide-react";

export default function GuidelinesContent() {
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
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            إرشادات المجتمع
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            معايير وإرشادات لضمان تجربة إيجابية ومثمرة لجميع أعضاء محور ص
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-card rounded-2xl border-2 border-border-light shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                مرحباً بك في مجتمع محور ص
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                نحن مجتمع يهدف إلى دعم المؤسسين ورواد الأعمال في المملكة العربية السعودية. للحفاظ على بيئة إيجابية ومحترمة، نطلب من جميع الأعضاء الالتزام بالإرشادات التالية عند تقديم منتجاتهم أو التفاعل مع المجتمع.
              </p>
            </div>
          </div>
        </div>

        {/* What to Do */}
        <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              ما يجب فعله
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">قدّم منتجات أصلية</h3>
                <p className="text-sm text-foreground/70">
                  تأكد من أن المنتج الذي تقدمه هو من تطويرك أو لديك الصلاحية الكاملة لتمثيله
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">وفّر وصفاً واضحاً ودقيقاً</h3>
                <p className="text-sm text-foreground/70">
                  اشرح بوضوح ماهية منتجك، المشكلة التي يحلها، والفئة المستهدفة
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">استخدم محتوى عالي الجودة</h3>
                <p className="text-sm text-foreground/70">
                  قدم فيديو تعريفي واضح وصور ذات جودة عالية توضح واجهة المنتج وميزاته
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">كن محترماً ومهذباً</h3>
                <p className="text-sm text-foreground/70">
                  تعامل مع المجتمع باحترام وتقبل التعليقات البناءة بصدر رحب
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">اختر الفئة المناسبة</h3>
                <p className="text-sm text-foreground/70">
                  حدد الفئة الصحيحة التي ينتمي إليها منتجك لتسهيل اكتشافه من قبل المهتمين
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Not to Do */}
        <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              ما يجب تجنبه
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-lg border border-red-200/30">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">لا تنشر محتوى مضلل</h3>
                <p className="text-sm text-foreground/70">
                  تجنب المبالغة في وصف منتجك أو تقديم معلومات غير دقيقة عن ميزاته
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-lg border border-red-200/30">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">لا تنسخ منتجات الآخرين</h3>
                <p className="text-sm text-foreground/70">
                  لا تقدم منتجات منسوخة أو مسروقة من مطورين آخرين
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-lg border border-red-200/30">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">لا تنشر محتوى غير لائق</h3>
                <p className="text-sm text-foreground/70">
                  تجنب المحتوى الذي يحتوي على عنف، كراهية، أو أي مواد مسيئة أو غير قانونية
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-lg border border-red-200/30">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">لا تستخدم المنصة للإعلانات المباشرة</h3>
                <p className="text-sm text-foreground/70">
                  هذه المنصة لعرض المنتجات وليست للإعلانات التجارية المباشرة أو الترويج المفرط
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-lg border border-red-200/30">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">لا تتلاعب بالتصويت</h3>
                <p className="text-sm text-foreground/70">
                  لا تستخدم حسابات وهمية أو أساليب احتيالية لزيادة عدد الأصوات بشكل مصطنع
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Requirements */}
        <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              متطلبات المحتوى
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80">
                <strong>الفيديو:</strong> يجب أن يكون بين 30 ثانية و 5 دقائق، بجودة HD على الأقل، ويوضح ميزات المنتج بشكل واضح
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80">
                <strong>الصور:</strong> دقة لا تقل عن 1200×900 بكسل، نسبة 4:3 مفضلة، لقطات شاشة واضحة للواجهة
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80">
                <strong>الوصف:</strong> 100-500 كلمة، يشرح المنتج والمشكلة التي يحلها والفئة المستهدفة
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/80">
                <strong>الشعار:</strong> جملة واحدة لا تتجاوز 80 حرفاً تلخص المنتج بشكل جذاب
              </p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300/50 shadow-md p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                عواقب عدم الالتزام
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                قد يؤدي عدم الالتزام بهذه الإرشادات إلى إزالة منتجك من المنصة، أو تعليق حسابك، أو حظره نهائياً حسب خطورة المخالفة. نحتفظ بالحق في مراجعة وإزالة أي محتوى نراه غير مناسب.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">
            هل أنت مستعد لتقديم منتجك؟
          </h3>
          <p className="text-secondary mb-6">
            تأكد من قراءة الإرشادات بعناية قبل تقديم منتجك
          </p>
          <a
            href="/submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <FileText className="w-5 h-5" />
            قدّم منتجك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
