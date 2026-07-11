"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import FaqItem from "@/components/FaqItem";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const heroSlides = [
  {
    image: "/properties/2S0B9628.JPG",
    headline: "NIM",
    headlineAccent: "PAINTS",
    accentColor: "text-flame-gold", // gold from logo
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
            src="/properties/2S0B9628.JPG"
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
        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-16 lg:pb-20">
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
            <div className="relative h-[400px] md:h-[600px] lg:hidden group overflow-hidden bg-surface-container -mx-8 md:-mx-16 mb-8 md:mb-12">
              <Image alt="NIM Paints Range" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" src="/upscaled%20product%20section.png" />
            </div>
            <div>
              <button className="group flex items-center gap-6 text-deep-forest font-bold uppercase tracking-[0.2em] text-sm hover:text-leaf-green transition-all cursor-pointer">
                Explore Products <span className="w-12 h-[1px] bg-deep-forest group-hover:w-20 group-hover:bg-leaf-green transition-all"></span>
              </button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] lg:h-auto group overflow-hidden bg-surface-container hidden lg:block lg:order-2">
            <Image alt="NIM Paints Range" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" src="/upscaled%20product%20section.png" />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Project Teaser */}
      <ScrollReveal direction="right">
      <section className="bg-deep-forest overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[400px] md:h-[600px] lg:h-auto group overflow-hidden hidden lg:block lg:order-1 bg-deep-forest">
            <Image alt="NIM Paints Projects" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" src="/final%20project%20image.png" />
          </div>
          <div className="p-8 md:p-16 lg:p-32 flex flex-col justify-center lg:order-2">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-flame-gold mb-6 md:mb-8 block">Gallery</span>
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-10 tracking-tight leading-none">Iconic Ugandan Projects.</h2>
            <p className="font-body-lg text-lg md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed">See how NIM Paints transforms the Ugandan skyline, from landmark commercial infrastructure to bespoke residential estates.</p>
            <div className="relative h-[400px] md:h-[600px] lg:hidden group overflow-hidden bg-deep-forest -mx-8 md:-mx-16 mb-8 md:mb-12">
              <Image alt="NIM Paints Projects" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" src="/final%20project%20image.png" />
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
      <section className="py-section-padding bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Section label */}
          <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-xs text-on-surface-variant font-medium">02</span>
            <span className="text-sm text-on-surface-variant">Process timeline</span>
          </div>
          </ScrollReveal>

          {/* Header: title left, description right */}
          <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-20 md:mb-28">
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest tracking-tight leading-tight">
              Our Process<br />and Timeline
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed lg:pt-4">
              From inquiry to handover, each step is focused on delivering premium results with transparency and precision at every stage.
            </p>
          </div>
          </ScrollReveal>

          {/* Staircase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-end">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100}>
                <div
                  className="bg-surface-container-lowest border border-outline/10 rounded-2xl p-6 relative"
                  style={{ marginBottom: `${(processSteps.length - 1 - i) * 20}px` }}
                >
                  {/* Time badge */}
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-leaf-green/15 text-leaf-green text-xs font-bold mb-4">
                    {i + 1}
                  </div>

                  {/* Title */}
                  <h4 className="font-display-lg text-xl md:text-2xl text-deep-forest mb-4">{step.title}</h4>

                  {/* Description as short text */}
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Decorative bottom bar */}
          <div className="mt-16 flex justify-center items-center gap-0 overflow-hidden">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full -ml-2 first:ml-0"
                style={{
                  backgroundColor: `rgba(30, 120, 60, ${0.1 + (i % 4) * 0.08})`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <ScrollReveal>
      <section className="py-section-padding bg-surface-container">
        <div className="max-w-container-max mx-auto px-gutter grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <div>
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest mb-8 md:mb-12 tracking-tight italic" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>The Legacy</h2>
            <div className="space-y-6 md:space-y-8">
              <p className="font-body-lg text-deep-forest text-xl md:text-2xl font-bold leading-tight">Made in Uganda, formulated for East Africa.</p>
              <p className="text-on-surface-variant leading-relaxed">Since 2016, NIM Paints has been at the forefront of the coatings industry in East Africa. We don't just import products; we engineer solutions at our state-of-the-art facility in Kampala, specifically for the high humidity and intense UV exposure of our region.</p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
                <div>
                  <div className="text-primary font-display-lg text-3xl md:text-4xl mb-2"><CountUp target={10} suffix="+" /></div>
                  <div className="text-deep-forest font-bold text-xs uppercase tracking-widest">Years Innovation</div>
                </div>
                <div>
                  <div className="text-primary font-display-lg text-3xl md:text-4xl mb-2"><CountUp target={100} suffix="%" /></div>
                  <div className="text-deep-forest font-bold text-xs uppercase tracking-widest">Ugandan Owned</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-surface-container ring-2 ring-deep-forest/10">
              <img alt="NIM Paints Premium Paint Tin" className="w-full h-full object-cover" src="/paint%20bukcets.png" />
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
              { icon: "flag", title: "100% Ugandan Owned", desc: "Manufactured locally in Kampala, supporting local industry and tailored specifically for our climate." },
              { icon: "verified", title: "UNBS Certified", desc: "Internationally recognized quality management standard ensuring consistent product excellence." },
              { icon: "palette", title: "8,000+ Colour Range", desc: "Latest spectrophotometer technology can match any architectural sample with precision." },
              { icon: "support_agent", title: "Free Technical Support", desc: "Site inspections and on-site training provided to ensure perfect application every time." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
              <div className="bg-surface-container-lowest p-8 rounded-2xl text-center hover:shadow-md transition-shadow border border-outline/10 hover:border-leaf-green/40 transition-colors">
                <span className="material-symbols-outlined text-4xl text-leaf-green mb-4 block">{item.icon}</span>
                <h3 className="font-title-lg text-deep-forest mb-3">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
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

          {/* Bento grid: 2 cards left, image center, 2 cards right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left column - 2 cards */}
            <div className="flex flex-col gap-6">
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
                  <span className="material-symbols-outlined text-lg text-white">school</span>
                </div>
                <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                  <span className="font-bold">On-Site Training</span> We train your applicators on proper surface preparation, mixing ratios, and application techniques.
                </p>
              </div>
            </div>

            {/* Center image */}
            <div className="hidden lg:block relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/properties/2S0B9296.JPG"
                alt="NIM Paints Services"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Right column - 2 cards */}
            <div className="flex flex-col gap-6">
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
                  <span className="material-symbols-outlined text-lg text-white">colorize</span>
                </div>
                <p className="text-deep-forest text-sm md:text-base leading-relaxed">
                  <span className="font-bold">Colour Matching</span> Computerized spectrophotometer matching ensures your exact colour specification is replicated perfectly.
                </p>
              </div>
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
              className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-8 shadow-lg border border-outline/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
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

      {/* Partner Logos Section */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {["centenary-bank", "habib", "job-connect", "mirage", "water", "partner-logo-1", "partner-logo-2"].map((logo) => (
              <ScrollReveal key={logo}>
              <div className="group relative flex items-center justify-center">
                <Image
                  src={logo.startsWith("partner-logo") ? `/${logo}.jpeg` : `/${logo}-768x427.png`}
                  alt={`${logo.replace(/-/g, " ")} logo`}
                  width={192}
                  height={107}
                  className="w-auto h-12 md:h-16 object-contain transition-all duration-500 ease-out group-hover:scale-105 mix-blend-multiply"
                />
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-3xl mx-auto px-gutter">
          <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <span className="font-label-lg text-xs uppercase tracking-[0.4em] text-primary mb-4 md:mb-6 block">Support</span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-deep-forest mb-6 md:mb-8 tracking-tight">Technical Inquiries</h2>
            <p className="font-body-lg text-on-surface-variant text-lg">Essential information regarding product lifecycle and application.</p>
          </div>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
              <FaqItem question={faq.q} answer={faq.a} />
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
