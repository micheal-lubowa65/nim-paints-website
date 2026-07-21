"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import "./ProcessTimeline.css";

/* ─── Step Data ─── */
const steps = [
  {
    title: "Inquiry",
    fullTitle: "Project Inquiry",
    icon: "chat_bubble",
    number: "01",
    color: "#0A2C66",
    accentColor: "#0A2C66",
    desc: "Speak with one of our coating specialists to discuss your project, surface requirements, preferred colors, and the finish you envision.",
    time: "Same Day",
    features: [
      { icon: "groups", label: "Expert Consultation", desc: "Personalized guidance from coating professionals." },
      { icon: "search", label: "Requirement Analysis", desc: "Understanding your surface, environment and expectations." },
      { icon: "palette", label: "Color & Finish Guidance", desc: "Help in selecting the perfect color and finish for your space." },
    ],
    cta: { label: "Book Consultation", href: "/contact" },
  },
  {
    title: "Site Visit",
    fullTitle: "Site Assessment",
    icon: "location_on",
    number: "02",
    color: "#1D8A35",
    accentColor: "#1D8A35",
    desc: "Our technical team visits your location for a professional assessment of substrate conditions, environmental factors, and surface preparation needs.",
    time: "1–2 Days",
    features: [
      { icon: "domain", label: "Substrate Inspection", desc: "Thorough surface analysis for optimal adhesion." },
      { icon: "wb_sunny", label: "Environmental Check", desc: "UV, humidity and weather exposure assessment." },
      { icon: "assignment", label: "Detailed Report", desc: "Written recommendations and specification document." },
    ],
    cta: { label: "Schedule Visit", href: "/contact" },
  },
  {
    title: "Payments",
    fullTitle: "Payment & Quotation",
    icon: "receipt_long",
    number: "03",
    color: "#C8920A",
    accentColor: "#C8920A",
    desc: "Receive a transparent, itemized quote with flexible payment options tailored to projects of all sizes — from single rooms to full commercial complexes.",
    time: "1–2 Days",
    features: [
      { icon: "request_quote", label: "Transparent Pricing", desc: "Itemized breakdown with no hidden charges." },
      { icon: "account_balance", label: "Flexible Options", desc: "Installment plans for large-scale projects." },
      { icon: "verified", label: "Price Guarantee", desc: "Locked pricing with no surprise adjustments." },
    ],
    cta: { label: "Get a Quote", href: "/contact" },
  },
  {
    title: "Delivery",
    fullTitle: "Product Delivery",
    icon: "local_shipping",
    number: "04",
    color: "#D84315",
    accentColor: "#D84315",
    desc: "Timely and reliable logistics ensuring factory-fresh products arrive directly at your project site, properly stored and ready for application.",
    time: "2–5 Days",
    features: [
      { icon: "package_2", label: "Direct Delivery", desc: "From our Kampala facility to your doorstep." },
      { icon: "inventory_2", label: "Quality Sealed", desc: "Products arrive factory-fresh with intact seals." },
      { icon: "schedule", label: "On-Time Guarantee", desc: "Coordinated delivery to match your project timeline." },
    ],
    cta: { label: "Track Delivery", href: "/contact" },
  },
  {
    title: "Painting",
    fullTitle: "Professional Application",
    icon: "format_paint",
    number: "05",
    color: "#C62828",
    accentColor: "#C62828",
    desc: "Certified application by trained professionals, supervised by our technical specialists to ensure precision, consistency, and a flawless finish.",
    time: "Project Dependent",
    features: [
      { icon: "engineering", label: "Certified Painters", desc: "NIM-trained professionals with proven expertise." },
      { icon: "straighten", label: "Precision Techniques", desc: "Spray, roller and brush methods per specification." },
      { icon: "supervisor_account", label: "Technical Supervision", desc: "On-site specialists ensuring quality standards." },
    ],
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    title: "Handover",
    fullTitle: "Project Handover",
    icon: "task_alt",
    number: "06",
    color: "#37474F",
    accentColor: "#37474F",
    desc: "Complete quality certification, final walkthrough, and handover of your transformed space — backed by our industry-leading warranty.",
    time: "Final Day",
    features: [
      { icon: "workspace_premium", label: "Quality Certification", desc: "Documented sign-off on workmanship standards." },
      { icon: "fact_check", label: "Final Walkthrough", desc: "Joint inspection to ensure your complete satisfaction." },
      { icon: "verified_user", label: "Warranty Coverage", desc: "Up to 15-year performance warranty included." },
    ],
    cta: { label: "View Warranty", href: "/contact" },
  },
];

/* ─── Number Colors (matching the reference images) ─── */
const numberColors = ["#0A2C66", "#1D8A35", "#C8920A", "#D84315", "#C62828", "#37474F"];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const step = steps[activeStep];

  /* Scroll active step into view on mobile */
  const scrollToStep = useCallback((index: number) => {
    const el = stepRefs.current[index];
    if (el && timelineRef.current) {
      const container = timelineRef.current;
      const scrollLeft = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    scrollToStep(index);
  };

  /* Auto-scroll on mobile when active changes */
  useEffect(() => {
    scrollToStep(activeStep);
  }, [activeStep, scrollToStep]);

  return (
    <section className="process-section">
      <div className="process-section__inner">

        {/* ─── Header ─── */}
        <ScrollReveal>
          <div className="process-header">
            <span className="process-eyebrow">OUR PROCESS</span>
            <h2 className="process-title">
              Our Process <span className="process-title__accent">and Timeline</span>
            </h2>
            <p className="process-subtitle">
              From inquiry to handover, each step is focused on delivering premium results with transparency and precision at every stage.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Timeline ─── */}
        <ScrollReveal delay={200}>
          <div className="timeline-wrapper">
            {/* Connecting line (desktop) */}
            <div className="timeline-line" aria-hidden="true">
              <motion.div
                className="timeline-line__fill"
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="timeline" ref={timelineRef}>
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  ref={el => { stepRefs.current[i] = el; }}
                  className={`timeline-step ${i === activeStep ? "timeline-step--active" : ""} ${i < activeStep ? "timeline-step--completed" : ""}`}
                  onClick={() => handleStepClick(i)}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                >
                  {/* "CURRENT STEP" label */}
                  <AnimatePresence>
                    {i === activeStep && (
                      <motion.span
                        className="timeline-step__current-label"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        CURRENT STEP
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="timeline-step__circle"
                    style={{
                      background: s.color,
                      borderColor: s.color,
                      color: "#fff",
                    }}
                    whileHover={{ scale: 1.1, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    animate={i === activeStep ? { y: -8, boxShadow: `0 12px 30px ${s.color}40` } : { y: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="material-symbols-outlined timeline-step__icon">{s.icon}</span>
                  </motion.div>

                  <span className="timeline-step__number" style={{ color: numberColors[i] }}>
                    {s.number}
                  </span>
                  <span className="timeline-step__title">{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Mobile dot indicators ─── */}
        <div className="timeline-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`timeline-dot ${i === activeStep ? "timeline-dot--active" : ""}`}
              onClick={() => handleStepClick(i)}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        {/* ─── Content Card ─── */}
        <ScrollReveal delay={300}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="content-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Left: Big Icon */}
              <div className="content-card__left">
                <div
                  className="content-card__icon-big"
                  style={{ background: `${step.color}10`, border: `2px solid ${step.color}20` }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "56px", color: step.color }}>{step.icon}</span>
                </div>
              </div>

              {/* Center: Details */}
              <div className="content-card__center">
                <span className="content-card__badge" style={{ background: step.color }}>
                  STEP {step.number}
                </span>
                <h3 className="content-card__title">{step.fullTitle}</h3>
                <p className="content-card__desc">{step.desc}</p>
                <div className="content-card__time">
                  <span className="material-symbols-outlined content-card__time-icon">schedule</span>
                  <div>
                    <span className="content-card__time-label">ESTIMATED TIME</span>
                    <strong className="content-card__time-value">{step.time}</strong>
                  </div>
                </div>
              </div>

              {/* Right: Features + CTA */}
              <div className="content-card__right">
                <ul className="content-card__features">
                  {step.features.map((f) => (
                    <li key={f.label} className="content-card__feature">
                      <span
                        className="material-symbols-outlined content-card__feature-icon"
                        style={{ background: `${step.color}15`, color: step.color }}
                      >
                        {f.icon}
                      </span>
                      <div>
                        <strong className="content-card__feature-label">{f.label}</strong>
                        <p className="content-card__feature-desc">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href={step.cta.href} className="content-card__btn" style={{ background: step.color }}>
                  {step.cta.label}
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
