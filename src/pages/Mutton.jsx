import React, { useState } from "react";
import { Link } from "react-router-dom";

function Mutton() {
  const images = [
    "/image/img2.jpg",
    "/image/img3.jpg",
    "/image/img4.webp",
  ];

  const [index, setIndex] = useState(0);
  const [showDesc, setShowDesc] = useState(false);

  // 👉 Slider
  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* 🛒 PRODUCT SECTION */}
      <section className="bg-[#fafafa] py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div>
            <div className="border rounded-xl overflow-hidden relative">

              <img
                src={images[index]}
                className="w-full h-[400px] object-cover transition duration-500"
                alt="product"
              />

              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
              >
                &#10094;
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
              >
                &#10095;
              </button>

            </div>
          </div>

          {/* DETAILS */}
          <div>
            <h1 className="text-3xl primary-text">
              Spicy Chicken Pickle
            </h1>

            <p className="mt-4 primary-text-light">
              Traditional Andhra-style pickle with rich spices.
            </p>

            <div className="mt-4 text-yellow-400">
              ★★★★★ <span className="text-gray-400">(120 reviews)</span>
            </div>

            <div className="mt-6">
              <span className="text-2xl font-bold">₹499</span>
              <span className="line-through text-gray-500 ml-2">₹699</span>
            </div>

            {/* SELECT */}
            <div className="mt-6">
              <label className="block mb-2 font-semibold">
                Select Quantity:
              </label>

              <select className="bg-white border px-4 py-2 rounded-lg w-full">
                <option>250g</option>
                <option>500g</option>
                <option>1kg</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => alert("Added to cart")}
              className="mt-6 w-full py-3 rounded-lg primary-bg text-black"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-6">

        <div className="flex flex-wrap gap-4 justify-between">

          <div className="flex items-center gap-3 bg-gray-50 border rounded-full px-5 py-3 flex-1">
            🌿 Fresh From Farm
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border rounded-full px-5 py-3 flex-1">
            🛡️ No Chemicals
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border rounded-full px-5 py-3 flex-1">
            ☀️ Natural Ripening
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border rounded-full px-5 py-3 flex-1">
            🚚 Fast Delivery
          </div>

        </div>

        {/* ALERT */}
        <div className="mt-6 flex items-center gap-4 bg-orange-50 border rounded-xl p-4">
          <div>📦</div>
          <div>
            <h4 className="text-sm font-semibold">
              Non-returnable item
            </h4>

            <p className="text-sm text-gray-600">
              Please refer to our{" "}
              <Link to="/refund-policy" className="text-orange-600 font-semibold">
                             Return Policy
                           </Link>
            </p>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="mt-6 border rounded-xl overflow-hidden">

          <div
            onClick={() => setShowDesc(!showDesc)}
            className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          >
            <h4 className="font-semibold text-sm">Description</h4>
            <span>{showDesc ? "▲" : "▼"}</span>
          </div>

          {showDesc && (
            <div className="p-4 text-sm text-gray-600 border-t">
              Premium pickles directly from farms. Naturally ripened without chemicals.
            </div>
          )}

        </div>

      </section>
    </>
  );
}

export default Mutton;