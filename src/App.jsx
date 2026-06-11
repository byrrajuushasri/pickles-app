import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// Home Sections
import Portfolio from "./Portfolio";
import Banner from "./Banner";
import FeatureBar from "./FeatureBar";
import DeliveryAlert from "./DeliveryAlert";
import PicklesSection from "./PicklesSection";
import FAQ from "./FAQ";

// Pages
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import RefundPolicy from "./pages/Refundpolicy";
import Mutton from "./pages/Mutton";
import Chicken from "./pages/Chicken";
import Fish from "./pages/Fish";
import Mixture from "./pages/Mixture";
import Portfoliopage from "./pages/Portfoliopage";

// Home Component
function Home() {
  return (
    <>
      <Banner />
      <FeatureBar />
      <DeliveryAlert />
      <PicklesSection />
      <Portfolio />   {/* ✅ Correct place */}
      <FAQ />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* Pickles */}
        <Route path="/pickles/mutton" element={<Mutton />} />
        <Route path="/pickles/chicken" element={<Chicken />} />
        <Route path="/pickles/fish" element={<Fish />} />
        <Route path="/pickles/mixture" element={<Mixture />} />

        {/* Portfolio Page (optional) */}
        <Route path="/portfolio" element={<Portfoliopage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;