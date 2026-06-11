document.addEventListener("DOMContentLoaded", () => {

  // ================= TOP HEADER SLIDER =================
  (function () {
    let index = 0;
    const slider = document.getElementById("topslider");
    if (!slider) return;

    const total = slider.children.length;
    let auto;

    function show() {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function next() {
      index = (index + 1) % total;
      show();
    }

    function prev() {
      index = (index - 1 + total) % total;
      show();
    }

    document.querySelector(".arrow.left")?.addEventListener("click", () => {
      prev();
      reset();
    });

    document.querySelector(".arrow.right")?.addEventListener("click", () => {
      next();
      reset();
    });

    function start() {
      auto = setInterval(next, 3000);
    }

    function reset() {
      clearInterval(auto);
      start();
    }

    start();
  })();


  // ================= MAIN SLIDER =================
  (function () {
    let index = 0;
    const slider = document.getElementById("mainSlider");
    if (!slider) return;

    const total = slider.children.length;

    setInterval(() => {
      index = (index + 1) % total;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  })();


  // ================= FEATURE SCROLL =================
  (function () {
    const track = document.getElementById("featureTrack");
    if (!track) return;

    track.innerHTML += track.innerHTML;

    let pos = 0;

    function scroll() {
      pos += 0.5;

      if (pos >= track.scrollWidth / 2) {
        pos = 0;
      }

      track.parentElement.scrollLeft = pos;
      requestAnimationFrame(scroll);
    }

    scroll();
  })();


  // ================= PRODUCT IMAGE ROTATION =================
  (function () {
    const images = [
      "image/img4.WEBP",
      "image/img2.jpg",
      "image/img3.jpg"
    ];

    const ids = ["mainImage", "mainImage1", "mainImage2", "mainImage3"];

    ids.forEach((id, i) => {
      let index = 0;
      const img = document.getElementById(id);

      if (!img) return;

      setInterval(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
      }, 3000 + i * 300);
    });
  })();

});


// ================= FAQ =================
function toggleFAQ(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector("span");

  content.classList.toggle("hidden");
  icon.textContent = content.classList.contains("hidden") ? "+" : "−";
}


// ================= QTY =================
function updateQty(btn, change) {
  const qtyEl = btn.parentElement.querySelector(".qty");
  let qty = parseInt(qtyEl.innerText);

  qty = Math.max(1, qty + change);
  qtyEl.innerText = qty;
}


// ================= DESCRIPTION =================
function toggleDesc() {
  const box = document.getElementById("desc");
  const icon = document.getElementById("icon");

  box.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}



//==checkout======
let userData = {};

// STEP NAVIGATION
function nextStep(step) {

  // VALIDATION
  if (step === 1) {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    userData.name = name;
    userData.phone = phone;
  }

  if (step === 2) {
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;

    if (!address || !city || !pincode) {
      alert("Fill address properly");
      return;
    }

    userData.address = address;
    userData.city = city;
    userData.pincode = pincode;
  }

  if (step === 3) {
    let pay = document.querySelector('input[name="pay"]:checked');
    if (!pay) {
      alert("Select payment method");
      return;
    }
    userData.payment = pay.value;
  }

  document.getElementById("step"+step).classList.add("hidden");
  document.getElementById("step"+(step+1)).classList.remove("hidden");

  updateSteps(step+1);

  if(step === 3) loadReview();
}

// BACK
function prevStep(step) {
  document.getElementById("step"+step).classList.add("hidden");
  document.getElementById("step"+(step-1)).classList.remove("hidden");

  updateSteps(step-1);
}

// STEP UI
function updateSteps(active) {
  document.querySelectorAll(".step").forEach((el,i)=>{
    el.classList.remove("active");
    if(i===active-1) el.classList.add("active");
  });
}

// REVIEW DATA
function loadReview() {
  document.getElementById("reviewData").innerHTML = `
    <p><b>Name:</b> ${userData.name}</p>
    <p><b>Phone:</b> ${userData.phone}</p>
    <p><b>Address:</b> ${userData.address}, ${userData.city} - ${userData.pincode}</p>
    <p><b>Payment:</b> ${userData.payment}</p>
  `;
}

// PLACE ORDER
function placeOrder() {

  console.log("ORDER DATA:", userData);

  alert("✅ Order Placed Successfully!");

  // 👉 Here you connect backend API
}

function openCart() {
  document.getElementById("cartSidebar").classList.remove("translate-x-full");
  document.getElementById("cartOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.add("translate-x-full");
  document.getElementById("cartOverlay").classList.add("hidden");
  document.body.style.overflow = "auto";
}


function openModal() {
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.getElementById("modalOverlay").classList.add("flex");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.getElementById("modalOverlay").classList.remove("flex");
}