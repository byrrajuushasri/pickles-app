 
function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "60px 20px",
        background: "#f9fafb"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            marginBottom: "10px"
          }}
        >
          My Portfolio
        </h2>

        <p style={{ textAlign: "center", color: "#555", marginBottom: "40px" }}>
          Here are some of my recent works
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}
        >
          
          {/* Card 1 */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3>🍲 Pickles E-commerce</h3>
            <p style={{ margin: "10px 0" }}>
              Full-stack MERN app with cart, checkout and admin panel.
            </p>

            <p style={{ fontSize: "14px", color: "#666" }}>
              React | Node | MongoDB
            </p>

            <button
              style={{
                marginTop: "15px",
                padding: "8px 15px",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              View Project
            </button>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h3>📊 Admin Dashboard</h3>
            <p style={{ margin: "10px 0" }}>
              Dashboard to manage products, users and orders.
            </p>

            <p style={{ fontSize: "14px", color: "#666" }}>
              React | Express
            </p>

            <button
              style={{
                marginTop: "15px",
                padding: "8px 15px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "5px"
              }}
            >
              View Project
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;