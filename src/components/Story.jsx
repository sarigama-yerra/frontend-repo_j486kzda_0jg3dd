import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="story" className="relative bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-yellow-500/20 p-8 bg-gradient-to-br from-zinc-900 to-black"
        >
          <h3 className="text-2xl font-bold text-yellow-300">Our Story</h3>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Born from a love of specialty coffee and modern design, Auric Coffee blends craftsmanship with cutting-edge robotics. Every pour is measured, every texture refined, every cup a golden moment.
          </p>
          <p className="mt-3 text-zinc-400">
            We partner with responsible farms and roast in small batches to preserve distinct terroir. Step into an atmosphere of black marble, warm gold accents, and ambient synths.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-yellow-500/20"
        >
          <div className="aspect-video bg-[conic-gradient(at_top_left,_rgba(234,179,8,0.15),_transparent_30%)] grid place-items-center">
            <div className="w-40 h-40 rounded-full border border-yellow-500/30 bg-yellow-500/10 blur-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
