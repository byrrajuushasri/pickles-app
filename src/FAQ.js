import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Are your pickles homemade?",
      a: "Yes, all our pickles are freshly prepared using traditional homemade recipes.",
    },
    {
      q: "How long do pickles last?",
      a: "Our pickles can last up to 3-6 months when stored in a cool and dry place.",
    },
    {
      q: "Do you use preservatives?",
      a: "No, we use natural ingredients and traditional preservation methods only.",
    },
    {
      q: "Is delivery available across India?",
      a: "Yes, we deliver across India with fast and secure packaging.",
    },
    {
      q: "How spicy are your pickles?",
      a: "Our pickles are medium to high spicy, but we maintain a perfect balance of flavor.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 text-black">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-2xl text-center primary-text">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mt-2">
          Everything you need to know about our pickles
        </p>

        <div className="w-full mx-auto mt-10 space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2   rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                {item.q}
                <span style={{ fontSize: "x-large" }}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 pb-4 text-gray-400 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FAQ;