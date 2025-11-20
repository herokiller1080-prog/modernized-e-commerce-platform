"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { House, Upload, Info, FileText, Mail, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/home", text: "الرئيسية", icon: House },
  { href: "/submitproductpublic", text: "قدّم منتجك", icon: Upload },
  { href: "/aboutus", text: "من نحن", icon: Info },
  { href: "/communityguidelines", text: "إرشادات المجتمع", icon: FileText },
  { href: "/contactus", text: "تواصل معنا", icon: Mail },
];

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const menuVariants = {
  open: { x: "0%" },
  closed: { x: "100%" },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] font-body"
          dir="rtl"
        >
          <motion.div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
          />

          <motion.div
            className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-background shadow-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) {
                onClose();
              }
            }}
          >
            <div className="absolute inset-0 bg-foreground/5 pointer-events-none -z-10" />

            <header className="flex items-center justify-between p-4 border-b border-[rgba(152,133,97,0.3)]">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="إغلاق القائمة"
              >
                <X className="h-6 w-6 text-foreground" />
              </Button>
              <div className="font-display text-2xl font-bold text-foreground">
                عين على سوريا
              </div>
              <div className="w-10" aria-hidden="true" />
            </header>

            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ href, text, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className="flex w-full items-center justify-end gap-4 rounded-md p-4 text-right text-lg font-semibold text-foreground transition-colors min-h-[56px] hover:bg-secondary/15 active:bg-primary/10"
                    >
                      <span>{text}</span>
                      <Icon className="h-6 w-6 text-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}