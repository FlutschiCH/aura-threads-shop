
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Use the @ alias to point directly to the src folder
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Import all pages
import { HomePage } from '@/pages/HomePage';

import ShopPage from '@/pages/ShopPage';
import PricingPage from '@/pages/PricingPage';
import AboutPage from '@/pages/AboutPage';
import { LoginPage } from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
