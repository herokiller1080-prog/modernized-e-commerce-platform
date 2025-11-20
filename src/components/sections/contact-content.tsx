"use client";

import { Mail, MessageSquare, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
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

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            لديك سؤال أو اقتراح؟ نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    البريد الإلكتروني
                  </h3>
                  <a
                    href="mailto:hello@mihwarsaad.sa"
                    className="text-primary hover:underline text-sm"
                  >
                    hello@mihwarsaad.sa
                  </a>
                  <p className="text-xs text-secondary mt-2">
                    سنرد خلال 24-48 ساعة
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-card rounded-xl border-2 border-border-light shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    وسائل التواصل
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    تابعنا على منصات التواصل الاجتماعي
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-primary hover:underline text-sm"
                    >
                      تويتر (X)
                    </a>
                    <a
                      href="#"
                      className="block text-primary hover:underline text-sm"
                    >
                      لينكد إن
                    </a>
                    <a
                      href="#"
                      className="block text-primary hover:underline text-sm"
                    >
                      إنستغرام
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border-2 border-border-light p-6">
              <h3 className="text-base font-bold text-foreground mb-2">
                أوقات الرد
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                نحن نعمل على الرد على جميع الاستفسارات خلال يوم عمل واحد. في حالة الاستفسارات المعقدة، قد نحتاج وقتاً إضافياً.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border-2 border-border-light shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                أرسل لنا رسالة
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground"
                  >
                    الاسم *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground"
                  >
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="example@domain.com"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-foreground"
                  >
                    الموضوع *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="general">استفسار عام</option>
                    <option value="product">استفسار عن منتج</option>
                    <option value="technical">مشكلة تقنية</option>
                    <option value="partnership">شراكة أو تعاون</option>
                    <option value="feedback">اقتراح أو ملاحظة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground"
                  >
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-secondary/30 rounded-xl text-foreground placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

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
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-secondary/80">
                  بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
