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
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          My Work
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          
          {/* Card 1 */}
          <div
            style={{
              width: "280px",
              borderRadius: "10px",
              padding: "20px",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <h3>🍲 Pickles Website</h3>
            <p style={{ marginTop: "10px" }}>
              Full e-commerce application with cart, checkout and modern UI.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "280px",
              borderRadius: "10px",
              padding: "20px",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <h3>📊 Admin Panel</h3>
            <p style={{ marginTop: "10px" }}>
              Manage products, users and orders with dashboard.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;