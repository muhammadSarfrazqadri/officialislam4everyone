import React from "react";

// Reusable Animated Button Component
const AnimatedButton = ({ children, variant = "primary" }) => {
  const base =
    "relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50",

    gradient:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105",

    outline:
      "border-border bg-primary border-foreground text-foreground dark:text-foreground hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out hover:shadow-md rounded-none",

    neon:
      "text-green-400 border border-green-400 hover:shadow-[0_0_15px_#22c55e] hover:bg-green-500/10",

    glass:
      "bg-white/10 backdrop-blur-md text-gray-900 dark:text-white border border-white/20 hover:bg-white/20",

    glow:
      "bg-black text-white dark:bg-white dark:text-black hover:shadow-[0_0_20px_#fff] dark:hover:shadow-[0_0_20px_#000]",

    rainbow:
      "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white hover:animate-pulse",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-white/10"></span>
    </button>
  );
};

// Demo Page (use anywhere in your site)
// export default function ButtonShowcase() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
//         Animated Buttons UI
//       </h1>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         <AnimatedButton variant="primary">Primary</AnimatedButton>
//         <AnimatedButton variant="gradient">Gradient</AnimatedButton>
//         <AnimatedButton variant="outline">Outline</AnimatedButton>
//         <AnimatedButton variant="neon">Neon</AnimatedButton>
//         <AnimatedButton variant="glass">Glass</AnimatedButton>
//         <AnimatedButton variant="glow">Glow</AnimatedButton>
//         <AnimatedButton variant="rainbow">Rainbow</AnimatedButton>
//       </div>
//     </div>
//   );
// }

export default AnimatedButton;
// Optional: Tailwind Dark Mode Setup
// In tailwind.config.js:
// darkMode: 'class'

// Then toggle by adding 'dark' class to <html> or <body>
