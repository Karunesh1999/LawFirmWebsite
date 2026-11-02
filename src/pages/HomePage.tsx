import React from 'react';
import {
  Phone,
  Scale,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  FileText,
  Star,
  Briefcase
} from 'lucide-react';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#1F2937]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Exact Match to Image 2) */}
      {/* - Top: Marble Texture Pattern */}
      {/* - Bottom: Deep Navy Blue Wave Banner (#0E336B) */}
      {/* - Right: Lady Justice Sky-Blue Silhouette */}
      {/* - Text: WE'RE THE WORKERS' COMPENSATION SPECIALISTS THAT can help you */}
      {/* ======================================================== */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#F3F4F6] via-white to-white border-b border-zinc-200 scroll-mt-24">
        {/* Subtle Marble Texture Background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px), radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-0 relative z-10">
          {/* Main Hero Container */}
          <div className="relative min-h-[460px] sm:min-h-[520px] rounded-t-3xl overflow-hidden flex flex-col justify-end">
            {/* Lady Justice Silhouette in Sky Blue on the Right */}
            <div className="absolute top-0 right-0 sm:right-6 lg:right-16 w-64 sm:w-80 lg:w-96 h-full flex items-center justify-center pointer-events-none z-10">
              <svg
                viewBox="0 0 300 450"
                className="w-full h-full max-h-[440px] text-[#2D8CFF] opacity-90 drop-shadow-md"
                fill="currentColor"
              >
                {/* Lady Justice Silhouette SVG Shape */}
                <g>
                  {/* Upraised Arm holding balance scales */}
                  <path d="M 180 50 L 220 20 L 235 30 L 195 65 Z" />
                  {/* Head with blindfold */}
                  <circle cx="160" cy="70" r="22" />
                  <path d="M 142 66 Q 160 62 178 66 L 178 74 Q 160 70 142 74 Z" fill="#FFFFFF" opacity="0.6" />
                  {/* Torso & Robes */}
                  <path d="M 140 92 C 145 130 130 180 120 230 C 110 280 100 340 90 440 L 220 440 C 215 350 205 280 195 210 C 185 160 180 120 175 92 Z" />
                  {/* Left Arm holding sword */}
                  <path d="M 140 105 L 105 135 L 110 150 L 140 125 Z" />
                  <rect x="100" y="140" width="6" height="130" rx="3" fill="#2D8CFF" />
                  {/* Scales of Justice Beam & Bowls */}
                  <line x1="190" y1="20" x2="270" y2="40" stroke="currentColor" strokeWidth="4" />
                  <line x1="195" y1="25" x2="190" y2="90" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="265" y1="42" x2="270" y2="105" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 175 90 Q 190 105 205 90 Z" fill="currentColor" />
                  <path d="M 255 105 Q 270 120 285 105 Z" fill="currentColor" />
                </g>
              </svg>
            </div>

            {/* Deep Blue Wave Cut Banner on Bottom (Image 2) */}
            <div className="bg-[#0E336B] text-white p-8 sm:p-14 lg:p-16 rounded-3xl relative z-20 shadow-2xl mt-12 sm:mt-24">
              <div className="max-w-2xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block">
                  Representing California's Injured Workers Since 1976
                </span>

                {/* Big White Bold Headline matching Image 2 */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] font-display">
                  We're The <br />
                  Workers' <br />
                  Compensation <br />
                  Specialists That
                </h1>

                {/* Script Font "can help you" with Green Underline */}
                <div className="pt-1">
                  <span className="text-3xl sm:text-5xl text-blue-100 font-serif italic tracking-wide lowercase inline-block relative pr-4">
                    can help you
                    <span className="block w-full h-1 bg-[#2ECC71] mt-1 rounded-full"></span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-blue-100 pt-3 max-w-lg leading-relaxed">
                  Have you been injured on the job in Los Angeles, Riverside, or San Bernardino County? Get aggressive, compassionate legal representation with no upfront fees.
                </p>

                {/* Action CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-2"
                  >
                    <span>Request Free Case Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:3104730777"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#2ECC71]" />
                    <span>Call: 310-473-0777</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MISSION / INTRO STATEMENT (Exact Match to Image 3) */}
      {/* ======================================================== */}
      <section id="mission" className="py-20 bg-[#FFFFFF] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
          {/* Paragraph 1 matching Image 3 */}
          <p className="text-lg sm:text-2xl text-[#1F2937] font-normal leading-relaxed">
            To injured workers across the <strong className="font-bold text-[#0E336B]">Los Angeles, San Bernardino, and Riverside Counties</strong>, Mallery &amp; Stern is the one law firm specializing in Workers' Compensation who brings top quality assistance to all their clients, representing those who are injured at work or from work-related activities, such as physical and emotional injuries suffered from negligence and defective products, so that injured workers get a fair and reasonable benefit from their employment insurance!
          </p>

          {/* Established Since 1976 Tag matching Image 3 */}
          <div className="pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E336B] tracking-tight">
              Mallery &amp; Stern has been representing California's Injured Workers since 1976.
            </h2>
          </div>

          {/* Required California Legal Warning Disclaimer (Image 3) */}
          <div className="pt-4 border-t border-zinc-200">
            <p className="text-xs sm:text-sm text-zinc-500 italic max-w-3xl mx-auto leading-relaxed">
              ***Making a false or fraudulent workers' compensation claim is a felony subject to up to 5 years in prison or a fine of up to $50,000 or double the value of the fraud, whichever is greater or by both imprisonment and fine.***
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "WE ARE HERE FOR YOU" (Exact Match to Image 4) */}
      {/* ======================================================== */}
      <section id="about" className="py-20 bg-[#F9FAFB] border-y border-zinc-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Text matching Image 4 */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF] block">
                  About Our Firm
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                  We Are Here For You
                </h2>
                <div className="w-16 h-1 bg-[#0E336B]"></div>
              </div>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  At Mallery &amp; Stern, we focus on <strong>Work Injuries, Wrongful Termination, Wage &amp; Hour Disputes, and Serious Bodily Injury Claims!</strong> We're here to listen to you and help you navigate the legal system.
                </p>

                <p className="font-medium text-[#111827]">
                  To Our Essential Heroes - We protect you because you protect us! Thank You for all you do during these hard times!
                </p>

                <p>
                  We offer a free consultation and we'll gladly discuss your case with you at your convenience.
                </p>
              </div>

              {/* Consultation Features List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#1F2937]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>No Recovery, No Attorney Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>Free Confidential Case Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>Se Habla Español</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                  <span>No Office Visit Needed</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-lg transition-all"
                >
                  Schedule Your Free Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Visual Card matching Image 4 */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-300 bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop"
                  alt="Law library and scales of justice"
                  className="w-full h-[400px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/90 via-[#0E336B]/40 to-transparent"></div>

                {/* Overlay Box with [M || S] and MALLERY & STERN */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white space-y-4">
                  <div className="w-16 h-16 border-2 border-white p-1 rounded">
                    <div className="w-full h-full border border-blue-200 flex items-center justify-center text-xl font-bold tracking-wider">
                      M || S
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-widest font-display text-white">
                    Mallery &amp; Stern
                  </h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-blue-200 font-semibold">
                    Work Injury Attorneys
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. PRACTICE AREAS / LEGAL SPECIALIZATIONS */}
      {/* ======================================================== */}
      <section id="services" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Areas of Specialization
            </h2>
            <p className="text-zinc-600 text-sm">
              We focus on protecting employees who have suffered work-related injuries or employment disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: 'Work Injuries',
                desc: 'Repetitive stress injuries, heavy lifting back injuries, construction site accidents, machine injuries, and catastrophic occupational hazards.'
              },
              {
                icon: Scale,
                title: 'Wrongful Termination',
                desc: 'Illegal retaliation for reporting unsafe working conditions or filing a rightful workers’ compensation claim in California.'
              },
              {
                icon: FileText,
                title: 'Wage & Hour Disputes',
                desc: 'Unpaid overtime, misclassification of independent contractors, denied rest breaks, and off-the-clock labor violations.'
              },
              {
                icon: ShieldCheck,
                title: 'Bodily Injury Claims',
                desc: 'Permanent disability, severe head or spinal trauma, orthopedic fractures, and long-term medical care benefits.'
              }
            ].map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F9FAFB] border border-zinc-200 rounded-xl p-6 space-y-4 hover:border-[#0E336B] transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0E336B] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#2D8CFF]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-[#0E336B] tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. RETAIN REPRESENTATION & OFFICE LOCATIONS (Image 5) */}
      {/* ======================================================== */}
      <section id="contact" className="py-20 bg-[#F3F4F6] border-t border-zinc-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: RETAIN EXPERIENCED REPRESENTATION matching Image 5 */}
            <div id="representation" className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                Retain Experienced Representation
              </h2>

              <ul className="space-y-3 text-base text-zinc-800 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>Free Phone Consultations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>No Office Visit Needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>Hablamos Español</span>
                </li>
              </ul>

              {/* Super Lawyers Badge matching Image 5 */}
              <div className="pt-4">
                <div className="inline-block border-2 border-zinc-300 rounded-xl bg-white p-4 shadow-md max-w-xs">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                    Rated By
                  </span>
                  <div className="text-xl font-black text-[#111827] tracking-tight font-serif mt-0.5">
                    Super Lawyers
                  </div>
                  {/* Orange Ribbon with Lawrence I. Stern & 10 YEARS */}
                  <div className="mt-2 bg-[#FF5500] text-white px-3 py-1.5 rounded text-xs font-black uppercase tracking-wide text-center">
                    Lawrence I. Stern
                  </div>
                  <div className="text-center text-[10px] font-extrabold uppercase tracking-widest text-[#FF5500] mt-1.5">
                    10 Years
                  </div>
                </div>
              </div>

              {/* Consultation Quick Trigger */}
              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Request Free Phone Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: OFFICE LOCATIONS matching Image 5 */}
            <div id="locations" className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                Office Locations
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Los Angeles Office */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#0E336B] font-extrabold text-base uppercase">
                    <MapPin className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                    <span>Los Angeles Office</span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed">
                    5120 West Goldleaf Circle, #380 <br />
                    Los Angeles, CA 90056
                  </p>

                  <div className="pt-2 border-t border-zinc-100 space-y-1 text-xs">
                    <p>
                      <strong className="text-zinc-900 font-bold">Phone: </strong>
                      <a href="tel:3104730777" className="text-[#0E336B] font-extrabold hover:underline">
                        310-473-0777
                      </a>
                    </p>
                    <p className="text-zinc-500">
                      <strong>Fax: </strong> 310-477-1312
                    </p>
                  </div>
                </div>

                {/* Rancho Office */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#0E336B] font-extrabold text-base uppercase">
                    <MapPin className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                    <span>Rancho Office</span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed">
                    8350 Archibald Avenue, CA, #206 <br />
                    Rancho Cucamonga, CA 91730
                  </p>

                  <div className="pt-2 border-t border-zinc-100 space-y-1 text-xs">
                    <p>
                      <strong className="text-zinc-900 font-bold">Phone: </strong>
                      <a href="tel:9099489999" className="text-[#0E336B] font-extrabold hover:underline">
                        909-948-9999
                      </a>
                    </p>
                    <p className="text-zinc-500">
                      Serving Inland Empire &amp; San Bernardino
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. COMMON WORKERS' COMP Q&A (FAQ) */}
      {/* ======================================================== */}
      <section id="qa" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Workers' Comp Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Frequently Asked Questions (Q&amp;A)
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What should I do immediately after getting injured at work?',
                a: 'Report your injury to your employer in writing immediately, request a DWC-1 claim form, seek medical treatment, and consult with a workers’ compensation attorney before speaking to the insurance company adjuster.'
              },
              {
                q: 'Can my employer fire me for filing a workers’ compensation claim?',
                a: 'No. California Labor Code Section 132a makes it strictly illegal for an employer to fire, demote, or discriminate against an employee for filing a workers’ compensation claim.'
              },
              {
                q: 'How much does it cost to hire Mallery & Stern?',
                a: 'We work on a contingency fee basis. There are zero upfront costs or out-of-pocket legal fees. We only get paid if we recover compensation for your case.'
              },
              {
                q: 'What benefits am I entitled to receive under California law?',
                a: 'Benefits include 100% covered medical care, temporary disability wage replacement, permanent disability compensation, and supplemental job displacement vouchers if you cannot return to your prior role.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#F9FAFB] border border-zinc-200 rounded-xl p-5 space-y-2">
                <h3 className="font-bold text-base text-[#0E336B]">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. RESOURCES SECTION (For Navbar "RESOURCES") */}
      {/* ======================================================== */}
      <section id="resources" className="py-20 bg-[#F9FAFB] border-t border-zinc-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Legal Knowledge &amp; Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Injured Worker Resources
            </h2>
            <p className="text-zinc-600 text-sm">
              Essential rights, official California forms, and critical timelines every injured employee should know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#2D8CFF]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                California DWC-1 Claim Form
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                By California law, your employer must provide the official Workers’ Compensation Claim Form (DWC-1) within one working day of learning of your injury.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Get Guidance on Filing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#2ECC71]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                Medical Treatment Rights
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                You are entitled to reasonable and necessary medical care paid entirely by the insurance carrier with no co-pays or deductibles.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Protect Your Treatment <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#0E336B]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                Disability Benefits Guide
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Understand the difference between Temporary Disability (TD) wage replacements and Permanent Disability (PD) impairment payouts.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Learn Your Rights <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. BLOG / LEGAL INSIGHTS (For Navbar "BLOG") */}
      {/* ======================================================== */}
      <section id="blog" className="py-20 bg-white border-t border-zinc-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Legal Insights &amp; Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Workers' Compensation Blog
            </h2>
            <p className="text-zinc-600 text-sm">
              Recent articles and case developments from our Southern California legal team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "What to Do If Your California Workers' Comp Claim Is Denied",
                date: "Updated Recently",
                tag: "Claim Appeals",
                snippet: "Insurance adjusters often deny valid claims hoping injured workers walk away. Learn how an experienced attorney files an Application for Adjudication."
              },
              {
                title: "Understanding Cumulative Trauma & Repetitive Stress at Work",
                date: "Legal Guide",
                tag: "Work Injuries",
                snippet: "You don't need a single catastrophic accident. Gradual wear and tear, carpal tunnel, and chronic back pain are fully covered under California law."
              },
              {
                title: "Third-Party Lawsuits vs Workers' Comp: Can You File Both?",
                date: "Specialized Analysis",
                tag: "Bodily Injury",
                snippet: "If a negligent contractor, machine manufacturer, or driver caused your on-the-job injury, you may recover both workers' comp and third-party damages."
              }
            ].map((article, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] border border-zinc-200 rounded-xl p-6 space-y-3 flex flex-col justify-between hover:border-[#0E336B] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-blue-100 text-[#0E336B] font-bold px-2.5 py-0.5 rounded">
                      {article.tag}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-[#0E336B] leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
                  >
                    Discuss This Topic <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. CLIENT TESTIMONIALS (Exact Match to Image 1 Nav item) */}
      {/* ======================================================== */}
      <section id="testimonials" className="py-20 bg-[#0E336B] text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase font-display">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Mallery & Stern fought for me when the insurance company denied my back surgery. Thanks to Lawrence Stern and the team, I got the treatment I needed and a substantial financial settlement.",
                author: "Carlos R.",
                location: "Los Angeles, CA",
                type: "Warehouse Worker Injury"
              },
              {
                quote: "After 22 years on the job, I suffered a repetitive stress injury. Mallery & Stern treated me like family, handled all paperwork without me needing to leave home, and won my case.",
                author: "Maria S.",
                location: "Riverside, CA",
                type: "Repetitive Strain Claim"
              },
              {
                quote: "Professional, responsive, and aggressive against big insurance defense attorneys. If you've been hurt at work in California, this is the only firm you should call.",
                author: "David L.",
                location: "Rancho Cucamonga, CA",
                type: "Construction Fall Settlement"
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#09234B] border border-blue-900 rounded-xl p-6 space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-blue-100 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-blue-900/60">
                  <h4 className="font-bold text-sm text-white">{t.author}</h4>
                  <p className="text-[11px] text-blue-300">{t.location} • {t.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={onOpenQuote}
              className="bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
            >
              Get Your Free Confidential Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
