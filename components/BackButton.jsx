"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


export default function BackButton({ href }) {
    
    const [isVisible, setIsVisible] = useState(false);
    
     useEffect(() => {
       const toggleVisibility = () => {
         if (window.scrollY > 300) {
           setIsVisible(true);
         } else {
           setIsVisible(false);
         }
       };
    
       window.addEventListener("scroll", toggleVisibility);
       return () => window.removeEventListener("scroll", toggleVisibility);
     }, []);
    
     const scrollToTop = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     };
  const router = useRouter();

  const handleBack = () => {
    if (href) return; 
    router.back();
  };

  const content = (
    <Button
      variant="outline"
      size="icon"
      onClick={handleBack}
      className="rounded-full shadow-lg bg-background hover:bg-accent hover:text-accent-foreground"
      aria-label="Go back"
    >
      <ChevronLeft className="h-5 w-5" />
    </Button>
  );

  return (
    <div
          className={cn(
        "fixed bottom-17 right-8 z-50 transition-all duration-300 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      {href ? (
        <Link href={href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}