"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { palettes } from "@/data/colors";
import ScrollReveal from "@/components/ScrollReveal";

const rooms = [
  {
    id: "living",
    name: "Living Room",
    bg: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    overlay: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 100%)",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    bg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    overlay: "radial-gradient(circle at 40% 30%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 100%)",
  },
  {
    id: "exterior",
    name: "Exterior Facade",
    bg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    overlay: "radial-gradient(circle at 50% 60%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
  },
  {
    id: "commercial",
    name: "Commercial Space",
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    overlay: "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 100%)",
  },
];

export default function ColorVisualizer() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedColor, setSelectedColor] = useState(palettes[0]);

  return (
    <div className="-mt-20">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-deep-forest">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3318] via-deep-forest to-[#1D8A35]/30"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-20 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Interactive Tool
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            Colour <span className="text-primary-fixed">Visualizer</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="origin-left w-full max-w-lg h-[1px] bg-white/30 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-sm md:text-base text-white/70 max-w-md leading-relaxed"
          >
            Select a room scene, then tap any colour swatch to see how it transforms the space.
          </motion.p>
        </div>
      </section>

      {/* Main Visualizer */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Room Preview */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-deep-forest aspect-[4/3]">
                <img src={selectedRoom.bg} alt={selectedRoom.name} className="w-full h-full object-cover absolute inset-0" />
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{
                    backgroundColor: selectedColor.hex,
                    mixBlendMode: "multiply",
                    opacity: 0.55,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: selectedRoom.overlay }}
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg">
                    <p className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-[10px]">Selected Color</p>
                    <p className="font-display-lg text-title-lg text-deep-forest">{selectedColor.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: selectedColor.hex }}></span>
                      <span className="font-label-md text-on-surface-variant/50 uppercase text-[10px]">{selectedColor.hex}</span>
                      <span className="font-label-md text-on-surface-variant/50 uppercase text-[10px]">{selectedColor.finish}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Selector */}
              <div className="flex flex-wrap gap-3 mt-6">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer ${
                      selectedRoom.id === room.id
                        ? "bg-leaf-green text-white shadow-md"
                        : "bg-white border border-outline/20 text-on-surface-variant hover:border-leaf-green"
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Palette */}
            <div className="lg:col-span-2">
              <h3 className="font-display-lg text-title-lg text-deep-forest mb-6">Signature Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {palettes.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedColor(p)}
                    className={`group text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedColor.name === p.name
                        ? "border-leaf-green bg-white shadow-lg"
                        : "border-transparent bg-white hover:border-outline/30 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-full aspect-square rounded-lg mb-3 shadow-inner transition-transform group-hover:scale-105 ${p.color}`}
                    ></div>
                    <p className="font-bold text-sm text-deep-forest">{p.name}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-60">{p.finish}</p>
                    <p className="text-[10px] font-mono text-on-surface-variant/40 mt-0.5">{p.hex}</p>
                  </button>
                ))}
                <button className="group text-left p-4 rounded-xl border-2 border-dashed border-outline/30 bg-white/40 hover:border-leaf-green transition-all cursor-pointer">
                  <div className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center bg-surface-container">
                    <span className="material-symbols-outlined text-on-surface-variant/40">add</span>
                  </div>
                  <p className="font-bold text-sm text-on-surface-variant/60">Custom Mix</p>
                  <p className="text-[10px] text-on-surface-variant/40 uppercase tracking-widest font-bold">Request Quote</p>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-outline/10">
                <h4 className="font-title-lg text-deep-forest mb-4">Save or Share</h4>
                <div className="flex gap-3">
                  <button className="flex-1 bg-leaf-green text-white py-3 rounded-lg font-label-lg hover:brightness-110 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-sm">favorite</span> SAVE
                  </button>
                  <button className="flex-1 border border-outline/20 text-on-surface-variant py-3 rounded-lg font-label-lg hover:bg-white transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-sm">share</span> SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colour Tips */}
      <ScrollReveal>
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-headline-lg text-deep-forest mb-4">Need the Perfect Match?</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">Bring any colour reference to our flagship dealer and we'll match it with 99.9% accuracy using spectrophotometer technology.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-deep-forest text-white px-8 py-4 rounded font-label-lg hover:bg-leaf-green transition-all cursor-pointer">Find a Dealer</button>
            <button className="border border-deep-forest/20 text-deep-forest px-8 py-4 rounded font-label-lg hover:bg-deep-forest hover:text-white transition-all cursor-pointer">Request Colour Consultation</button>
          </div>
        </div>
      </section>
      </ScrollReveal>

    </div>
  );
}
