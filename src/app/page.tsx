"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { textures } from "@/data/colors";

const heroSlides = [
  {
    image: "/properties/2S0B9628.JPG",
    headline: "NIM",
    headlineAccent: "PAINTS",
    accentColor: "text-leaf-green",
    description: "From modern homes to iconic commercial spaces, our advanced coating systems combine lasting protection with sophisticated finishes—bringing your vision to life with uncompromising quality.",
    cta: { label: "Explore Products", href: "/products" },
  },
  {
    image: "/properties/2S0B9217.JPG",
    headline: "PREMIUM",
    headlineAccent: "FINISHES",
    accentColor: "text-flame-gold", // orange/gold
    description: "Engineered for the tropical Ugandan climate — our exterior systems withstand intense UV and humidity while maintaining a flawless appearance for years.",
    cta: { label: "View Collections", href: "/products" },
  },
  {
    image: "/properties/2S0B9341.JPG",
    headline: "COLOR",
    headlineAccent: "PRECISION",
    accentColor: "text-[#C62828]", // red from logo flame
    description: "Over 8,000 shades matched with spectrophotometer accuracy. From bold statements to subtle tones, find the exact colour that brings your vision to life.",
    cta: { label: "Try Visualizer", href: "/color-visualizer" },
  },
];

const testimonials = [
  { name: "Eng. Ben", text: "The site inspection and on-site training NIM provided transformed how our team approaches surface preparation. The difference in finish quality is remarkable, and our clients have noticed." },
  { name: "Eng. Vicent", text: "NIM's team guided us through the entire specification process for our school renovation. The low-VOC interior paints were perfect for our classrooms — durable, washable, and safe for our pupils." },
  { name: "Ashaba", text: "For our residential estate, we needed a paint that could handle Kampala's weather extremes. NIM's exterior systems have held up beautifully through two rainy seasons with no fading or peeling." },
  { name: "Florence", text: "The 8,000+ colour palette is a game-changer for my design work. I can find exactly the shade my clients envision, and the spectrophotometer matching means repeat orders are identical." },
  { name: "Dan", text: "NIM Paints delivered ahead of schedule for our office complex project. Their technical team was on-site throughout, ensuring proper application. The 15-year warranty gives us peace of mind." },
];

const processSteps = [
  { title: "Inquiry", desc: "Expert consultation to identify your specific coating requirements." },
  { title: "Site Visit", desc: "Professional assessment of substrate conditions and environmental factors." },
  { title: "Payments", desc: "Transparent pricing with flexible payment solutions for projects of all sizes." },
  { title: "Delivery", desc: "Timely logistics ensuring factory-fresh products arrive at your site." },
  { title: "Painting", desc: "Certified application supervised by technical specialists for precision." },
  { title: "Handover", desc: "Quality certification and final walkthrough of your transformed space." },
];

const faqs = [
  { q: "Long-term performance warranty?", a: "Our premium exterior paint carries a 15-year performance warranty when applied by certified professionals. Interior luxury finishes maintain integrity for up to 20 years with proper maintenance." },
  { q: "Environmental sustainability commitment?", a: "Sustainability is integrated into our R&D. We prioritize low-VOC (Volatile Organic Compounds) formulations, ensuring superior air quality and minimal environmental impact." },
  { q: "Custom color precision?", a: "Using high-precision spectrophotometers, we can replicate any architectural sample with 99.9% accuracy using our advanced pigment technology." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <div className="-mt-20">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-deep-forest">
        {/* Single background image for all slides */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="NIM Paints"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src="/hero-main.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        {/* Slide indicators */}
        <div className="absolute top-1/2 right-6 md:right-10 z-20 -translate-y-1/2 flex flex-col gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide ? "bg-white h-6" : "bg-white/40 hover:bg-white/70 h-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom content overlay */}
        <div className="hero-content px-gutter">
          {/* Large headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${currentSlide}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-[var(--font-poppins)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.85] tracking-tighter uppercase mb-6 font-black"
            >
              {slide.headline} <span className={slide.accentColor}>{slide.headlineAccent}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-white/30 mb-6 md:mb-8" />

          {/* Bottom bar: description left, stats center, CTA right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="font-body-lg text-sm md:text-base text-white/70 max-w-md leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* Stats */}
            <div className="flex items-center gap-8 lg:gap-12">
              <div>
                <div className="text-white font-display-lg text-2xl md:text-3xl"><CountUp target={15} suffix="+" /></div>
                <div className="text-white/40 uppercase tracking-[0.2em] text-[10px]">Years Warranty</div>
              </div>
              <div>
                <div className="text-white font-display-lg text-2xl md:text-3xl"><CountUp target={8} suffix="k+" /></div>
                <div className="text-white/40 uppercase tracking-[0.2em] text-[10px]">Color Palette</div>
              </div>
            </div>

            {/* CTA + navigation arrows */}
            <div className="flex items-center gap-6">
              <Link
                href={slide.cta.href}
                className="group flex items-center gap-3 text-white font-bold uppercase tracking-[0.2em] text-xs hover:text-primary-fixed transition-colors"
              >
                {slide.cta.label}
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </Link>
              <div className="hidden md:flex items-center gap-3 ml-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Textures Marquee */}
      <ScrollReveal>
      <section className="py-8 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display-lg text-2xl text-deep-forest">Signature Textures</h3>
              <p className="text-on-surface-variant">Premium finish options for every interior and exterior application.</p>
            </div>
            <Link href="/products#signature-textures" className="ml-6 bg-deep-forest text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-deep-forest/90 transition">
              Explore more textures
            </Link>
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex gap-4 items-center marquee-track" style={{willChange: 'transform'}}>
              {textures.concat(textures).map((t, i) => (
                <div key={i} className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm bg-gray-100 border border-gray-200">
                  <Image src={t.image} alt={t.name} width={192} height={192} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee-track {
            animation: marquee 28s linear infinite;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
      </ScrollReveal>

      {/* Stats Bar */}
      <ScrollReveal>
      <section className="py-12 bg-surface-container border-y border-outline/5">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display-lg text-3xl md:text-4xl text-leaf-green mb-1"><CountUp target={10} suffix="+" /></div>
              <div className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-[10px]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-3xl md:text-4xl text-leaf-green mb-1"><CountUp target={8000} suffix="+" format /></div>
              <div className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-[10px]">Colour Range</div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-3xl md:text-4xl text-leaf-green mb-1"><CountUp target={300} suffix="+" /></div>
              <div className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-[10px]">Stockists Nationwide</div>
            </div>
            <div className="text-center">
              <div className="font-display-lg text-3xl md:text-4xl text-leaf-green mb-1">UNBS</div>
              <div className="font-label-md text-on-surface-variant/60 uppercase tracking-wider text-[10px]">US EAS 998:2021</div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Product Teaser */}
      <ScrollReveal direction="left">
      <section className="bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-16 lg:p-32 flex flex-col justify-center lg:order-1">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-primary mb-6 md:mb-8 block">Collections</span>
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest mb-6 md:mb-10 tracking-tight leading-none">The Master Palette.</h2>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant mb-8 md:mb-12 leading-relaxed">Explore our curated range of interior luxury and high-performance exterior systems engineered for tropical longevity.</p>
            <div className="relative h-[400px] md:h-[600px] lg:hidden group overflow-hidden bg-surface-container mb-8 md:mb-12">
              <Image alt="NIM Paints Range" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" src="/upscaled%20product%20section.png" />
            </div>
            <div>
              <button className="group flex items-center gap-6 text-deep-forest font-bold uppercase tracking-[0.2em] text-sm hover:text-leaf-green transition-all cursor-pointer">
                Explore Products <span className="w-12 h-[1px] bg-deep-forest group-hover:w-20 group-hover:bg-leaf-green transition-all"></span>
              </button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] lg:h-[600px] group overflow-hidden bg-surface-container hidden lg:block lg:order-2">
            <Image alt="NIM Paints Range" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" src="/upscaled%20product%20section.png" />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Project Teaser */}
      <ScrollReveal direction="right">
      <section className="bg-deep-forest overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[400px] md:h-[600px] lg:h-[600px] group overflow-hidden hidden lg:block lg:order-1 bg-deep-forest">
            <Image alt="NIM Paints Projects" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" src="/final%20project%20image.png" />
          </div>
          <div className="p-8 md:p-16 lg:p-32 flex flex-col justify-center lg:order-2">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-flame-gold mb-6 md:mb-8 block">Gallery</span>
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-10 tracking-tight leading-none">Iconic Ugandan Projects.</h2>
            <p className="font-body-lg text-lg md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed">See how NIM Paints transforms the Ugandan skyline, from landmark commercial infrastructure to bespoke residential estates.</p>
            <div className="relative h-[400px] md:h-[600px] lg:hidden group overflow-hidden bg-deep-forest mb-8 md:mb-12">
              <Image alt="NIM Paints Projects" width={1200} height={800} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" src="/final%20project%20image.png" />
            </div>
            <div>
              <button className="group flex items-center gap-6 text-white font-bold uppercase tracking-[0.2em] text-sm hover:text-primary-fixed transition-all cursor-pointer">
                View Project Gallery <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-primary-fixed transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Process Section */}
      <section className="relative py-section-padding overflow-hidden bg-gradient-to-br from-slate-800/40 via-deep-forest/12 to-slate-700/20">
        {/* Decorative elements (reduced intensity) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-green/4 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-flame-gold/4 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-20 md:mb-28">
              <div>
                <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                  Our Process<br />and Timeline
                </h2>
              </div>
              <p className="text-white drop-shadow text-base md:text-lg max-w-md leading-relaxed lg:pt-4 font-medium">
                From inquiry to handover, each step is focused on delivering premium results with transparency and precision at every stage.
              </p>
            </div>
            </ScrollReveal>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {processSteps.map((step, i) => {
              const colors = [
                { bg: "from-blue-500 to-cyan-500", light: "from-blue-400/20 to-cyan-400/20", text: "text-blue-100", accent: "bg-blue-500" },
                { bg: "from-emerald-500 to-green-500", light: "from-emerald-400/20 to-green-400/20", text: "text-emerald-100", accent: "bg-emerald-500" },
                { bg: "from-orange-500 to-red-500", light: "from-orange-400/20 to-red-400/20", text: "text-orange-100", accent: "bg-orange-500" },
                { bg: "from-purple-500 to-pink-500", light: "from-purple-400/20 to-pink-400/20", text: "text-purple-100", accent: "bg-purple-500" },
                { bg: "from-amber-500 to-orange-500", light: "from-amber-400/20 to-orange-400/20", text: "text-amber-100", accent: "bg-amber-500" },
                { bg: "from-rose-500 to-red-600", light: "from-rose-400/20 to-red-400/20", text: "text-rose-100", accent: "bg-rose-500" },
              ];
              const color = colors[i];

              return (
                <ScrollReveal key={step.title} delay={i * 100}>
                  <div className={`group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${color.bg} p-0.5 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10`}>
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`relative h-full rounded-[15px] bg-gradient-to-br ${color.light} backdrop-blur-xl border border-white/10 p-6 md:p-8 flex flex-col`}>
                      {/* Animated number badge */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full ${color.accent} text-white text-lg md:text-xl font-bold mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {i + 1}
                      </div>

                      {/* Title */}
                      <h4 className={`font-display-lg text-xl md:text-2xl ${color.text} mb-3 md:mb-4 font-bold tracking-tight`}>{step.title}</h4>

                      {/* Description */}
                      <p className={`text-white/70 text-sm md:text-base leading-relaxed flex-grow`}>{step.desc}</p>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <ScrollReveal>
      <section className="relative py-section-padding overflow-hidden bg-white">
        {/* Decorative paint splash elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-leaf-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-flame-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div>
              {/* Vibrant tag */}
              <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-leaf-green to-emerald-400 animate-pulse"></div>
                <span className="text-leaf-green font-bold text-sm uppercase tracking-[0.15em]">Est. 2016 • Uganda</span>
              </div>

              {/* Main Title with gradient */}
              <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-12 tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-deep-forest via-emerald-700 to-leaf-green bg-clip-text text-transparent">The Legacy</span>
              </h2>

              {/* Tagline */}
              <p className="font-body-lg text-deep-forest text-xl md:text-2xl font-bold leading-tight mb-6">Made in Uganda, formulated for East Africa.</p>

              {/* Description with better styling */}
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-lg">Since 2016, NIM Paints has been at the forefront of the coatings industry in East Africa. We don't just import products; we engineer solutions at our state-of-the-art facility in Kampala, specifically for the high humidity and intense UV exposure of our region.</p>

              {/* Stats with vibrant colors */}
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {/* Stat 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-leaf-green to-emerald-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-leaf-green/30 shadow-lg">
                    <div className="text-leaf-green font-display-lg text-4xl md:text-5xl font-black mb-2"><CountUp target={10} suffix="+" /></div>
                    <div className="text-deep-forest font-bold text-xs uppercase tracking-wider">Years of<br />Innovation</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-flame-gold via-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-flame-gold/30 shadow-lg">
                    <div className="bg-gradient-to-r from-flame-gold to-orange-400 bg-clip-text text-transparent font-display-lg text-4xl md:text-5xl font-black mb-2"><CountUp target={100} suffix="%" /></div>
                    <div className="text-deep-forest font-bold text-xs uppercase tracking-wider">Ugandan<br />Owned</div>
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div className="mt-10 md:mt-14 h-1 w-20 bg-gradient-to-r from-leaf-green to-flame-gold rounded-full"></div>
            </div>

            {/* Right - Product Image with enhanced styling */}
            <div className="relative lg:ml-8">
              {/* Decorative frame */}
              <div className="absolute -inset-8 bg-gradient-to-br from-leaf-green/40 via-flame-gold/20 to-orange-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative group">
                {/* Gradient border frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-leaf-green via-emerald-400 to-flame-gold rounded-3xl p-1 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-deep-forest to-slate-900 shadow-2xl border-2 border-white/10">
                  {/* Image container with overlay */}
                  <img 
                    alt="NIM Paints Premium Paint Tin" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    src="/paint%20bukcets.png" 
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-leaf-green to-emerald-400 rounded-full p-6 md:p-8 shadow-2xl transform group-hover:scale-110 transition-transform duration-500 border-4 border-deep-forest">
                  <div className="text-center">
                    <div className="text-deep-forest font-black text-lg md:text-2xl">Made in</div>
                    <div className="text-deep-forest font-black text-xl md:text-3xl">Uganda</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Why Choose NIM */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-leaf-green mb-4 block">Why NIM Paints</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest">Engineered for East Africa</h2>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "flag",
                title: "100% Ugandan Owned",
                desc: "Manufactured locally in Kampala, supporting local industry and tailored specifically for our climate.",
                cardClass: "bg-leaf-green/10 border-leaf-green/20",
                iconClass: "text-leaf-green",
              },
              {
                icon: "verified",
                title: "UNBS Certified",
                desc: "Internationally recognized quality management standard ensuring consistent product excellence.",
                cardClass: "bg-emerald-100 border-emerald-200",
                iconClass: "text-emerald-800",
              },
              {
                icon: "palette",
                title: "8,000+ Colour Range",
                desc: "Latest spectrophotometer technology can match any architectural sample with precision.",
                cardClass: "bg-blue-100 border-blue-200",
                iconClass: "text-blue-800",
              },
              {
                icon: "support_agent",
                title: "Free Technical Support",
                desc: "Site inspections and on-site training provided to ensure perfect application every time.",
                cardClass: "bg-flame-gold/10 border-flame-gold/20",
                iconClass: "text-[#b15a0d]",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
              <div className={`min-h-[290px] flex flex-col justify-between p-8 rounded-2xl text-center shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.cardClass}`}>
                <div>
                  <span className={`material-symbols-outlined text-4xl mb-4 block ${item.iconClass}`}>{item.icon}</span>
                  <h3 className="font-title-lg text-deep-forest mb-3">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">{item.desc}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ScrollReveal>
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-flame-gold mb-4 block">Our Services</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest">Beyond the Paint Can</h2>
          </div>

          {/* 2x2 grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#f3f2ef] rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-lg text-white">search_insights</span>
              </div>
              <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                <span className="font-bold">Site Inspection</span> Our technical team visits your project site to assess substrate conditions and recommend the right coating system.
              </p>
            </div>
            <div className="bg-[#f3f2ef] rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-lg text-white">support</span>
              </div>
              <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                <span className="font-bold">Free Technical Advice</span> Expert guidance on product selection, colour matching, and project planning — no obligation.
              </p>
            </div>
            <div className="bg-[#f3f2ef] rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-lg text-white">school</span>
              </div>
              <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                <span className="font-bold">On-Site Training</span> We train your applicators on proper surface preparation, mixing ratios, and application techniques.
              </p>
            </div>
            <div className="bg-[#f3f2ef] rounded-2xl p-6 md:p-8">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-lg text-white">colorize</span>
              </div>
              <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                <span className="font-bold">Colour Matching</span> Computerized spectrophotometer matching ensures your exact colour specification is replicated perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
      <section className="py-section-padding bg-surface-container-lowest overflow-x-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-16 text-center">
          <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-primary mb-4 block">Client Voices</span>
          <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest">What Our Clients Say</h2>
        </div>

        {/* Marquee row */}
        <div className="flex gap-6 marquee-row">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[90vw] sm:w-[380px] bg-white rounded-2xl p-8 shadow-lg border border-outline/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-leaf-green flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {t.name.charAt(0)}
                </div>
                <h4 className="font-bold text-deep-forest">{t.name.split(' ').pop()}</h4>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="material-symbols-outlined text-sm text-flame-gold">star</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-leaf-green mb-4 md:mb-6 block">Support</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest mb-6 md:mb-8 tracking-tight">Technical Inquiries</h2>
            <p className="font-body-lg text-on-surface-variant text-lg">Essential information regarding product lifecycle and application.</p>
          </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
              <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-10 border border-outline/10 hover:border-leaf-green/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-leaf-green/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl text-leaf-green">
                    {i === 0 ? "shield" : i === 1 ? "eco" : "palette"}
                  </span>
                </div>
                <h3 className="font-title-lg text-deep-forest mb-4 text-lg">{faq.q}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <ScrollReveal>
          <h2 className="font-display-lg text-headline-lg text-deep-forest mb-4">Visit Our Facility</h2>
          <p className="font-body-lg text-on-surface-variant mb-8">Plot 3789 Kinawataka Road, Kampala, Uganda</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-outline/10 max-w-4xl mx-auto mb-6">
            <iframe
              src="https://www.google.com/maps?q=NIM+Paints+Kinawataka+Rd+Kampala+Uganda&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=NIM+Paints+Kinawataka+Rd+Kampala+Uganda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-leaf-green text-on-primary font-bold uppercase tracking-[0.2em] text-xs px-8 py-4 rounded-lg transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">directions</span>
            Navigate to NIM Paints
          </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter is now in the footer */}
    </div>
  );
}
