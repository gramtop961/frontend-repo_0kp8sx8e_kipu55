import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette and gradient accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(255,36,36,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_80%,rgba(255,36,36,0.12),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_2px_rgba(255,36,36,0.8)]" />
            Real-time, optimized and secure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            CPS Network
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 drop-shadow-[0_0_24px_rgba(255,36,36,0.35)]">
              Roblox Script Hub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
          >
            Access premium, undetected scripts with blazing performance, automatic updates, and a sleek UI designed for pros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-red-600/90 hover:bg-red-600 text-white px-5 py-3 text-sm font-semibold shadow-[0_0_24px_-6px_rgba(255,36,36,0.7)] ring-1 ring-red-500/40 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white/90 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 transition"
            >
              Join Discord
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
