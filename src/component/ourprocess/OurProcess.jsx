import "bootstrap/dist/css/bootstrap.min.css";
import "./ourprocess.css";

export default function WorkflowSection() {
  const flowSteps = [
    { id: "01", title: "Discover", desc: "We dive deep into your business, challenges, and opportunities" },
    { id: "02", title: "Define", desc: "We shape a clear, scalable strategy aligned with your goals" },
    { id: "03", title: " Architect", desc: "We design robust, future-ready system architecture" },
    { id: "04", title: "Build", desc: "We develop high-performance, secure, and scalable solutions" },
    { id: "05", title: " Launch", desc: "We deploy seamlessly with optimized infrastructure" },
    { id: "06", title: "Evolve", desc: "We continuously improve, scale, and adapt your systems" }
  ];

  return (
    <section className="wf-wrapper">
      <div className="container text-center">
        <p className="wf-tag">HOW WE WORK</p>
        {/* <h2 className="wf-heading">Our Process</h2> */}

        <div className="wf-track">
          <div className="wf-line-bar"></div>

          {flowSteps.map((item, index) => (
            <div
              key={index}
              className={`wf-node ${index % 2 === 0 ? "wf-top" : "wf-bottom"}`}
            >
              <div className="wf-box">
                <span className="wf-count">{item.id}</span>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
              <div className="wf-point"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}