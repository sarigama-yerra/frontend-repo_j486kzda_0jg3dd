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

      {/* 3D Coffee Bean Scene */}
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
          whileHover={{ scale: 1.03 }}
          style={{ transformStyle: 'preserve-3d', rotateX: tilt.x, rotateY: tilt.y }}
          aria-hidden
          className="relative"
        >
          {/* Soft halo behind bean */}
          <div className="absolute -inset-24 rounded-full bg-yellow-500/10 blur-3xl" style={{ transform: 'translateZ(-60px)' }} />

          {/* Ground shadow */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-[68%] w-[420px] h-[60px] rounded-full"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 70%, transparent 80%)', filter: 'blur(8px)', transform: 'translateZ(-40px)' }}
            animate={{ opacity: [0.55, 0.35, 0.55] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Central 3D Coffee Bean */}
          <svg
            width="560"
            height="520"
            viewBox="0 0 560 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_40px_rgba(234,179,8,0.14)]"
            style={{ transform: 'translateZ(40px)' }}
          >
            <defs>
              <linearGradient id="beanSkin" x1="120" y1="140" x2="440" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6b4e3d" />
                <stop offset="45%" stopColor="#3f2c22" />
                <stop offset="100%" stopColor="#2a1f1a" />
              </linearGradient>
              <radialGradient id="spec" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 210) rotate(20) scale(120 180)">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="goldEdge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            {/* Outer bean silhouette with subtle gold rim */}
            <path
              d="M170 150c60-48 160-48 220 0 60 48 60 172 0 220s-160 48-220 0-60-172 0-220z"
              fill="url(#beanSkin)"
              stroke="url(#goldEdge)"
              strokeOpacity="0.5"
              strokeWidth="2"
            />

            {/* Crease (center seam) */}
            <path
              d="M270 150c-24 40-28 78-28 112 0 40 10 78 30 112"
              stroke="#1f1511"
              strokeOpacity="0.7"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M290 150c-24 40-28 78-28 112 0 40 10 78 30 112"
              stroke="#2b1d18"
              strokeOpacity="0.9"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Specular highlight */}
            <ellipse cx="230" cy="210" rx="90" ry="60" fill="url(#spec)" />

            {/* Tiny gold glints on edges */}
            <circle cx="210" cy="168" r="3" fill="#FDE68A" fillOpacity="0.8" />
            <circle cx="396" cy="336" r="2" fill="#FDE68A" fillOpacity="0.9" />
          </svg>

          {/* Orbiting ring with mini beans */}
          <OrbitingRing />

          {/* Ambient details */}
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

function OrbitingRing() {
  return (
    <div className="absolute left-1/2 top-[38%] -translate-x-1/2" style={{ transform: 'translateZ(20px)' }}>
      <motion.div
        className="relative w-[520px] h-[520px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      >
        {/* subtle ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-yellow-500/10" />
        {/* mini beans along the ring */}
        <RingBean angle={0} />
        <RingBean angle={72} />
        <RingBean angle={144} />
        <RingBean angle={216} />
        <RingBean angle={288} />
      </motion.div>
    </div>
  );
}

function RingBean({ angle = 0 }) {
  const radius = 230;
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius * 0.6; // slight ellipse for perspective
  return (
    <div
      className="absolute"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: `translate(-50%, -50%)` }}
    >
      <BeanSVG size={20} />
    </div>
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
