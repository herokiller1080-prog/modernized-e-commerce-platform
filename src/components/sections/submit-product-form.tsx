"use client";

import { useState } from "react";
import { Upload, Link as LinkIcon, Youtube, Image as ImageIcon, FileText, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function SubmitProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    tagline: "",
    description: "",
    videoUrl: "",
    imageUrl: "",
    websiteUrl: "",
    category: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("تم إرسال منتجك بنجاح! سنراجعه قريباً.");
    setFormData({
      productName: "",
      tagline: "",
      description: "",
      videoUrl: "",
      imageUrl: "",
      websiteUrl: "",
      category: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            قدّم منتجك
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            شارك منتجك مع مجتمع محور ص. املأ النموذج أدناه وسنقوم بمراجعة طلبك في أقرب وقت ممكن.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl border-2 border-border-light shadow-lg p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label
                htmlFor="productName"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <FileText className="w-5 h-5 text-primary" />
                اسم المنتج *
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                required
                value={formData.productName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="مثال: منصة لينقو إيه آي"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-2">
              <label
                htmlFor="tagline"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                الشعار (Tagline) *
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                required
                value={formData.tagline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="وصف قصير يلخص منتجك في سطر واحد"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <FileText className="w-5 h-5 text-primary" />
                الوصف *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="اشرح منتجك بالتفصيل، ما المشكلة التي يحلها؟ ومن هم المستخدمون المستهدفون؟"
              />
            </div>

            {/* Video URL */}
            <div className="space-y-2">
              <label
                htmlFor="videoUrl"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <Youtube className="w-5 h-5 text-primary" />
                رابط فيديو يوتيوب *
              </label>
              <input
                type="url"
                id="videoUrl"
                name="videoUrl"
                required
                value={formData.videoUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <p className="text-sm text-secondary/80">
                فيديو تعريفي بمنتجك (يفضل أن يكون بين 30 ثانية و 3 دقائق)
              </p>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label
                htmlFor="imageUrl"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <ImageIcon className="w-5 h-5 text-primary" />
                رابط صورة المنتج *
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                required
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="https://example.com/product-screenshot.png"
              />
              <p className="text-sm text-secondary/80">
                لقطة شاشة أو صورة توضح واجهة المنتج (نسبة 4:3 مفضلة)
              </p>
            </div>

            {/* Website URL */}
            <div className="space-y-2">
              <label
                htmlFor="websiteUrl"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <LinkIcon className="w-5 h-5 text-primary" />
                رابط الموقع *
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                required
                value={formData.websiteUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="https://yourproduct.com"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="flex items-center gap-2 text-base font-semibold text-foreground"
              >
                <FileText className="w-5 h-5 text-primary" />
                الفئة *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              >
                <option value="">اختر الفئة</option>
                <option value="ai">ذكاء اصطناعي</option>
                <option value="education">تعليم</option>
                <option value="productivity">إنتاجية</option>
                <option value="ecommerce">تجارة إلكترونية</option>
                <option value="health">صحة</option>
                <option value="fintech">تكنولوجيا مالية</option>
                <option value="social">وسائل التواصل</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            {/* Divider */}
            <div className="h-px bg-secondary/20 my-8" />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground font-semibold text-lg rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  جارٍ الإرسال...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  إرسال المنتج
                </>
              )}
            </button>

            {/* Info Text */}
            <p className="text-sm text-center text-secondary/80">
              بإرسال هذا النموذج، أنت توافق على{" "}
              <a href="/guidelines" className="text-primary hover:underline">
                إرشادات المجتمع
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
