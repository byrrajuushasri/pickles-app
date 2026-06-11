import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12  ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white">Spicy Pickle</h2>
          <p className="mt-3 text-sm text-gray-400">
            Authentic homemade pickles delivered fresh to your doorstep.
          </p>
        </div>

        {/* ✅ Our Pickles */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Pickle</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/pickles/mutton" className="hover:text-yellow-400">Mutton</Link></li>
            <li><Link to="/pickles/chicken" className="hover:text-yellow-400">Chicken</Link></li>
            <li><Link to="/pickles/fish" className="hover:text-yellow-400">Fish</Link></li>
            <li><Link to="/pickles/mixture" className="hover:text-yellow-400">Mixture</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" >Shipping Policy</Link></li>
            <li><Link to="/refund-policy" >Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>📞 +91 9876543210</p>
          <p className="mt-2">📧 support@mangome.in</p>
        </div>

      </div>
      <div class="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
    © 2026 Pickles. All rights reserved.
  </div>
    </footer>
  );
}

export default Footer;