import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 18; // left/right
    const rotateX = (0.5 - py) * 12; // up/down
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black">
      {/* Gold glow gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.12),transparent_40%)]" />

      {/* 3D Coffee Cup Scene */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 0, rotateY: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{ duration: 0.9, ease: 'easeOut', y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } }}
          whileHover={{ scale: 1.02 }}
          style={{ transformStyle: 'preserve-3d', rotateX: tilt.x, rotateY: tilt.y }}
          aria-hidden
          className="relative"
        >
          {/* Soft halo behind cup */}
          <div className="absolute -inset-24 rounded-full bg-yellow-500/10 blur-3xl" style={{ transform: 'translateZ(-60px)' }} />

          {/* Ground shadow */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-[68%] w-[420px] h-[60px] rounded-full"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 70%, transparent 80%)', filter: 'blur(8px)', transform: 'translateZ(-40px)' }}
            animate={{ opacity: [0.55, 0.35, 0.55] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Coffee Cup (pseudo-3D with shading) */}
          <svg width="560" height="520" viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_40px_rgba(234,179,8,0.14)]" style={{ transform: 'translateZ(40px)' }}>
            <defs>
              <radialGradient id="rimGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280 160) rotate(90) scale(40 140)">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="cupBody" x1="120" y1="240" x2="440" y2="360">
                <stop offset="0%" stopColor="#111111" />
                <stop offset="50%" stopColor="#0b0b0b" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="goldEdge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="coffeeSurface" x1="160" y1="150" x2="400" y2="190">
                <stop offset="0%" stopColor="#4b352d" />
                <stop offset="100%" stopColor="#2a1f1f" />
              </linearGradient>
            </defs>

            {/* Saucer (3D ring) */}
            <ellipse cx="280" cy="380" rx="190" ry="34" fill="url(#goldEdge)" fillOpacity="0.12" />
            <ellipse cx="280" cy="380" rx="140" ry="22" fill="#0b0b0b" stroke="#EAB308" strokeOpacity="0.25" />

            {/* Cup body */}
            <path d="M150 200h260c8 0 14 6 14 14v100c0 70-58 128-128 128h-32c-70 0-128-58-128-128V214c0-8 6-14 14-14z" fill="url(#cupBody)" stroke="#EAB308" strokeOpacity="0.55" strokeWidth="2" />

            {/* Vertical sheen for 3D effect */}
            <path d="M186 210c-14 0-26 66-26 104s10 68 26 68c30 0 54-77 54-172-20 0-40 0-54 0z" fill="#ffffff" fillOpacity="0.04" />

            {/* Coffee surface (top ellipse) */}
            <ellipse cx="280" cy="200" rx="130" ry="28" fill="url(#coffeeSurface)" />
            <ellipse cx="280" cy="200" rx="130" ry="28" stroke="#FDE68A" strokeOpacity="0.4" />
            <ellipse cx="280" cy="200" rx="120" ry="20" fill="url(#rimGlow)" />

            {/* Handle with inner shadow */}
            <path d="M426 252c50 0 88 32 88 72s-38 72-88 72c-9 0-16-7-16-16s7-16 16-16c32 0 56-20 56-40s-24-40-56-40c-9 0-16-7-16-16s7-16 16-16z" fill="#0a0a0a" stroke="#EAB308" strokeOpacity="0.55" strokeWidth="2" />

            {/* Steam (animated by overlayed motion paths using foreignObject wrapper) */}
          </svg>

          {/* Animated Steam Wisps */}
          <svg width="560" height="240" viewBox="0 0 560 240" className="absolute left-1/2 top-[6%] -translate-x-1/2" style={{ pointerEvents: 'none', transform: 'translateZ(50px)' }}>
            <motion.path d="M240 160c-12-22 12-26 6-42-6-16-30-18-20-42 8-18 30-22 40-42" stroke="#FDE68A" strokeOpacity="0.95" strokeWidth="3" strokeLinecap="round" fill="none" initial={{ opacity: 0, pathLength: 0, y: 10 }} animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-8, -20] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.path d="M280 160c-10-20 10-24 5-38-5-14-24-16-16-36 6-16 26-18 32-34" stroke="#FACC15" strokeOpacity="0.95" strokeWidth="3" strokeLinecap="round" fill="none" initial={{ opacity: 0, pathLength: 0, y: 10 }} animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-10, -22] }} transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }} />
            <motion.path d="M320 160c-10-18 10-22 5-34-5-12-22-14-14-30 6-14 24-16 28-30" stroke="#EAB308" strokeOpacity="0.95" strokeWidth="3" strokeLinecap="round" fill="none" initial={{ opacity: 0, pathLength: 0, y: 10 }} animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-12, -24] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
          </svg>

          {/* Coffee-related floating elements */}
          <FloatingBeans />
          <Sparkles />
        </motion.div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-[12px] tracking-wider uppercase bg-yellow-400/10 text-yellow-300 border border-yellow-500/20"
          >
            Black & Gold Specialty
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-b from-yellow-200 to-yellow-500 text-transparent bg-clip-text drop-shadow"
          >
            Coffee, Crafted with Auric Precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-zinc-300 text-lg max-w-xl"
          >
            Experience a futuristic coffee bar where warmth meets innovation. Smooth, bold, and distinctly golden.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold shadow-[0_0_0_1px_rgba(234,179,8,0.25)] hover:shadow-yellow-500/30 transition-shadow"
            >
              Explore Menu
            </a>
            <a
              href="#visit"
              className="px-5 py-3 rounded-full border border-yellow-500/30 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              Book a Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingBeans() {
  const beans = [
    { x: '-28%', y: '12%', delay: 0 },
    { x: '32%', y: '0%', delay: 0.4 },
    { x: '18%', y: '26%', delay: 0.8 },
    { x: '-8%', y: '30%', delay: 1.2 },
  ];
  return (
    <>
      {beans.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `calc(50% + ${b.x})`, top: `calc(40% + ${b.y})`, transform: 'translateZ(30px)' }}
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        >
          <BeanSVG size={i % 2 === 0 ? 24 : 18} />
        </motion.div>
      ))}
    </>
  );
}

function BeanSVG({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b4e3d" />
          <stop offset="100%" stopColor="#3b2a22" />
        </linearGradient>
      </defs>
      <path d="M8 3c4-2 9 1 10 5s-2 8-6 9-7-1-8-5 0-7 4-9z" fill="url(#bean)" />
      <path d="M9 4c2 3 0 7-2 9" stroke="#1f1511" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 4c2 3 0 7-2 9" stroke="#2d1f1a" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Sparkles() {
  const dots = Array.from({ length: 10 }).map((_, i) => ({
    left: `${40 + Math.random() * 20}%`,
    delay: Math.random() * 2,
    size: 2 + Math.random() * 3,
  }));
  return (
    <>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-yellow-400"
          style={{ left: d.left, top: '32%', width: d.size, height: d.size, boxShadow: '0 0 12px rgba(234,179,8,0.6)', transform: 'translateZ(80px)' }}
          animate={{ y: [-8, -28], opacity: [0, 1, 0] }}
          transition={{ duration: 2.8 + (i % 3) * 0.4, repeat: Infinity, ease: 'easeOut', delay: d.delay }}
        />
      ))}
    </>
  );
}
