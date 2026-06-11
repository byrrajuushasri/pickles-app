import { useState } from "react";

function DeliveryAlert() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <div className="rounded-xl border overflow-hidden">

        {/* TOP ALERT */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#fef3e2]">

          <div className="flex items-center gap-4">

            {/* LOCATION ICON */}
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center">
              📍
            </div>

            <p className="text-sm text-gray-800">
              Premium pickle delivery is limited to selected areas this season — please confirm we serve your location before you order.
            </p>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-50"
          >
            View Delivery Areas →
          </button>

        </div>

        {/* BOTTOM ALERT */}
        <div className="flex items-center gap-4 px-6 py-4 bg-green-50">

          {/* WHATSAPP ICON */}
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            📱
          </div>

          <p className="text-sm text-gray-700">
            Outside these areas?
            <span className="text-green-600 font-semibold underline cursor-pointer">
              Contact us on WhatsApp
            </span>
            — our team will assist with your order. (delivery charges may apply)
          </p>

        </div>

      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-xl p-5">

            <h2 className="text-lg font-bold mb-3">
              Delivery Areas
            </h2>

            <ul className="text-sm space-y-2">
              <li>📍 Vizag</li>
              <li>📍 Gajuwaka</li>
              <li>📍 MVP Colony</li>
              <li>📍 NAD Junction</li>
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default DeliveryAlert;