import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './css/style.css';

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    "✨ 10% OFF (up to ₹500) on Orders Above ₹3,999",
    "🚚 Free Delivery Available",
    "🔥 Fresh Homemade Pickles Available"
  ];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔝 TOP BAR */}
      <div className="topbar">
        <section className="slider-section">
          <div className="slider-container">

            <button className="arrow left" onClick={prevSlide}>
              &#10094;
            </button>

            <div className="slider-wrapper overflow-hidden w-full">
              <div
                className="slider-text flex transition-transform duration-[1500ms] ease-in-out w-full"
                style={{
                  transform: `translateX(-${slideIndex * 100}%)`,
                }}
              >
                {slides.map((text, i) => (
                  <div key={i} className="min-w-full text-center">
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="arrow right" onClick={nextSlide}>
              &#10095;
            </button>

          </div>
        </section>
      </div>

      {/* 🧭 HEADER */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">

        <h1 className="text-2xl font-bold primary-text">
          <Link to="/">SpicyPickles</Link>
        </h1>

        <nav className="hidden md:flex space-x-8 primary-text font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pickles/mutton">Mutton</Link>
          <Link to="/pickles/chicken">Chicken</Link>
          <Link to="/pickles/fish">Fish</Link>
          <Link to="/pickles/mixture">Mixture</Link>
          <Link to="/portfolio">Portfolio</Link>
           
        </nav>

        {/* 🛒 CART BUTTON */}
       <button
  onClick={() => setCartOpen(true)}
  className="relative hover:text-black transition"
>
  🛒
  <span className="absolute -top-2 -right-2 text-xs primary-bg text-white px-1.5 rounded-full">
    2
  </span>
</button>
      </header>
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
  </div>

</div>
    </>
  );
}

export default Header;