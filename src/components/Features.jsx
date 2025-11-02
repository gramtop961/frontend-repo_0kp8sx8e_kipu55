import React from 'react';
import { Zap, Shield, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Undetected & Safe',
    desc: 'Advanced obfuscation and frequent patches keep your account protected.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Blazing Performance',
    desc: 'Optimized execution with minimal overhead and smart resource usage.',
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: 'Clean API',
    desc: 'Modern Lua patterns and typed helpers for maintainable scripts.',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Auto Updates',
    desc: 'New features and fixes ship continuously without manual downloads.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_circle_at_center,rgba(255,36,36,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Built for power users
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            A sleek, premium experience with neon-red accents and fluid animations throughout.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-9 w-9 place-content-center rounded-md bg-red-600/20 ring-1 ring-red-500/30 text-red-300 shadow-[0_0_20px_-4px_rgba(255,36,36,0.6)]">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
