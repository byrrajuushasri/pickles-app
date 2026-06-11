import { useState } from "react";

function RefundPolicy() {
  const [cartOpen, setCartOpen] = useState(false);

  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-gray-100 text-gray-800">

     
      {/* BACK LINK */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <a href="/" className="text-yellow-600">← Back to Home</a>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="bg-yellow-100 rounded-2xl p-6">
          <h1 className="text-2xl font-semibold">
            Refund, Replacement & Exchange Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {today}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">

          {/* BUSINESS INFO */}
          <div className="grid md:grid-cols-2 gap-6 text-sm bg-gray-50 p-5 rounded-xl">
            <div>
              <p><b>Business:</b> pickles</p>
              <p><b>Website:</b> https://pickles.in</p>
              <p><b>Owner:</b> Sai Kiran Bolakonda</p>
            </div>

            <div>
              <p><b>Phone:</b> +91 9573455331</p>
              <p><b>Email:</b> prudviraju1@gmail.com</p>
              <p><b>Location:</b> Kukatpally, Hyderabad</p>
            </div>
          </div>

          {/* 1 */}
          <div>
            <h3 className="font-semibold text-lg">1. Introduction</h3>
            <p className="text-gray-600 mt-1">
              This Refund, Replacement, and Exchange Policy outlines the conditions under which customers may request assistance for products purchased from Mangome.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="font-semibold text-lg text-red-600">
              2. No Refund & Return Policy
            </h3>
            <p className="text-gray-600 mt-1">
              All purchases made through Mangome are final. We do not offer refunds or returns once an order has been placed and delivered.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="font-semibold text-lg">
              3. Replacement & Exchange Eligibility
            </h3>
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
              <li>Product received in damaged condition</li>
              <li>Incorrect item delivered</li>
              <li>Request must be raised within 24 hours of delivery</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="font-semibold text-lg">
              4. Verification Process
            </h3>
            <p className="text-gray-600 mt-1">
              All requests are subject to verification. Customers must provide clear images or video evidence. Approval is strictly at Mangome’s discretion.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h3 className="font-semibold text-lg">
              5. Processing Timeline
            </h3>
            <p className="text-gray-600 mt-1">
              Once approved, replacements will be processed within 24–48 business hours.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h3 className="font-semibold text-lg">
              6. Non-Eligible Cases
            </h3>
            <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
              <li>Requests raised after 24 hours of delivery</li>
              <li>Damage due to misuse or improper handling</li>
              <li>Used, washed, or altered products</li>
              <li>Minor packaging variations that do not affect product quality</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h3 className="font-semibold text-lg">
              7. Contact Information
            </h3>
            <div className="text-gray-600 mt-2 space-y-1">
              <p>📞 +91 9573455331</p>
              <p>📧 prudviraju1@gmail.com</p>
              <p>📍 Kukatpally, Hyderabad</p>
            </div>
          </div>

        </section>
      </main>

    </div>
  );
}

export default RefundPolicy;