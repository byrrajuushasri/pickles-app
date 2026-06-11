import { useState } from "react";

function Checkout() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: ""
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert("Order Placed ✅");
    console.log(form);
  };

  return (
    <section className="bg-[#fafafa] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">

          {/* STEPS */}
          <div className="flex justify-between mb-6 text-sm font-medium">
            {["Contact", "Address", "Payment", "Review"].map((label, i) => (
              <div key={i} className={step === i + 1 ? "text-green-600" : ""}>
                {label}
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-3">
              <input name="name" placeholder="Full Name" className="input" onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" className="input" onChange={handleChange} />
              <button onClick={nextStep} className="btn">Continue</button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-3">
              <input name="address" placeholder="Street Address" className="input" onChange={handleChange} />
              <input name="city" placeholder="City" className="input" onChange={handleChange} />
              <input name="pincode" placeholder="Pincode" className="input" onChange={handleChange} />

              <div className="flex gap-3">
                <button onClick={prevStep} className="btn-outline">Back</button>
                <button onClick={nextStep} className="btn">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-3">
              <label className="radio">
                <input type="radio" name="payment" value="UPI" onChange={handleChange} /> UPI
              </label>
              <label className="radio">
                <input type="radio" name="payment" value="Card" onChange={handleChange} /> Card
              </label>
              <label className="radio">
                <input type="radio" name="payment" value="COD" onChange={handleChange} /> COD
              </label>

              <div className="flex gap-3">
                <button onClick={prevStep} className="btn-outline">Back</button>
                <button onClick={nextStep} className="btn">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h3 className="font-semibold mb-3">Review Order</h3>

              <div className="text-sm space-y-2">
                <p><b>Name:</b> {form.name}</p>
                <p><b>Phone:</b> {form.phone}</p>
                <p><b>Address:</b> {form.address}</p>
                <p><b>City:</b> {form.city}</p>
                <p><b>Pincode:</b> {form.pincode}</p>
                <p><b>Payment:</b> {form.payment}</p>
              </div>

              <div className="flex gap-3 mt-4">
                <button onClick={prevStep} className="btn-outline">Back</button>
                <button onClick={placeOrder} className="btn">Place Order</button>
              </div>
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-20">
          <h3 className="font-semibold mb-4">Order Summary</h3>

          <div className="flex gap-3 mb-4">
            <img src="/image/img3.jpg" className="w-16 h-16 rounded" alt="" />
            <div>
              <p>Spicy Chicken Pickle</p>
              <p className="text-sm text-gray-500">500g</p>
            </div>
          </div>

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>₹499</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Checkout;