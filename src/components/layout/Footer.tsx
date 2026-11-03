import React from 'react';
import {
  Phone,
  Printer,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { MallerySternLogo } from '../ui/MSCCLogo';

interface FooterProps {
  onOpenQuote: () => void;
}

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#071B38] text-white border-t-4 border-[#0E336B] transition-colors">
      {/* Main Multi-Column Footer Content */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14">

          {/* Column 1: Brand & Firm Summary (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white p-3 rounded-lg shadow-md">
              <MallerySternLogo isDark={false} />
            </div>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
              Representing California's injured workers since 1976. Mallery &amp; Stern specializes exclusively in Workers' Compensation, workplace accidents, wrongful termination retaliation, and severe bodily injury claims across Los Angeles, Riverside, and San Bernardino counties.
            </p>

            <div className="space-y-2 pt-1 text-xs text-blue-200 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>Over 48 Years of Proven Trial Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>Super Lawyers Rated – Lawrence I. Stern</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>Hablamos Español • No Office Visit Needed</span>
              </div>
            </div>

            {/* Social Media Connect Section */}
            <div className="pt-3">
              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-blue-300 mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0C2A59] hover:bg-[#2D8CFF] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0C2A59] hover:bg-[#E1306C] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0C2A59] hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0C2A59] hover:bg-[#0077B5] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-900 pb-2">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-blue-200">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Q&A (Frequently Asked)', id: 'qa' },
                { name: 'Resources & Forms', id: 'resources' },
                { name: 'Contact Us', id: 'contact' },
                { name: 'Legal Blog', id: 'blog' },
                { name: 'Client Testimonials', id: 'testimonials' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-[#2D8CFF] transition-colors" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-1.5 text-[#2ECC71] hover:text-emerald-300 transition-colors font-bold mt-2"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Request Free Case Review</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Locations (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between border-b border-blue-900 pb-2">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Office Locations
              </h4>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Location 1: Los Angeles Office */}
              <div className="bg-[#0C2A59]/70 border border-blue-900/80 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Los Angeles Office</span>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  5120 West Goldleaf Circle, #380<br />
                  Los Angeles, CA 90056
                </p>

                <div className="pt-2 border-t border-blue-900/60 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <a
                      href="tel:3104730777"
                      className="text-white font-extrabold hover:text-[#2D8CFF] transition-colors"
                    >
                      310-473-0777
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5 text-blue-300 text-[11px]">
                    <Printer className="w-3.5 h-3.5 text-blue-400" />
                    <span>Fax: 310-477-1312</span>
                  </p>
                </div>
              </div>

              {/* Location 2: Rancho Cucamonga Office */}
              <div className="bg-[#0C2A59]/70 border border-blue-900/80 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Rancho Office</span>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  8350 Archibald Avenue, CA, #206<br />
                  Rancho Cucamonga, CA 91370
                </p>

                <div className="pt-2 border-t border-blue-900/60 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <a
                      href="tel:9099489999"
                      className="text-white font-extrabold hover:text-[#2D8CFF] transition-colors"
                    >
                      909-948-9999
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5 text-blue-300 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Serving Inland Empire</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Mandatory Fraud Disclaimer Notice */}
            <div className="bg-[#05142B]/80 border border-blue-950 rounded-lg p-3 text-[10px] sm:text-[11px] text-zinc-400 italic leading-relaxed">
              ***Making a false or fraudulent workers' compensation claim is a felony subject to up to 5 years in prison or a fine of up to $50,000 or double the value of the fraud, whichever is greater or by both imprisonment and fine.***
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer: Copyright, Legal Docs & Disclaimer */}
      <div className="w-full bg-[#041226] border-t border-blue-950 py-5">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-zinc-400">

          <div className="space-y-1">
            <p>
              Copyright &copy; 2026 Mallery &amp; Stern, APC. All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-500">
              The information on this website is for general information purposes only and does not constitute formal legal advice.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            <button
              onClick={() => alert("Terms of Use: Information provided is for educational purposes under California State Bar guidelines.")}
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button
              onClick={() => alert("Privacy Policy: All consultation submissions are kept strictly confidential under attorney-client privilege guidelines.")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => alert("Anti-Spam Policy: Mallery & Stern does not sell or distribute client communication information.")}
              className="hover:text-white transition-colors"
            >
              Anti-spam
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

