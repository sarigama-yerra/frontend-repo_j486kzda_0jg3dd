import { motion } from 'framer-motion';
// Optional: Spline can still be used later by providing a scene URL
// import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black">
      {/* Gold glow gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.12),transparent_40%)]" />

      {/* Centerpiece: Animated Coffee Cup with Steam */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
          aria-hidden
        >
          {/* Soft halo behind cup */}
          <div className="absolute -inset-24 rounded-full bg-yellow-500/5 blur-3xl" />

          {/* Coffee Cup SVG */}
          <svg
            width="520"
            height="420"
            viewBox="0 0 520 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_30px_rgba(234,179,8,0.15)]"
          >
            {/* Saucer */}
            <ellipse cx="240" cy="340" rx="170" ry="28" fill="url(#goldGrad)" fillOpacity="0.18" />

            {/* Cup body */}
            <motion.path
              d="M120 160h200c6 0 10 4 10 10v80c0 55-45 100-100 100h-20c-55 0-100-45-100-100v-80c0-6 4-10 10-10z"
              fill="#0a0a0a"
              stroke="#EAB308"
              strokeOpacity="0.6"
              strokeWidth="2"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />

            {/* Coffee surface */}
            <motion.ellipse
              cx="220"
              cy="170"
              rx="100"
              ry="20"
              fill="url(#coffeeGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Cup rim highlight */}
            <ellipse cx="220" cy="170" rx="100" ry="20" stroke="#FDE68A" strokeOpacity="0.5" />

            {/* Handle */}
            <motion.path
              d="M330 210c38 0 68 24 68 54s-30 54-68 54c-6 0-11-5-11-11s5-11 11-11c24 0 43-14 43-32s-19-32-43-32c-6 0-11-5-11-11s5-11 11-11z"
              fill="#0a0a0a"
              stroke="#EAB308"
              strokeOpacity="0.6"
              strokeWidth="2"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />

            {/* Rising steam - three animated wisps */}
            <motion.path
              d="M190 140c-10-18 10-22 5-36-5-14-26-16-18-36 6-16 26-18 34-34"
              stroke="#FDE68A"
              strokeOpacity="0.85"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0, pathLength: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-6, -16] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M220 140c-8-16 8-20 4-32-4-12-20-14-14-30 5-14 22-16 28-30"
              stroke="#FACC15"
              strokeOpacity="0.9"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0, pathLength: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-8, -18] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />
            <motion.path
              d="M250 140c-8-14 8-18 4-28-4-10-18-12-12-26 4-12 20-14 24-26"
              stroke="#EAB308"
              strokeOpacity="0.9"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0, pathLength: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], pathLength: [0, 1], y: [-10, -22] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            />

            {/* Definitions */}
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="coffeeGrad" x1="120" y1="150" x2="320" y2="190">
                <stop offset="0%" stopColor="#3b2f2f" />
                <stop offset="100%" stopColor="#2a1f1f" />
              </linearGradient>
            </defs>
          </svg>
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
