"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { palettes, textures } from "@/data/colors";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All Products", "Interior", "Exterior", "Textured"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-deep-forest">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A1A8A] via-[#6820B8] to-[#3D0E70]"></div>
        </div>

        <div className="hero-content px-gutter">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Engineered for East Africa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            The Coating <span className="text-flame-gold">Revolution</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="origin-left w-full h-[1px] bg-white/30 mb-6 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="font-body-lg text-sm md:text-base text-white/70 max-w-lg leading-relaxed"
          >
            NIM Paints combines cutting-edge polymer technology with the specific atmospheric requirements of the tropical sun and equatorial humidity.
          </motion.p>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Title */}
          <ScrollReveal>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest text-center tracking-tight mb-8">
              Our Engineered Products
            </h1>
          </ScrollReveal>

          {/* Category tabs */}
          <div className="flex justify-center gap-6 md:gap-10 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-sm md:text-base pb-2 transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "text-deep-forest font-bold"
                    : "text-on-surface-variant hover:text-deep-forest"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-leaf-green rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link href={`/products/${product.slug}`} className="group block">
                    <div className="bg-[#f8f8f6] rounded-3xl p-4 mb-4 overflow-hidden">
                      <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    </div>
                    <div className="px-1">
                      <h3 className="font-bold text-deep-forest text-base mb-1">{product.title}</h3>
                      <p className="text-on-surface-variant text-xs mb-2">{product.finish}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">{product.desc}</p>
                      <span className="text-leaf-green text-xs font-medium mt-2 inline-block underline underline-offset-2">
                        learn more
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Signature Textures */}
      <ScrollReveal>
        <section id="signature-textures" className="py-section-padding bg-[#f8f8f6]">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-12">
              <h2 className="font-display-lg text-3xl md:text-4xl text-deep-forest mb-2 tracking-tight">Signature Textures</h2>
              <p className="text-on-surface-variant">Premium finish options for every interior and exterior application.</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
              {textures.map((t) => (
                <div key={t.name} className="group cursor-pointer">
                  <div className="aspect-square rounded-2xl mb-3 relative overflow-hidden shadow-sm bg-gray-200 border border-gray-300">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 33vw, 16vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                  <p className="font-bold text-xs text-deep-forest">{t.name}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider opacity-60">{t.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-deep-forest rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-white">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4 tracking-tight">
                  Ready to transform your space?
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Our technical team provides complimentary surface assessments and color consultation for projects of all sizes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-deep-forest px-8 py-4 rounded-full font-bold text-sm hover:bg-white/90 transition-all text-center">
                  Request a Quote
                </Link>
                <Link href="/paint-calculator" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all text-center">
                  Paint Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
