import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black">
      {/* Gold glow gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.12),transparent_40%)]" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
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
            Experience a futuristic coffee bar where robotics meet artisanal roasts. Smooth, bold, and distinctly golden.
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
