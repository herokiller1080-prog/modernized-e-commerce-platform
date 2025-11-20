"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SubmitProductForm from '@/components/sections/submit-product-form';

export default function SubmitPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?redirect=${encodeURIComponent('/submit')}`);
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Header />
      <main className="w-full">
        <SubmitProductForm />
      </main>
      <Footer />
    </div>
  );
}