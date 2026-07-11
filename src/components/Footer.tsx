import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f3] pt-16 pb-10">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Newsletter card */}
        <div className="bg-deep-forest rounded-3xl p-8 md:p-12 lg:p-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left: title + description */}
            <div className="max-w-md">
              <h3 className="font-display-lg text-3xl md:text-4xl text-white mb-4 tracking-tight">
                Subscribe our newsletter
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Subscribe to receive technical guides, architectural color trends, and exclusive industrial offers from NIM Paints.
              </p>
            </div>

            {/* Right: email form */}
            <div>
              <p className="text-white/50 text-xs mb-3">Stay up to date</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:ring-2 focus:ring-leaf-green outline-none w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-leaf-green text-deep-forest font-bold text-sm hover:bg-leaf-green/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/30 text-xs mt-3">
                By subscribing you agree to our <span className="underline">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pb-10">
          {/* Logo + tagline + socials */}
          <div className="max-w-xs">
            <Image
              src="/nim-logo-site-600x135.png"
              alt="NIM Paints"
              width={160}
              height={36}
              className="h-10 w-auto mb-4"
            />
            <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-6">
              Excellence in every layer. Pioneering tropical coating solutions since 2016. Beyond Expectations.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/NimpaintsUganda" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-deep-forest/20 flex items-center justify-center text-deep-forest hover:bg-deep-forest hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/Nimpaints" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-full border border-deep-forest/20 flex items-center justify-center text-deep-forest hover:bg-deep-forest hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@NimpaintsUganda" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-deep-forest/20 flex items-center justify-center text-deep-forest hover:bg-deep-forest hover:text-white transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/products" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Products</Link></li>
                <li><Link href="/projects" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Tools</h4>
              <ul className="space-y-3">
                <li><Link href="/color-visualizer" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Visualizer</Link></li>
                <li><Link href="/paint-calculator" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Calculator</Link></li>
                <li><Link href="/faq" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/sustainability" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Sustainability</Link></li>
                <li><Link href="/careers" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Careers</Link></li>
                <li><a href="mailto:sales@nimpaints.com" className="text-on-surface-variant/60 text-sm hover:text-deep-forest transition-colors">Email Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-deep-forest font-bold text-sm mb-4">Contact</h4>
              <ul className="space-y-3 text-on-surface-variant/60 text-sm">
                <li>P.O. Box 5234 Kla (U)</li>
                <li className="italic">Plot 3789 Kinawataka Road,<br />Kampala, Uganda</li>
                <li>Office Line — +256 393 249 654</li>
                <li>Mobile line — +256 784 523 877</li>
                <li>Email: sales@nimpaints.com</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-deep-forest/10">
                <h4 className="text-deep-forest font-bold text-sm mb-4">Key Contacts</h4>
                <div className="space-y-3 text-on-surface-variant/60 text-sm">
                  <div>
                    <p className="font-medium text-on-surface-variant/80">Operations Manager</p>
                    <p>Paul Gabeya</p>
                    <p>+256 784 523 877</p>
                  </div>
                  <div>
                    <p className="font-medium text-on-surface-variant/80">Head of Sales</p>
                    <p>Edgar Keith Wabwire</p>
                    <p>+256 785 275 476</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-deep-forest/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/40 text-xs">
            &copy; {new Date().getFullYear()} NIM Paints (U) Ltd. All Rights Reserved.
          </p>
          <p className="text-on-surface-variant/40 text-xs italic">
            Coloring Beyond Expectations
          </p>
        </div>
      </div>
    </footer>
  );
}
