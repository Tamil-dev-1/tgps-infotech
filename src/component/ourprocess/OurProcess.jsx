import "bootstrap/dist/css/bootstrap.min.css";
import "./ourprocess.css";

export default function WorkflowSection() {
  const flowSteps = [
    { id: "01", title: "Identify Challenge", desc: "Business analysis & planning" },
    { id: "02", title: "Strategy Design", desc: "Solution architecture planning" },
    { id: "03", title: "AI Development", desc: "Custom AI implementation" },
    { id: "04", title: "Testing", desc: "QA & performance validation" },
    { id: "05", title: "Deployment", desc: "Cloud integration launch" },
    { id: "06", title: "Optimization", desc: "Monitoring & scaling" }
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