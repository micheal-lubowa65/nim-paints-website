"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Luxury Exterior Finishing",
    location: "Residential Estate, Kampala",
    category: "Residential",
    img: "/properties/2S0B9100.JPG",
  },
  {
    title: "Commercial Interior Coating",
    location: "Office Complex, Kampala",
    category: "Commercial",
    img: "/properties/2S0B9113.JPG",
  },
  {
    title: "Textured Wall Application",
    location: "Mixed-Use Development",
    category: "Commercial",
    img: "/properties/2S0B9187.JPG",
  },
  {
    title: "Premium Exterior Systems",
    location: "Institutional Building, Uganda",
    category: "Institutional",
    img: "/properties/2S0B9217.JPG",
  },
  {
    title: "Weatherguard Protection",
    location: "Residential Project, Entebbe",
    category: "Residential",
    img: "/properties/2S0B9341.JPG",
  },
  {
    title: "Full Property Transformation",
    location: "Housing Estate, Kampala",
    category: "Residential",
    img: "/properties/2S0B9628.JPG",
  },
];

const categories = ["All Projects", "Commercial", "Institutional", "Residential"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + filteredProjects.length) % filteredProjects.length;
  };

  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-deep-forest">
        <div className="absolute inset-0 z-0">
          <Image
            alt="NIM Paints Projects Gallery"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src="/properties/2S0B9628.JPG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-16 lg:pb-20">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Showcase
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            Iconic <span className="text-flame-gold">Ugandan</span> Projects
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
            See how NIM Paints transforms the Ugandan skyline, from landmark commercial infrastructure to bespoke residential estates.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-leaf-green text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Gallery</span>
              <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest tracking-tight mb-4">
                Our Project Showcase
              </h2>
              <p className="text-on-surface-variant text-base max-w-md mx-auto">
                See the world through our lens: architectural excellence across Uganda and East Africa.
              </p>
            </div>
          </ScrollReveal>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentIndex(0); }}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-deep-forest text-white"
                    : "border border-deep-forest/20 text-deep-forest hover:border-deep-forest/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Carousel — 5 cards visible on desktop, 3 on mobile */}
          <div className="relative h-[350px] md:h-[420px] mb-12">
            {/* Far left (hidden on mobile) */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[18%] h-[60%] rounded-2xl overflow-hidden z-0 cursor-pointer hidden md:block"
              onClick={prevSlide}
            >
              <img src={filteredProjects[getSlideIndex(-2)]?.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/50"></div>
            </div>

            {/* Left adjacent */}
            <div
              className="absolute left-0 md:left-[12%] top-1/2 -translate-y-1/2 w-[28%] md:w-[26%] h-[65%] md:h-[78%] rounded-2xl md:rounded-3xl overflow-hidden z-[2] cursor-pointer shadow-lg"
              onClick={prevSlide}
            >
              <img src={filteredProjects[getSlideIndex(-1)]?.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Center card (active) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[55%] md:w-[38%] h-full rounded-3xl overflow-hidden shadow-2xl z-10">
              <img src={filteredProjects[currentIndex]?.img} alt={filteredProjects[currentIndex]?.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <h3 className="text-white font-bold text-sm md:text-lg mb-1">{filteredProjects[currentIndex]?.title}</h3>
                <p className="text-white/60 text-xs md:text-sm">{filteredProjects[currentIndex]?.location}</p>
              </div>
            </div>

            {/* Right adjacent */}
            <div
              className="absolute right-0 md:right-[12%] top-1/2 -translate-y-1/2 w-[28%] md:w-[26%] h-[65%] md:h-[78%] rounded-2xl md:rounded-3xl overflow-hidden z-[2] cursor-pointer shadow-lg"
              onClick={nextSlide}
            >
              <img src={filteredProjects[getSlideIndex(1)]?.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Far right (hidden on mobile) */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[18%] h-[60%] rounded-2xl overflow-hidden z-0 cursor-pointer hidden md:block"
              onClick={nextSlide}
            >
              <img src={filteredProjects[getSlideIndex(2)]?.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/50"></div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-11 h-11 border border-deep-forest/20 rounded-full flex items-center justify-center text-deep-forest hover:bg-deep-forest hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 border border-deep-forest/20 rounded-full flex items-center justify-center text-deep-forest hover:bg-deep-forest hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-section-padding bg-[#f8f8f6]">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-deep-forest rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-white">
                <h2 className="font-display-lg text-3xl md:text-4xl mb-4 tracking-tight">
                  Start Your Transformation
                </h2>
                <p className="text-white/60 text-base leading-relaxed">
                  Whether it&apos;s a single room or a commercial complex, our experts help you choose the perfect finish engineered for the unique Ugandan climate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-white text-deep-forest px-8 py-4 rounded-full font-bold text-sm hover:bg-white/90 transition-all text-center">
                  Get a Free Quote
                </a>
                <a href="/resources/nim-company-profile-2025.pdf" download className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all text-center">
                  Download Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
