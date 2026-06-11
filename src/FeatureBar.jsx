import { useEffect, useRef } from "react";

function FeatureBar() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;

    const interval = setInterval(() => {
      position -= 1; // speed (lower = slow, higher = fast)

      if (track) {
        track.style.transform = `translateX(${position}px)`;

        // reset loop
        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }
      }
    }, 20); // smooth speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-3">
      <div className="max-w-7xl mx-auto px-4">

        <div className="overflow-hidden font-medium rounded-xl">

          <div
            ref={trackRef}
            className="flex gap-10 px-6 py-4 whitespace-nowrap"
          >

            {/* ITEMS */}
            <div className="flex items-center gap-2 min-w-max">
              🌿 <span>Naturally Prepared</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              🔒 <span>Secure Payments</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              🚚 <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              ⭐ <span>Premium Quality</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              🧂 <span>Authentic Taste</span>
            </div>

            {/* duplicate for smooth loop */}
            <div className="flex items-center gap-2 min-w-max">
              🌿 <span>Naturally Prepared</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              🔒 <span>Secure Payments</span>
            </div>

            <div className="flex items-center gap-2 min-w-max">
              🚚 <span>Fast Delivery</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default FeatureBar;