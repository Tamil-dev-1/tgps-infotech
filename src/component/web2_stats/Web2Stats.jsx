import "./Web2Stats.css";

export default function WebStats() {

  const stats = [
    { value: "10.07%", label: "Revenue Growth Rate", highlight: true },
    { value: "5,045", label: "Premium Customers", highlight: true },
    { value: "12.56%", label: "Developer Growth Rate", highlight: true },
    { value: "55+", label: "Platform Partners",highlight: true },
  ];

  return (
    <section className="enterprise-stats-section">
      <div className="container text-center">

        {/* NEW PARAGRAPH */}
        <p className="text-center">
          We deliver scalable digital solutions that drive business growth.
          Our expertise ensures performance, reliability, and innovation.
          Trusted by enterprises worldwide for consistent results.
        </p>

        <div className="row g-4 mt-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">

              <div className={`enterprise-stats-card ${item.highlight ? "enterprise-stats-highlight" : ""}`}>
                <h3 className="enterprise-stats-number">{item.value}</h3>
                <p className="enterprise-stats-text">{item.label}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}