import React, { useState, useEffect } from "react";

function Banner() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { img: "image/banner1.png", title: "Chicken Pickle", desc: "Hot & Spicy Homemade" },
    { img: "image/img3.jpg", title: "Mutton Pickle", desc: "Rich Traditional Taste" },
    { img: "image/banner2.jpg", title: "Fish Pickle", desc: "Coastal Flavor" },
  ];

  // 👉 AUTO SLIDE (SLOW)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // ⬅️ slow (6 sec)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={slide.img}
              className="w-full h-[550px] object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="mt-3">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔵 DOTS */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Banner;