"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, isPending } = useSession();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isPending && session?.user) {
      router.push("/");
    }
    
    if (searchParams.get("registered") === "true") {
      toast.success("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
    }
  }, [session, isPending, router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
        callbackURL: searchParams.get("redirect") || "/",
      });

      if (error?.code) {
        toast.error("البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى التأكد من إنشاء حساب والمحاولة مرة أخرى.");
        setIsLoading(false);
        return;
      }

      toast.success("تم تسجيل الدخول بنجاح!");
      const redirectUrl = searchParams.get("redirect") || "/";
      router.push(redirectUrl);
    } catch (error) {
      toast.error("حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.");
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
              تسجيل الدخول
            </h1>
            <p className="mb-8 text-center text-sm text-secondary">
              أهلاً بك مرة أخرى في عين على سوريا
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="h-4 w-4 rounded border-secondary text-primary focus:ring-2 focus:ring-ring"
                />
                <label htmlFor="remember" className="mr-2 text-sm text-foreground">
                  تذكرني
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary">
                ليس لديك حساب؟{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary hover:text-accent hover:underline"
                >
                  إنشاء حساب جديد
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