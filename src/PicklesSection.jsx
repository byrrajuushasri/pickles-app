import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PicklesSection() {
const [cartOpen, setCartOpen] = useState(false);
  const [mattonIndex, setmattonIndex] = useState(0);
  const [ChickenIndex, setChickenIndex] = useState(0);
  const [fieldsIndex, setFieldsIndex] = useState(0);
  const [MixtureIndex, setMixtureIndex] = useState(0);

  const [qty, setQty] = useState({
    matton: 1,
    chicken: 1,
    fields: 1,
    mixture: 1,
  });

  const mattonSlides = ["image/img4.WEBP", "image/img2.jpg", "image/img3.jpg"];
  const ChickenSlides = ["image/img4.WEBP", "image/img3.jpg", "image/img5.WEBP"];
  const fieldsSlides = ["image/img4.WEBP", "image/img2.jpg", "image/img3.jpg"];
  const MixtureSlides = ["image/img4.WEBP", "image/img2.jpg", "image/img3.jpg"];

  // 🟢 AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setmattonIndex((p) => (p + 1) % mattonSlides.length);
      setChickenIndex((p) => (p + 1) % ChickenSlides.length);
      setFieldsIndex((p) => (p + 1) % fieldsSlides.length);
      setMixtureIndex((p) => (p + 1) % MixtureSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 👉 SLIDER
  const renderSlider = (slides, index) => (
    <div
      className="flex transition-transform duration-1000 ease-in-out"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      {slides.map((img, i) => (
        <div key={i} className="min-w-full h-52 overflow-hidden">
    <Link to="/checkout"> <img
            src={img}
            className="w-full h-full object-cover"
            alt=""
          /></Link> 
        </div>
      ))}
    </div>
  );

  // 👉 DOTS
  const renderDots = (index, length, setIndex) => (
    <div className="flex justify-center gap-2 py-3">
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-2 h-2 rounded-full ${
            index === i ? "bg-gray-700 w-4" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );

  // 👉 QTY HANDLER
  const updateQty = (key, value) => {
    setQty((prev) => ({
      ...prev,
      [key]: Math.max(1, prev[key] + value),
    }));
  };

  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
<h2 class="text-3xl md:text-2xl text-center text-gray-800">
      Our Spicy Pickles
    </h2>
         <p class="text-center text-gray-500 mt-2">
      Mangoes, pickles, offers & specials in one place
    </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {/* 🥩 MATTON */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {renderSlider(mattonSlides, mattonIndex)}
            {renderDots(mattonIndex, mattonSlides.length, setmattonIndex)}

            <div className="p-5 text-center">
              <h3>Matton Chicken</h3>
              <p className="text-gray-500">Hot & Spicy</p>
              <p className="text-red-500 font-bold">₹300</p>

              <div className="flex justify-center items-center mt-4 border rounded-lg w-[55%] mx-auto overflow-hidden">
                <button onClick={() => updateQty("matton", -1)} class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">-</button>
                <span className="px-4">{qty.matton}</span>
                <button onClick={() => updateQty("matton", 1)} class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">+</button>
              </div>
              <button class="mt-5 w-full py-2 rounded-lg bg-yellow-200 text-black font-semibold cursor-not-allowed opacity-80">
             Coming Soon May 30
          </button>
            </div>
          </div>

          {/* 🍗 CHICKEN */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {renderSlider(ChickenSlides, ChickenIndex)}
            {renderDots(ChickenIndex, ChickenSlides.length, setChickenIndex)}

            <div className="p-5 text-center">
              <h3>Chicken Pickle</h3>
              <p className="text-gray-500">Rich Taste</p>
              <p className="text-red-500 font-bold">₹350</p>

              <div className="flex justify-center items-center mt-4 border rounded-lg w-[55%] mx-auto overflow-hidden">
                <button onClick={() => updateQty("chicken", -1)}  class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">-</button>
                <span className="px-4">{qty.chicken}</span>
                <button onClick={() => updateQty("chicken", 1)} class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">+</button>
              </div>
              <button class="mt-5 w-full py-2 rounded-lg bg-yellow-200 text-black font-semibold cursor-not-allowed opacity-80">
             Coming Soon May 30
          </button>
            </div>
          </div>

          {/* 🌶 FIELDS */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {renderSlider(fieldsSlides, fieldsIndex)}
            {renderDots(fieldsIndex, fieldsSlides.length, setFieldsIndex)}

            <div className="p-5 text-center">
              <h3>Fields Chicken</h3>
              <p className="text-gray-500">Homemade Style</p>
              <p className="text-red-500 font-bold">₹300</p>

              <div className="flex justify-center items-center mt-4 border rounded-lg w-[55%] mx-auto overflow-hidden">
                <button onClick={() => updateQty("fields", -1)} class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">-</button>
                <span className="px-4">{qty.fields}</span>
                <button onClick={() => updateQty("fields", 1)} class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">+</button>
              </div>
              <button class="mt-5 w-full py-2 rounded-lg bg-yellow-200 text-black font-semibold cursor-not-allowed opacity-80">
             Coming Soon May 30
          </button>
            </div>
          </div>

          {/* 🍯 MIXTURE */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            {renderSlider(MixtureSlides, MixtureIndex)}
            {renderDots(MixtureIndex, MixtureSlides.length, setMixtureIndex)}

            <div className="p-5 text-center">
              <h3>Mixture Chicken</h3>
              <p className="text-gray-500">Combo Flavors</p>
              <p className="text-red-500 font-bold">₹400</p>

              <div className="flex justify-center items-center mt-4 border rounded-lg w-[55%] mx-auto overflow-hidden">
                <button onClick={() => updateQty("mixture", -1)}  class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">-</button>
                <span className="px-4">{qty.mixture}</span>
                <button onClick={() => updateQty("mixture", 1)}  class="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-2xl">+</button>
              </div>

            <button 
  onClick={() => setCartOpen(true)}  
  className="mt-5 w-full py-2 bg-green-600 text-white rounded-lg"
>
  🛒 Add to Cart
</button>

{/* OVERLAY */}
{cartOpen && (
  <div
    onClick={() => setCartOpen(false)}
    className="fixed inset-0 bg-black/50 z-40"
  ></div>
)}

{/* CART DRAWER */}
<div
  className={`fixed top-0 right-0 h-full w-[420px] bg-white z-50 shadow-2xl
  transform transition-transform duration-300 flex flex-col
  ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
>

  {/* HEADER */}
  <div className="flex justify-between items-center px-5 py-4 border-b">
    <h2 className="text-lg font-semibold">🛒 My Cart (8)</h2>
    <button
      onClick={() => setCartOpen(false)}
      className="text-xl hover:text-red-500"
    >
      ✖
    </button>
  </div>

  {/* CART ITEMS */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">

    <div className="flex items-center gap-3 border rounded-lg p-3">
      <img
        src="/image/img2.jpg"
        className="w-16 h-16 rounded-md object-cover"
        alt=""
      />

      <div className="flex-1">
        <h4 className="font-semibold text-sm">Sindhura</h4>
        <p className="text-xs text-gray-500">(5 kg box)</p>

        <div className="flex items-center gap-2 mt-2">
          <button className="px-2 border rounded">-</button>
          <span className="text-sm">8</span>
          <button className="px-2 border rounded">+</button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">₹4,800</p>
      </div>
    </div>

    {/* SAVINGS */}
    <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
      <p className="text-sm text-green-700 font-medium">
        🎉 You saved ₹480 on this order
      </p>
      <p className="text-xs text-green-600">Best offer auto-applied</p>
    </div>

    {/* PRICE */}
    <div className="border rounded-lg p-3 text-sm space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹4,800</span>
      </div>

      <div className="flex justify-between text-green-600">
        <span>Offer discount</span>
        <span>-₹480</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span className="text-green-600">FREE</span>
      </div>

      <hr />

      <div className="flex justify-between font-semibold text-base">
        <span>Total</span>
        <span>₹4,320</span>
      </div>
    </div>

  </div>

  {/* FOOTER */}
  <div className="border-t p-4 space-y-2">
    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:opacity-90">
       <Link to="/checkout">Proceed to Checkout</Link>
    </button>

    <button
      onClick={() => setCartOpen(false)}
      className="w-full border py-2 rounded-lg text-gray-700 hover:bg-gray-100"
    >
      Continue Shopping
    </button>
  </div></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PicklesSection;