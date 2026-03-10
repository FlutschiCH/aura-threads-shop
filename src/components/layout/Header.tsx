
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' }}
      transition={{ duration: 0.3 }}
    >
      
            <div className={`w-full max-w-7xl px-6 py-3 rounded-[2.5rem] flex items-center justify-between tracking-tight font-medium ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className={`font-bold tracking-tight text-xl ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
            Aura Threads
          </span>
        </div>

        
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/shop"
            className={`text-sm font-medium ${scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-zinc-200 hover:text-white'} transition-colors`}
          >
            Shop
          </NavLink>
          <NavLink
            to="/pricing"
            className={`text-sm font-medium ${scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-zinc-200 hover:text-white'} transition-colors`}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/about"
            className={`text-sm font-medium ${scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-zinc-200 hover:text-white'} transition-colors`}
          >
            About
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <NavLink to="/login">
            <Button
                            variant="outline"
              className={`hidden sm:flex ${scrolled ? 'text-zinc-700 hover:bg-zinc-100' : 'text-zinc-200 hover:bg-white/10'}`}
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/shop">
            <Button variant="primary">
              View Shop
            </Button>
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
};
