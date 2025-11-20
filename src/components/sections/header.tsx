"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X, ArrowLeft, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/submit", label: "قدّم منتجك" },
  { href: "/about", label: "من نحن" },
  { href: "/guidelines", label: "إرشادات المجتمع" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => setProgress(75), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token");
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    
    if (error?.code) {
      toast.error("فشل تسجيل الخروج");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      toast.success("تم تسجيل الخروج بنجاح");
      router.push("/");
    }
    setIsUserMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 font-sans transition-shadow duration-300 ${
        isScrolled ? "shadow-lg shadow-shadow" : ""
      }`}
    >
      <div 
        className={`absolute inset-0 transition-colors duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-background"
        }`}
      />
      
      <div className="relative">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-6">
              <Link href="/" className="group flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8272c138-5ae4-4fe1-9428-dc5f5bafab24/generated_images/simple-logo-icon-featuring-the-arabic-le-65337ae7-20251119093513.jpg"
                  alt="عين على سوريا لوقو"
                  width={44}
                  height={44}
                  className="h-10 w-10 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                />
              </Link>
              <nav className="hidden items-center gap-2 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <form className="hidden sm:block">
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary" />
                  <input
                    type="email"
                    placeholder="اشترك في النشرة البريدية"
                    className="w-40 rounded-lg border-2 border-secondary bg-transparent py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-secondary focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring lg:w-96"
                  />
                </div>
              </form>

              {!isPending && (
                <>
                  {session?.user ? (
                    <div className="relative hidden lg:block">
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-2 rounded-lg border-2 border-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/20"
                      >
                        <User className="h-4 w-4" />
                        <span>{session.user.name}</span>
                      </button>
                      
                      {isUserMenuOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsUserMenuOpen(false)}
                          />
                          <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border-2 border-border bg-card p-2 shadow-lg">
                            <div className="border-b border-border px-3 py-2">
                              <p className="text-sm font-medium text-foreground">{session.user.name}</p>
                              <p className="text-xs text-secondary">{session.user.email}</p>
                            </div>
                            <button
                              onClick={handleSignOut}
                              className="mt-2 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary/20"
                            >
                              <LogOut className="h-4 w-4" />
                              <span>تسجيل الخروج</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="hidden items-center gap-2 lg:flex">
                      <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-lg border-2 border-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/20"
                      >
                        <LogIn className="h-4 w-4" />
                        <span>تسجيل الدخول</span>
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                      >
                        <UserPlus className="h-4 w-4" />
                        <span>إنشاء حساب</span>
                      </Link>
                    </div>
                  )}
                </>
              )}

              <button
                aria-label="Toggle menu"
                className="p-2 text-foreground lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full rounded-lg px-4 py-3 text-center text-base font-medium text-foreground transition-colors hover:bg-secondary/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="my-2 border-t border-border" />
              
              {!isPending && (
                <>
                  {session?.user ? (
                    <>
                      <div className="rounded-lg bg-secondary/10 px-4 py-3 text-center">
                        <p className="text-sm font-medium text-foreground">{session.user.name}</p>
                        <p className="text-xs text-secondary">{session.user.email}</p>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary/20"
                      >
                        <LogOut className="h-5 w-5" />
                        <span>تسجيل الخروج</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 rounded-lg border-2 border-secondary px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary/20"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <LogIn className="h-5 w-5" />
                        <span>تسجيل الدخول</span>
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-accent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <UserPlus className="h-5 w-5" />
                        <span>إنشاء حساب</span>
                      </Link>
                    </>
                  )}
                </>
              )}
            </nav>
          </div>
        )}

        <div className="bg-gradient-to-l from-[#4a151e] to-[#002623] text-primary-foreground">
          <div className="relative mx-auto max-w-[1400px] px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-center font-bold">
              <span>⏰ 3 أيام على الدفعة القادمة</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20">
              <div
                className="h-full bg-white transition-all duration-[2000ms] ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <ArrowLeft className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-white/50" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;