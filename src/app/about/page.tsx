"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="-mt-20">
      {/* Hero Section — full viewport, single image, no carousel */}
      <section className="relative h-screen w-full overflow-hidden bg-deep-forest">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="NIM Paints Manufacturing Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            src="/properties/2S0B9628.JPG"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        {/* Bottom content overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-16 lg:pb-20">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Established Excellence
          </motion.span>

          {/* Large headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            Engineering Colors for the<br />
            <span className="text-flame-gold">Pearl of Africa</span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="origin-left w-full h-[1px] bg-white/30 mb-6 md:mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="font-body-lg text-sm md:text-base text-white/70 max-w-2xl leading-relaxed"
          >
            NIM PAINTS products are manufactured by NIM (U) Limited. A company registered to manufacture and apply both textured and emulsion paint products in Uganda with a chain of distribution in East Africa and the neighboring regions.
          </motion.p>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-section-padding bg-[#f0f7f1]">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Header: title left, description right */}
          <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-16">
            <div>
              <span className="inline-block bg-leaf-green/20 text-leaf-green text-xs font-medium px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest tracking-tight leading-tight">
                Your Goals, Our<br />Commitment
              </h2>
            </div>
            <p className="text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed lg:pt-12">
              Since 2016, NIM Paints has been at the forefront of the coatings industry in East Africa, engineering solutions specifically for our tropical climate.
            </p>
          </div>
          </ScrollReveal>

          {/* 3 Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
            <div className="bg-white rounded-3xl p-6 border border-leaf-green/10 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-deep-forest text-base">Industry Recognition</h3>
                <span className="material-symbols-outlined text-lg text-deep-forest">arrow_outward</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                UNBS certified to US EAS 998:2021 standards, ensuring consistent product excellence across all our ranges.
              </p>
              <div className="relative h-40 rounded-2xl overflow-hidden bg-leaf-green/5">
                <img src="/properties/2S0B9296.JPG" alt="Industry recognition" className="w-full h-full object-cover" />
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
            <div className="bg-deep-forest rounded-3xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white text-base">Competitive Advantage</h3>
                <span className="material-symbols-outlined text-lg text-white">arrow_outward</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                100% Ugandan owned and manufactured, formulated specifically for the high humidity and intense UV of our region.
              </p>
              <div className="relative h-40 rounded-2xl overflow-hidden">
                <img src="/textures/CTM19453.jpg" alt="Competitive advantage" className="w-full h-full object-cover" />
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
            <div className="bg-white rounded-3xl p-6 border border-leaf-green/10 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-deep-forest text-base">Commit To Professionalism</h3>
                <span className="material-symbols-outlined text-lg text-deep-forest">arrow_outward</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                Free site inspections, on-site training, and technical support ensure perfect application every time.
              </p>
              <div className="relative h-40 rounded-2xl overflow-hidden bg-leaf-green/5">
                <img src="/properties/2S0B9481.JPG" alt="Professionalism" className="w-full h-full object-cover" />
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Us Stats Section */}
      <section className="py-section-padding bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          {/* Header: title left, description + CTA right */}
          <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-16">
            <div>
              <span className="inline-block bg-leaf-green/20 text-leaf-green text-xs font-medium px-4 py-1.5 rounded-full mb-4">About Us</span>
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-deep-forest tracking-tight leading-tight">
                Paint Expertise You<br />Can Count On
              </h2>
            </div>
            <div className="max-w-md lg:pt-12">
              <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                We have a successful portfolio of products crafted with emerging manufacturing technologies, many of which are leaders in their respective wall management areas mainly emulsion and decorative.
              </p>
              <a href="/resources/nim-company-profile-2025.pdf" download className="inline-flex items-center gap-2 bg-deep-forest text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-deep-forest/90 transition-all">
                Learn More <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <ScrollReveal delay={100}>
            <div className="bg-[#f0f7f1] rounded-3xl p-6 text-center">
              <div className="font-display-lg text-4xl md:text-5xl text-deep-forest mb-2">10+</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-wider mb-3">Years Experience</div>
              <p className="text-on-surface-variant/70 text-xs leading-relaxed">Pioneering tropical coating solutions since 2016.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
            <div className="bg-[#f0f7f1] rounded-3xl p-6 text-center">
              <div className="font-display-lg text-4xl md:text-5xl text-deep-forest mb-2">8,000+</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-wider mb-3">Colour Range</div>
              <p className="text-on-surface-variant/70 text-xs leading-relaxed">Spectrophotometer precision matching.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
            <div className="bg-[#f0f7f1] rounded-3xl p-6 text-center">
              <div className="font-display-lg text-4xl md:text-5xl text-deep-forest mb-2">300+</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-wider mb-3">Stockists</div>
              <p className="text-on-surface-variant/70 text-xs leading-relaxed">Distribution network across Uganda.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
            <div className="bg-gradient-to-br from-leaf-green to-primary rounded-3xl p-6 text-center text-white">
              <div className="font-display-lg text-2xl md:text-3xl mb-2">Get Started</div>
              <p className="text-white/80 text-xs leading-relaxed mb-4">Connect with our team today.</p>
              <a href="/contact" className="inline-flex items-center gap-1 text-white text-xs font-bold underline underline-offset-2">
                Contact Us <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-leaf-green overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <ScrollReveal delay={50}>
          <h2 className="font-display-lg text-headline-lg text-white mb-8">Ready to Experience the NIM Difference?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
          <p className="font-body-lg text-white/90 mb-12 max-w-2xl mx-auto text-xl">Connect with our technical team today to discuss your project requirements and discover why we are Uganda's preferred coatings partner.</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact#inquiry-form" className="bg-white text-leaf-green font-label-lg px-10 py-5 rounded-lg hover:bg-surface-gray transition-all hover:shadow-lg active:scale-95 cursor-pointer inline-block">Request a Quote</a>
            <button className="bg-deep-forest text-white font-label-lg px-10 py-5 rounded-lg hover:bg-black transition-all hover:shadow-lg active:scale-95 cursor-pointer">Speak to an Expert</button>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
