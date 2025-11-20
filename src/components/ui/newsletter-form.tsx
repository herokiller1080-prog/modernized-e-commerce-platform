"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Loader2, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// This is a mock function to simulate an API call.
// In a real application, you would replace this with your actual API call logic.
const subscribeToNewsletter = async (email: string) => {
  console.log(`Subscribing ${email} to the newsletter...`);
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate a potential error
  if (email.includes("error@")) {
    throw new Error("This email address is blocked.");
  }

  // Simulate success
  return { success: true };
};

export default function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    setErrorMessage("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setErrorMessage("الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }

    setStatus("loading");

    try {
      await subscribeToNewsletter(email);
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("حدث خطأ ما. الرجاء المحاولة مرة أخرى.");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status !== "idle" && status !== "loading") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const Icon = () => {
    const iconProps = {
      className: "h-4 w-4 lg:h-5 lg:w-5 transition-all",
    };
    switch (status) {
      case "loading":
        return <Loader2 {...iconProps} className={`${iconProps.className} animate-spin text-primary`} />;
      case "success":
        return <Check {...iconProps} className={`${iconProps.className} text-primary`} />;
      case "error":
        return <AlertCircle {...iconProps} className={`${iconProps.className} text-destructive`} />;
      default:
        return <Mail {...iconProps} className={`${iconProps.className} text-secondary group-hover:text-primary`} />;
    }
  };

  return (
    <div className={cn("font-body", className)}>
      <form onSubmit={handleSubmit} className="relative group">
        <input
          dir="rtl"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="بريدك الإلكتروني..."
          aria-label="البريد الإلكتروني للنشرة الإخبارية"
          required
          disabled={status === "loading" || status === "success"}
          className={cn(
            "w-40 sm:w-64 lg:w-96 text-sm lg:text-base",
            "py-2 px-3 pl-10",
            "bg-input text-foreground font-body",
            "border border-secondary rounded-sm",
            "placeholder:text-secondary/60",
            "transition-colors duration-200 ease-in-out",
            "hover:border-primary",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-background focus:border-primary",
            "disabled:opacity-70 disabled:cursor-not-allowed",
            {
              "border-destructive focus:border-destructive focus:ring-destructive": status === "error",
              "border-primary": status === "success",
            }
          )}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          aria-label="الاشتراك في النشرة البريدية"
          className="absolute left-0 top-0 h-full px-3 flex items-center justify-center disabled:cursor-not-allowed"
        >
          <Icon />
        </button>
      </form>
      {errorMessage && (
        <p dir="rtl" className="mt-2 text-right text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}