import "./enterprises.css";

export default function EnterpriseStats() {

  const stats = [
    { value: "10.07%", label: "Revenue Growth Rate", highlight: true },
    { value: "5,045", label: "Premium Customers", highlight: true },
    { value: "12.56%", label: "Developer Growth Rate", highlight: true },
    { value: "55+", label: "Platform Partners",highlight: true },
    { value: "2,1900+", label: "Revenue Growth",highlight: true },
    { value: "30,000", label: "Revenue user registered",highlight: true }
  ];

  return (
    <section className="enterprise-stats-section">
      <div className="container text-center">

        <p className="enterprise-stats-subtitle">
          PROVEN PERFORMANCE
        </p>

        <h2 className="enterprise-stats-title">
          Why Enterprises Choose Us
        </h2>

        <div className="row g-4 mt-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">

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