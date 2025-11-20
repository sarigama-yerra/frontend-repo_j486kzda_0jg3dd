import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Visit() {
  return (
    <section id="visit" className="relative bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(234,179,8,0.10),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-yellow-500/20 p-8 bg-zinc-900/60"
          >
            <h3 className="text-2xl font-bold text-yellow-300">Visit Us</h3>
            <p className="mt-2 text-zinc-300">Open daily • 7am – 8pm</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 text-zinc-300">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p>123 Aurum Ave</p>
                  <p>Golden City, GC 90001</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-zinc-300">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p>(555) 012-3456</p>
                  <p className="text-zinc-400">Call ahead for group seating</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl border border-yellow-500/20 p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-400/5"
          >
            <h4 className="text-lg font-semibold text-yellow-200">Loyalty Perks</h4>
            <p className="mt-2 text-zinc-300">Collect points with every purchase and unlock exclusive gold-tier rewards.</p>
            <a href="#" className="inline-block mt-4 px-4 py-2 rounded-full border border-yellow-500/30 text-yellow-300 hover:bg-yellow-400/10 transition-colors">Join Now</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
