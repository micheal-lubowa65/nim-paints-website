import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} | NIM Paints`,
    description: product.desc,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 2);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-deep-forest pt-28 pb-14 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-from),transparent)] from-leaf-green"></div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="flex items-center gap-3 text-surface-variant/50 font-label-md uppercase tracking-wider text-xs mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-white/80">{product.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`inline-block ${product.category === "Exterior" ? "text-royal-purple bg-royal-purple/10" : product.badgeColor + " bg-white/10"} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5`}>
                {product.badge}
              </span>
              <h1 className="font-display-lg text-4xl md:text-5xl text-white mb-5 leading-[1.1]">{product.title}</h1>
              <p className="font-body-lg text-surface-variant/80 text-base mb-6 leading-relaxed">{product.longDesc}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`/contact?product=${product.slug}#inquiry-form`} className="inline-block bg-leaf-green text-white px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all cursor-pointer">
                  Request Quote
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[80vw] sm:w-[280px] h-[80vw] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl bg-white/5">
                <Image src={product.img} alt={product.title} fill sizes="(max-width: 640px) 80vw, 320px" className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-deep-forest/5">
        <div className="max-w-container-max mx-auto px-gutter py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-leaf-green font-display-lg text-3xl mb-1">{product.coverage}</div>
              <div className="text-on-surface-variant/60 font-label-md uppercase tracking-wider text-[10px]">m² per litre</div>
            </div>
            <div className="text-center">
              <div className="text-leaf-green font-display-lg text-3xl mb-1">{product.specs.find(s => s.label === "Drying Time")?.value?.split(" ")[0] || "2"}</div>
              <div className="text-on-surface-variant/60 font-label-md uppercase tracking-wider text-[10px]">Hours Dry</div>
            </div>
            <div className="text-center">
              <div className="text-leaf-green font-display-lg text-3xl mb-1">{product.specs.find(s => s.label === "VOC Level")?.value || "<5"}</div>
              <div className="text-on-surface-variant/60 font-label-md uppercase tracking-wider text-[10px]">VOC g/L</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Specs */}
      <ScrollReveal>
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display-lg text-headline-lg text-deep-forest mb-8">Key Features</h2>
              <ul className="space-y-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-leaf-green text-2xl shrink-0">check_circle</span>
                    <span className="font-body-lg text-on-surface-variant">{f}</span>
                  </li>
                ))}
              </ul>

            </div>
            <div>
              <h2 className="font-display-lg text-headline-lg text-deep-forest mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-4 border-b border-outline/10">
                    <span className="font-label-md text-on-surface-variant/60 uppercase tracking-wider">{spec.label}</span>
                    <span className="font-title-lg text-deep-forest text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <ScrollReveal>
        <section className="py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="font-display-lg text-headline-lg text-deep-forest mb-12">Related Products</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProducts.map((rp) => (
                <Link key={rp.slug} href={`/products/${rp.slug}`} className="group flex items-center gap-8 p-8 bg-surface-container-lowest rounded-2xl hover:shadow-lg transition-all">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image src={rp.img} alt={rp.title} fill sizes="96px" className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-bold uppercase tracking-widest ${rp.badgeColor}`}>{rp.badge}</span>
                    <h3 className="font-display-lg text-title-lg text-deep-forest mt-1 group-hover:text-leaf-green transition-colors">{rp.title}</h3>
                    <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">{rp.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-deep-forest group-hover:text-leaf-green transition-colors">arrow_forward</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        </ScrollReveal>
      )}

      {/* CTA */}
      <ScrollReveal>
      <section className="py-section-padding bg-deep-forest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-headline-lg text-white mb-6">Need Expert Advice?</h2>
          <p className="font-body-lg text-surface-variant/70 max-w-xl mx-auto mb-10">Our technical team can help you select the right product and calculate exactly how much you need.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-flame-gold text-deep-forest px-10 py-4 rounded font-label-lg hover:brightness-110 transition-all">
              CONTACT AN EXPERT
            </Link>
            <Link href="/paint-calculator" className="border border-white/20 text-white px-10 py-4 rounded font-label-lg hover:bg-white/5 transition-all">
              CALCULATE PAINT NEEDED
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
