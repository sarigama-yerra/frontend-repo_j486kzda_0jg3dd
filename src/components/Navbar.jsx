import { Menu, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-yellow-400"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-500/20">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-wide text-yellow-300">Auric Coffee</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Menu", href: "#menu" },
              { label: "Story", href: "#story" },
              { label: "Visit", href: "#visit" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#visit"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium shadow-[0_0_0_1px_rgba(234,179,8,0.25)] hover:shadow-yellow-500/30 transition-shadow"
            >
              Order Ahead
            </a>
          </nav>

          <button className="md:hidden p-2 text-zinc-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
