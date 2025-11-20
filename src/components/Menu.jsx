import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  { name: '24k Latte', desc: 'Velvety latte finished with edible gold dust', price: '$5.50' },
  { name: 'Midnight Espresso', desc: 'Double shot, deep crema, black as night', price: '$3.50' },
  { name: 'Gilded Cold Brew', desc: 'Slow-steeped, smooth, citrus notes', price: '$4.75' },
  { name: 'Aurora Cappuccino', desc: 'Silky foam, cocoa, caramel swirl', price: '$4.95' },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.10),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300">Signature Menu</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">Carefully curated beverages blending specialty beans and precision brewing.</p>
          </div>
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400/20" />
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-yellow-200">{item.name}</h3>
                <span className="text-yellow-400 font-medium">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
