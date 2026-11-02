import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
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

        {/* Comprehensive Professional Law Firm Footer */}
        <Footer onOpenQuote={() => setIsConsultationOpen(true)} />

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
