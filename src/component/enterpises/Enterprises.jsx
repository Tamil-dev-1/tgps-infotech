import "./enterprises.css";

export default function EnterpriseStats() {

  const stats = [
    { value: "10.07%", label: "Revenue Growth Rate", highlight: true },
    { value: "5,045", label: "Premium Customers", highlight: true },
    { value: "12.56%", label: "Developer Growth Rate", highlight: true },
    { value: "55+", label: "Platform Partners", highlight: true },
  ];

  return (
    <section className="statss-section">
      <div className="container-fluid px-2 text-center">

        <p className="stats-subtitle">
          PROVEN PERFORMANCE
        </p>

        <h2 className="stats-title">
          Why Enterprises <span style={{color:"#C6FF00"}}>Choose Us</span>
        </h2>

        <div className="row g-4 mt-4">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">

              <div className={`stats-cards ${item.highlight ? "stats-highlight" : ""}`}>
                <h3 className="stats-number">{item.value}</h3>
                <p className="stats-text">{item.label}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}