import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_center,rgba(255,36,36,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/30 p-8 sm:p-12 shadow-[0_0_60px_-15px_rgba(255,36,36,0.4)]">
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to boost your gameplay?</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Download the CPS Network loader and join our community for instant access to premium scripts and updates.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-red-600/90 hover:bg-red-600 text-white px-5 py-3 text-sm font-semibold ring-1 ring-red-500/40 shadow-[0_0_24px_-6px_rgba(255,36,36,0.7)] transition"
              >
                <Rocket className="h-4 w-4" />
                Download Loader
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white/90 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 transition"
              >
                View Docs
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Roblox is a trademark of Roblox Corporation. CPS Network is not affiliated with or endorsed by Roblox.
        </p>
      </div>
    </section>
  );
}
