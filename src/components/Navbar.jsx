import React from 'react';
import { Rocket, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 grid place-content-center">
              <div className="absolute inset-0 rounded-lg bg-red-600/30 blur-md" />
              <Rocket className="relative h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors" />
            </div>
            <span className="font-semibold tracking-tight text-white">CPS Network</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
            <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-3 py-1.5 rounded-md text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600/20 hover:bg-red-600/30 text-red-300 hover:text-red-200 ring-1 ring-inset ring-red-500/30 shadow-[0_0_20px_-2px_rgba(255,36,36,0.45)] transition"
            >
              <Shield className="h-4 w-4" />
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
