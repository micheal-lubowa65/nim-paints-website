"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

export default function Contact() {
  const [inquiryStatus, setInquiryStatus] = useState<"idle" | "processing" | "thanks">("idle");
  const [partnerStatus, setPartnerStatus] = useState<"idle" | "processing" | "thanks">("idle");
  const [selectedSubject, setSelectedSubject] = useState("Product Inquiry");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productSlug = params.get("product");
    if (productSlug) {
      setSelectedSubject("Product Inquiry");
      setSelectedProducts([productSlug]);
    }
  }, []);

  const toggleProduct = (slug: string) => {
    setSelectedProducts((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus("processing");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "inquiry",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: selectedSubject,
          message: formData.get("message"),
          products: selectedProducts,
        }),
      });
      
      if (res.ok) {
        setInquiryStatus("thanks");
        form.reset();
      } else {
        setInquiryStatus("idle");
        alert("Failed to send. Please try again.");
      }
    } catch {
      setInquiryStatus("idle");
      alert("Network error. Please try again.");
    }
    
    setTimeout(() => setInquiryStatus("idle"), 4500);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerStatus("processing");
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "distributor",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          location: formData.get("location"),
          message: formData.get("message"),
        }),
      });
      
      if (res.ok) {
        setPartnerStatus("thanks");
        form.reset();
      } else {
        setPartnerStatus("idle");
        alert("Failed to send. Please try again.");
      }
    } catch {
      setPartnerStatus("idle");
      alert("Network error. Please try again.");
    }
    
    setTimeout(() => setPartnerStatus("idle"), 4500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.classList.toggle("shadow-md", window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="-mt-20">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-deep-forest">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D1F] via-deep-forest to-[#C8920A]/10"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12 md:pb-20 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="inline-block bg-flame-gold text-deep-forest font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.15em] text-xs"
          >
            Beyond Expectations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-display-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter mb-6"
          >
            Get In <span className="text-flame-gold">Touch</span>
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
            Whether you&apos;re looking for expert color advice or interested in joining our distributor network, we&apos;re here to help you build brilliantly.
          </motion.p>
        </div>
      </section>

      {/* Inquiry Form */}
      <ScrollReveal>
      <section className="bg-white py-section-padding border-b border-deep-forest/5">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <div className="lg:col-span-5">
              <span className="text-leaf-green font-label-md uppercase tracking-widest mb-4 block">Customer Support</span>
              <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-deep-forest mb-4">How can we help?</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">Have a question about our products, need a technical consultation, or want to share feedback? Our team is ready to assist you.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-leaf-green">call</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-deep-forest">Office Line</h4>
                    <p className="text-on-surface-variant">+256 393 249 654</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-leaf-green">phone_iphone</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-deep-forest">Mobile Line</h4>
                    <p className="text-on-surface-variant">+256 784 523 877</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-leaf-green">mail</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-deep-forest">Email Us</h4>
                    <p className="text-on-surface-variant">sales@nimpaints.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-leaf-green">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-deep-forest">Operations Manager</h4>
                    <p className="text-on-surface-variant">Paul Gabeya<br />+256 784 523 877</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-leaf-green">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-deep-forest">Head of Sales</h4>
                    <p className="text-on-surface-variant">Edgar Keith Wabwire<br />+256 785 275 476</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <form
                id="inquiry-form"
                onSubmit={handleInquirySubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-6 md:p-8 bg-surface-gray rounded-2xl border border-deep-forest/5"
              >
                <div className="space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Your Name</label>
                  <input name="name" className="w-full bg-white border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="John Doe" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Email Address</label>
                  <input name="email" className="w-full bg-white border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="john@example.com" type="email" required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Phone Contact</label>
                  <input name="phone" className="w-full bg-white border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="+256" type="tel" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Subject</label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full bg-white border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none"
                  >
                    <option>Product Inquiry</option>
                    <option>Color Consultation</option>
                    <option>Technical Support</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                {selectedSubject === "Product Inquiry" && (
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label-md text-deep-forest/60 uppercase">Select Products</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {products.map((p) => (
                        <label
                          key={p.slug}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            selectedProducts.includes(p.slug)
                              ? "border-leaf-green bg-leaf-green/5"
                              : "border-deep-forest/10 bg-white hover:border-leaf-green/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(p.slug)}
                            onChange={() => toggleProduct(p.slug)}
                            className="accent-leaf-green w-4 h-4"
                          />
                          <span className="font-label-md text-deep-forest text-sm">{p.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Message</label>
                  <textarea name="message" className="w-full bg-white border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="How can we assist your project?" rows={4}></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={inquiryStatus !== "idle"}
                    className={`w-full text-white py-4 rounded-lg font-label-lg transition-all flex justify-center items-center gap-2 cursor-pointer ${inquiryStatus === "thanks" ? "bg-royal-purple" : "bg-deep-forest hover:bg-leaf-green"}`}
                  >
                    {inquiryStatus === "idle" && (
                      <>
                        SEND MESSAGE <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                    {inquiryStatus === "processing" && "PROCESSING..."}
                    {inquiryStatus === "thanks" && "THANK YOU"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Partnership Section */}
      <ScrollReveal>
      <section className="bg-surface-container py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="bg-flame-gold/10 text-flame-gold px-4 py-1 rounded-full font-label-md uppercase tracking-wider mb-6 inline-block">Grow With Us</span>
            <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-deep-forest mb-4">Become a Distributor</h2>
            <p className="text-on-surface-variant text-lg">Join Uganda's premier coating network. We partner with visionaries who value quality, reliability, and technical excellence.</p>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-deep-forest/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 bg-deep-forest text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display-lg text-3xl mb-8">Distributor Benefits</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-flame-gold">check_circle</span>
                    <div>
                      <h5 className="font-title-lg mb-1">Exclusive Inventory</h5>
                      <p className="text-surface-variant/70">Priority access to our full range of premium and industrial coatings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-flame-gold">check_circle</span>
                    <div>
                      <h5 className="font-title-lg mb-1">Technical Support</h5>
                      <p className="text-surface-variant/70">On-site training for your staff and direct line to our chemical engineers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-flame-gold">check_circle</span>
                    <div>
                      <h5 className="font-title-lg mb-1">Marketing Kit</h5>
                      <p className="text-surface-variant/70">Branded signage, color catalogs, and localized marketing support.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-surface-variant/50 text-sm">NIM Paints HQ: Plot 3789 Kinawataka Road, Kampala</p>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12">
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Business Identity</label>
                  <input name="company" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="Company or Full Name" type="text" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-deep-forest/60 uppercase">Contact Number</label>
                    <input name="phone" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="+256" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-deep-forest/60 uppercase">Email</label>
                    <input name="email" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="email@example.com" type="email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-deep-forest/60 uppercase">Proposed Region</label>
                    <select name="location" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none">
                      <option>Kampala Central</option>
                      <option>Northern Region (Gulu/Lira)</option>
                      <option>Eastern Region (Jinja/Mbale)</option>
                      <option>Western Region (Mbarara/Fort Portal)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-deep-forest/60 uppercase">Contact Person</label>
                    <input name="name" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="Your name" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-deep-forest/60 uppercase">Current Business Experience</label>
                  <textarea name="message" className="w-full bg-surface-gray border border-deep-forest/10 rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-leaf-green/20 focus:border-leaf-green transition-all outline-none" placeholder="Briefly describe your retail or construction background..." rows={3}></textarea>
                </div>
                <button
                  type="submit"
                  disabled={partnerStatus !== "idle"}
                  className={`w-full text-white py-5 rounded-lg font-label-lg transition-all flex justify-center items-center gap-3 cursor-pointer ${partnerStatus === "thanks" ? "bg-royal-purple" : "bg-leaf-green hover:bg-deep-forest"}`}
                >
                  {partnerStatus === "idle" && (
                    <>
                      APPLY FOR PARTNERSHIP <span className="material-symbols-outlined">corporate_fare</span>
                    </>
                  )}
                  {partnerStatus === "processing" && "PROCESSING..."}
                  {partnerStatus === "thanks" && "THANK YOU"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Distributor Network */}
      <ScrollReveal>
      <section id="distributor-network" className="bg-deep-forest py-section-padding text-white">
        <div className="max-w-container-max mx-auto px-gutter py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-xl">
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-4">DISTRIBUTOR NETWORK</h2>
              <p className="text-surface-variant/70 text-base md:text-lg">Find an authorized NIM Paints dealer near you for genuine products and expert consultation.</p>
            </div>

          </div>
            <div className="space-y-6">
              <div className="bg-flame-gold/10 border border-flame-gold/30 p-6 rounded-xl">
                <h4 className="font-display-lg text-lg md:text-xl text-flame-gold mb-2">Location: East and Central</h4>
                <p className="text-surface-variant/70 text-sm">Dealership / Selected Agents</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "East and Central Hardware - Kiboga",
                  "Hope Investments - Kiboga | Kisa Kyamukama",
                  "H/W - Busunju | KLO Hardware - Lwamata",
                  "Mosee General H/W - Busunju | Zoom Global - Hioma City",
                  "DD General Hardware - Luweero",
                  "MK General Hardware - Luweero | Mirashi H/W - Kigumba",
                  "Akima Enterprises - Luwero",
                  "Mulongo H/W - Luwero Rd | St. Mary H/W - Nakasongola",
                  "Quartz - Gulu | Parise Lord General H/W - Lira",
                  "Obanga Ngeo - Lira",
                  "Kagoma General H/W - Kagoma",
                  "Josh H/W - Kawempe",
                ].map((name) => (
                  <div key={name} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-flame-gold/30 transition-all">
                    <p className="font-body-md text-white/90 text-sm leading-relaxed">{name}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-dashed border-flame-gold/40 p-5 rounded-xl text-center">
                <p className="font-label-lg text-flame-gold">+ Over 300 Stockists (Dealers) across the region</p>
              </div>
            </div>
        </div>
      </section>
      </ScrollReveal>

    </div>
  );
}
