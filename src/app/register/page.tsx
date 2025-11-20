"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function RegisterPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isPending && session?.user) {
      router.push("/");
    }
  }, [session, isPending, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("كلمات المرور غير متطابقة");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("يجب أن تكون كلمة المرور 8 أحرف على الأقل");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      });

      if (error?.code) {
        const errorMessages: Record<string, string> = {
          USER_ALREADY_EXISTS: "البريد الإلكتروني مسجل مسبقاً",
        };
        toast.error(errorMessages[error.code] || "فشل إنشاء الحساب");
        setIsLoading(false);
        return;
      }

      toast.success("تم إنشاء الحساب بنجاح!");
      router.push("/login?registered=true");
    } catch (error) {
      toast.error("حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.");
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (session?.user) return null;

  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-lg">
            <h1 className="mb-2 text-center text-3xl font-bold text-foreground">
              إنشاء حساب جديد
            </h1>
            <p className="mb-8 text-center text-sm text-secondary">
              انضم إلى مجتمع عين على سوريا
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  الاسم الكامل
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border-2 border-secondary bg-input px-4 py-3 text-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="أحمد محمد"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border-2 border-secondary bg-input px-4 py-3 text-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="off"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full rounded-lg border-2 border-secondary bg-input px-4 py-3 text-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-secondary">
                  يجب أن تكون 8 أحرف على الأقل
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-foreground">
                  تأكيد كلمة المرور
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  autoComplete="off"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full rounded-lg border-2 border-secondary bg-input px-4 py-3 text-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary">
                لديك حساب بالفعل؟{" "}
                <Link
                  href="/login"
                  className="font-semibold text-primary hover:text-accent hover:underline"
                >
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}