'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative w-12 h-12 rounded-2xl bg-background/5 border border-white/10 flex items-center justify-center hover:bg-[#E14D4D] hover:text-foreground transition-all overflow-hidden"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 transition-transform duration-500 ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
        <Moon className={`absolute inset-0 transition-transform duration-500 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      </div>
    </motion.button>
  );
}
