import React from "react";

function About() {
  return (
    <section className="bg-[#fafafa] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold primary-text">
          About Us
        </h1>

        {/* INTRO */}
        <p className="mt-6 text-gray-600 text-lg">
          Welcome to <span className="font-semibold">Mangome Pickles</span> – 
          where tradition meets taste. We bring you authentic Andhra-style pickles 
          made with love, passion, and age-old recipes passed down through generations.
        </p>

        {/* SECTION */}
        <div className="mt-10 text-left space-y-6">

          <div>
            <h2 className="text-2xl font-semibold primary-text">
              🌿 Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              To deliver fresh, homemade, and chemical-free pickles that remind you 
              of your home and childhood memories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold primary-text">
              🧂 Our Speciality
            </h2>
            <p className="text-gray-600 mt-2">
              We use premium quality ingredients, handpicked spices, and traditional 
              preparation methods to ensure rich taste and long-lasting freshness.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold primary-text">
              ❤️ Why Choose Us?
            </h2>
            <ul className="text-gray-600 mt-2 list-disc pl-6 space-y-1">
              <li>100% Homemade & Hygienic</li>
              <li>No Artificial Preservatives</li>
              <li>Authentic Andhra Taste</li>
              <li>Freshly Prepared on Order</li>
              <li>Fast & Safe Delivery</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;