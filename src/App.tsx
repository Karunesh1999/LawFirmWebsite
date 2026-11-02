import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { QuoteModal } from './components/ui/QuoteModal';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
        {/* Navigation Bar (Tier 1: White Contact Bar + Tier 2: Navy Navigation Bar) */}
        <Navbar onOpenQuote={() => setIsConsultationOpen(true)} />

        {/* Main Content Area: Only Home Page */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={() => setIsConsultationOpen(true)} />} />
            <Route path="*" element={<HomePage onOpenQuote={() => setIsConsultationOpen(true)} />} />
          </Routes>
        </main>

        {/* Legal Copyright Footer Bar */}
        <footer className="bg-[#09234B] text-zinc-300 py-6 border-t border-blue-950 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-zinc-400">
              &copy; {new Date().getFullYear()} Mallery &amp; Stern. Work Injury Attorneys. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <span>Representing California Workers Since 1976</span>
              <span>•</span>
              <a href="tel:3104730777" className="hover:text-white transition-colors">
                310-473-0777
              </a>
            </div>
          </div>
        </footer>

        {/* Universal Free Consultation Modal */}
        <QuoteModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
