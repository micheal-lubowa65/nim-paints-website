"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

interface RoomDimensions {
  length: number;
  width: number;
  height: number;
  doors: number;
  windows: number;
}

const DOOR_AREA = 1.6;
const WINDOW_AREA = 1.2;

export default function PaintCalculator() {
  const [projectType, setProjectType] = useState<"interior" | "exterior">("interior");
  const [rooms, setRooms] = useState<RoomDimensions[]>([
    { length: 5, width: 4, height: 2.7, doors: 1, windows: 1 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [coats, setCoats] = useState(2);
  const [result, setResult] = useState<{ totalArea: number; litres: number; tins: { size: number; count: number }[] } | null>(null);

  const addRoom = () => {
    setRooms([...rooms, { length: 5, width: 4, height: 2.7, doors: 1, windows: 1 }]);
  };

  const removeRoom = (i: number) => {
    if (rooms.length > 1) setRooms(rooms.filter((_, idx) => idx !== i));
  };

  const updateRoom = (i: number, field: keyof RoomDimensions, value: number) => {
    const updated = rooms.map((r, idx) => (idx === i ? { ...r, [field]: value } : r));
    setRooms(updated);
  };

  const calculate = () => {
    let totalArea = 0;
    for (const room of rooms) {
      const wallArea = 2 * (room.length + room.width) * room.height;
      const ceilingArea = projectType === "interior" ? room.length * room.width : 0;
      const deductions = room.doors * DOOR_AREA + room.windows * WINDOW_AREA;
      totalArea += Math.max(0, wallArea + ceilingArea - deductions);
    }
    const litres = (totalArea * coats) / selectedProduct.coverage;
    const totalLitres = Math.ceil(litres);

    // Calculate optimal tin combination
    const tins: { size: number; count: number }[] = [];
    let remaining = totalLitres;

    const tin20 = Math.floor(remaining / 20);
    if (tin20 > 0) { tins.push({ size: 20, count: tin20 }); remaining -= tin20 * 20; }

    const tin4 = Math.floor(remaining / 4);
    if (tin4 > 0) { tins.push({ size: 4, count: tin4 }); remaining -= tin4 * 4; }

    if (remaining > 0) { tins.push({ size: 1, count: remaining }); }

    setResult({ totalArea: Math.round(totalArea), litres: totalLitres, tins });
  };

  return (
    <div className="-mt-20">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-deep-forest">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Paint Calculator"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src="/properties/2S0B9628.JPG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-16">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Planning Tool
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            Paint <span className="text-flame-gold">Calculator</span>
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
            Enter your room dimensions, choose a product, and get an instant estimate of how much paint you need.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Inputs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Type Toggle */}
              <div className="bg-[#f8f8f6] rounded-3xl p-6 md:p-8">
                <h3 className="text-deep-forest font-bold text-lg mb-4">Project Type</h3>
                <div className="flex gap-3">
                  {(["interior", "exterior"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer ${
                        projectType === type
                          ? "bg-deep-forest text-white"
                          : "bg-white border border-deep-forest/10 text-deep-forest hover:border-deep-forest/30"
                      }`}
                    >
                      {type === "interior" ? "Interior (incl. ceiling)" : "Exterior (walls only)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              {rooms.map((room, i) => (
                <div key={i} className="bg-[#f8f8f6] rounded-3xl p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-deep-forest font-bold text-lg">Room {i + 1}</h3>
                    {rooms.length > 1 && (
                      <button onClick={() => removeRoom(i)} className="text-red-500 hover:text-red-700 transition-colors cursor-pointer text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">close</span> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {([
                      { key: "length", label: "Length (m)", min: 1, step: 0.1 },
                      { key: "width", label: "Width (m)", min: 1, step: 0.1 },
                      { key: "height", label: "Height (m)", min: 1, step: 0.1 },
                      { key: "doors", label: "Doors", min: 0, step: 1 },
                      { key: "windows", label: "Windows", min: 0, step: 1 },
                    ] as const).map((field) => (
                      <div key={field.key}>
                        <label className="text-on-surface-variant text-xs font-medium mb-2 block">{field.label}</label>
                        <input
                          type="number"
                          min={field.min}
                          step={field.step}
                          value={room[field.key]}
                          onChange={(e) => updateRoom(i, field.key, Math.max(field.min, parseFloat(e.target.value) || 0))}
                          className="w-full bg-white border border-deep-forest/10 rounded-xl px-4 py-3 text-deep-forest focus:ring-2 focus:ring-leaf-green/30 focus:border-leaf-green transition-all outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Add room */}
              <button
                onClick={addRoom}
                className="w-full border-2 border-dashed border-deep-forest/15 rounded-2xl py-4 text-on-surface-variant hover:border-leaf-green hover:text-leaf-green transition-all cursor-pointer flex items-center justify-center gap-2 text-sm font-medium"
              >
                <span className="material-symbols-outlined text-lg">add</span> Add another room
              </button>

              {/* Paint Selection */}
              <div className="bg-[#f8f8f6] rounded-3xl p-6 md:p-8">
                <h3 className="text-deep-forest font-bold text-lg mb-6">Paint Selection</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-on-surface-variant text-xs font-medium mb-2 block">Product</label>
                    <select
                      value={selectedProduct.slug}
                      onChange={(e) => {
                        const p = products.find((pr) => pr.slug === e.target.value);
                        if (p) setSelectedProduct(p);
                      }}
                      className="w-full bg-white border border-deep-forest/10 rounded-xl px-4 py-3 text-deep-forest focus:ring-2 focus:ring-leaf-green/30 focus:border-leaf-green transition-all outline-none"
                    >
                      {products.map((p) => (
                        <option key={p.slug} value={p.slug}>{p.title}</option>
                      ))}
                    </select>
                    <p className="text-on-surface-variant/50 text-xs mt-2">Coverage: {selectedProduct.coverage} m²/L</p>
                  </div>
                  <div>
                    <label className="text-on-surface-variant text-xs font-medium mb-2 block">Number of Coats</label>
                    <select
                      value={coats}
                      onChange={(e) => setCoats(parseInt(e.target.value))}
                      className="w-full bg-white border border-deep-forest/10 rounded-xl px-4 py-3 text-deep-forest focus:ring-2 focus:ring-leaf-green/30 focus:border-leaf-green transition-all outline-none"
                    >
                      {[1, 2, 3].map((c) => (
                        <option key={c} value={c}>{c} coat{c > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                    <p className="text-on-surface-variant/50 text-xs mt-2">Most projects need 2 coats</p>
                  </div>
                </div>
              </div>

              {/* Calculate */}
              <button
                onClick={calculate}
                className="w-full bg-deep-forest text-white py-4 rounded-full font-bold text-base hover:bg-deep-forest/90 transition-all cursor-pointer shadow-lg"
              >
                Calculate Now
              </button>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {result ? (
                  <>
                    <div className="bg-deep-forest rounded-3xl p-8 text-white">
                      <h3 className="text-white/60 text-xs uppercase tracking-wider mb-6">Your Estimate</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Surface Area</p>
                          <p className="font-display-lg text-4xl">{result.totalArea.toLocaleString()} <span className="text-lg text-white/40">m²</span></p>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Paint Required</p>
                          <p className="font-display-lg text-4xl">{result.litres} <span className="text-lg text-white/40">litres</span></p>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Product</p>
                          <p className="text-white text-sm font-medium">{selectedProduct.title}</p>
                          <p className="text-white/40 text-xs">{coats} coat{coats > 1 ? "s" : ""} • {selectedProduct.coverage} m²/L</p>
                        </div>
                      </div>
                    </div>

                    {/* Tin breakdown */}
                    {result.tins && result.tins.length > 0 && (
                    <div className="bg-[#f8f8f6] rounded-3xl p-6">
                      <h4 className="text-deep-forest font-bold text-sm mb-4">Recommended Purchase</h4>
                      <div className="space-y-3">
                        {result.tins.map((tin) => (
                          <div key={tin.size} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-leaf-green/10 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-leaf-green text-lg">format_paint</span>
                              </div>
                              <div>
                                <p className="text-deep-forest font-medium text-sm">{tin.size}L Tin</p>
                                <p className="text-on-surface-variant/50 text-xs">{selectedProduct.title}</p>
                              </div>
                            </div>
                            <span className="text-deep-forest font-bold text-lg">×{tin.count}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-on-surface-variant/50 text-xs mt-4 text-center">
                        Total: {result.litres}L ({result.tins.map(t => `${t.count}×${t.size}L`).join(" + ")})
                      </p>
                    </div>
                    )}

                    <div className="flex gap-3">
                      <button className="flex-1 bg-leaf-green text-white py-3 rounded-full text-sm font-medium hover:bg-leaf-green/90 transition-all cursor-pointer">
                        Save PDF
                      </button>
                      <button className="flex-1 border border-deep-forest/20 text-deep-forest py-3 rounded-full text-sm font-medium hover:bg-deep-forest hover:text-white transition-all cursor-pointer">
                        Email
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="bg-[#f8f8f6] rounded-3xl p-8 text-center">
                    <span className="material-symbols-outlined text-5xl text-on-surface-variant/20 mb-4 block">calculate</span>
                    <p className="text-on-surface-variant/60 text-sm">Enter dimensions and click "Calculate Now" to see your estimate.</p>
                  </div>
                )}

                {/* Tips */}
                <div className="bg-leaf-green/5 rounded-3xl p-6 border border-leaf-green/10">
                  <h4 className="text-deep-forest font-bold text-sm mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-leaf-green text-lg">lightbulb</span>
                    Pro Tips
                  </h4>
                  <ul className="space-y-3 text-xs text-on-surface-variant leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-leaf-green mt-0.5">•</span>
                      Always buy 10% extra for touch-ups and waste
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf-green mt-0.5">•</span>
                      Rough/textured surfaces need ~20% more paint
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf-green mt-0.5">•</span>
                      Primer not included — add separately
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-16 bg-[#f8f8f6]">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-deep-forest rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-white">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4 tracking-tight">Ready to Start?</h2>
                <p className="text-white/60 text-base leading-relaxed">Visit one of our dealers or request a free site consultation with our technical team.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-white text-deep-forest px-8 py-4 rounded-full font-bold text-sm hover:bg-white/90 transition-all text-center">Find a Dealer</a>
                <a href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all text-center">Request Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
