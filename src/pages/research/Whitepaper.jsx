import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Whitepaper.css';
import BoxImg1 from '../../assets/images/whitepaper/boxImg1.jpg'
import BoxImg2 from '../../assets/images/whitepaper/boxImg2.jpg'
import BoxImg3 from '../../assets/images/whitepaper/boxImg3.jpg'
import BoxImg4 from '../../assets/images/whitepaper/boxImg4.jpg'
import BoxImg6 from '../../assets/images/whitepaper/boxImg6.jpg'

import  { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";


export default function Whitepaper() {

  const {theme} = useContext(ThemeContext);

  const [activeId, setActiveId] = useState("intro");
  const observerRef = useRef(null);

  useEffect(() => {
    // inject bootstrap-icons stylesheet if not present
    if (!document.querySelector("#bs-icons")) {
      const l = document.createElement("link");
      l.id = "bs-icons";
      l.rel = "stylesheet";
      l.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
      document.head.appendChild(l);
    }

    document.documentElement.style.scrollBehavior = "smooth";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            setActiveId(id);
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );

    observerRef.current = observer;

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -10;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Tokenomics pie chart
  const TokenomicsPie = () => {
    const slices = [30, 25, 20, 15, 10];
    const colors = ["#0d6efd", "#6f42c1", "#20c997", "#fd7e14", "#dc3545"];
    const total = slices.reduce((a, b) => a + b, 0);
    let cumulative = 0;

    return (
      <svg viewBox="0 0 32 32" width="160" height="160">
        {slices.map((val, i) => {
          const start = (cumulative / total) * 2 * Math.PI;
          cumulative += val;
          const end = (cumulative / total) * 2 * Math.PI;
          const large = end - start > Math.PI ? 1 : 0;
          const x1 = 16 + 14 * Math.cos(start - Math.PI / 2);
          const y1 = 16 + 14 * Math.sin(start - Math.PI / 2);
          const x2 = 16 + 14 * Math.cos(end - Math.PI / 2);
          const y2 = 16 + 14 * Math.sin(end - Math.PI / 2);
          const d = [`M 16 16`, `L ${x1} ${y1}`, `A 14 14 0 ${large} 1 ${x2} ${y2}`, "Z"].join(" ");
          return <path key={i} d={d} fill={colors[i]} stroke="#fff" strokeWidth="0.2" />;
        })}
        <circle cx="16" cy="16" r="8" fill="#fff" />
        <text x="16" y="18" fontSize="3" textAnchor="middle" fill="#000">FCX</text>
      </svg>
    );
  };

  return (
    <div className="whitepaper-app">
      <style>{`
        .whitepaper-app { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #222; }
        .hero-gradient { background: linear-gradient(135deg, #0b1226 0%, #0d6efd 40%, #6f42c1 100%); color: white; }
        .sidebar { position: sticky; top: 90px; }
        .nav-link.active { background: #5B23FF; border-radius: 8px; }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 700ms cubic-bezier(.2,.9,.3,1); }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .section-card { border-radius: 12px; box-shadow: 0 10px 24px rgba(15,23,42,0.06); padding: 28px; }
        @media(min-width: 992px) { .content-col { padding-left: 2rem; } }
        .pdf-frame { width: 100%; height: 70vh; border: 0; border-radius: 8px; }
        .top-nav-mobile { position: sticky; top: 0; z-index: 1020; backdrop-filter: blur(6px); }
        .timeline-item { position: relative; padding-left: 1.5rem; }
        .timeline-item:before { content: ''; position: absolute; left: 0; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: #0d6efd; }
        .muted { color: #6c757d; }
      `}</style>

      {/* HERO */}
      <header className="bg-paper py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-lg-start text-center mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold">Frequency Chain — Whitepaper</h1>
              <p className="lead mt-3 mb-4">A modular, scalable blockchain designed for speed, low-cost and enterprise interoperability.</p>
              <div className="d-inline-flex gap-2">
                <a href="#pdf-viewer" className="btn btn-light btn-lg" onClick={handleNavClick('pdf-viewer')}>
                  <i className="bi bi-file-earmark-pdf-fill me-2"></i> View PDF
                </a>
                <a href="/dummy.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-download me-2"></i> Download
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="card p-3 section-card bg-some text-start" style={{borderRadius: 16}}>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{width:48,height:48}}>
                    <svg viewBox="0 0 64 64" width="48" height="48"><circle cx="32" cy="32" r="30" fill="#0d6efd"/></svg>
                  </div>
                  <div>
                    <div className="fw-bold">Key Stats</div>
                    <div className="muted" style={{fontSize:12}}>Mainnet beta • 1000 TPS • Low fees</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="muted">Validators</small>
                  <div className="fw-bold">125</div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="muted">Total Supply</small>
                  <div className="fw-bold">1,000,000,000 FCX</div>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#subscribeModal">Join Beta</button>
                  <a className="btn btn-sm btn-outline-primary" href="#roadmap" onClick={handleNavClick('roadmap')}>View Roadmap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE TOP NAV */}
      <nav className="top-nav-mobile d-lg-none bg-white shadow-sm">
        <div className="container py-2 d-flex gap-2 overflow-auto">
          {["intro","problem","architecture","consensus","tokenomics","governance","roadmap","team","conclusion"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={handleNavClick(s)}
              className={`btn btn-sm ${activeId === s ? 'btn-primary' : 'btn-outline-secondary'}`}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <main className="container my-5">
        <div className="row">
          {/* LEFT SIDEBAR */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="sidebar p-3">
              <h5 className="fw-bold mb-2"
              style={{color: theme === "dark" ? "#ffffff" : "#111111",transition: "0.3s",}}
              >On this page</h5>
              <p className="muted small mb-2">Jump to section</p>
              <div className="list-group" >
                {["intro","problem","architecture","consensus","tokenomics","governance","roadmap","team","conclusion"].map((s) => (
                  <a
                    key={s}
                    href={`#${s}`}
                    onClick={handleNavClick(s)}
                    className={`list-group-item list-group-item-action border-0 nav-link ${activeId===s?'active':''}`}>
                    <i className="bi bi-chevron-right small me-2"></i>
                    <span
            //           style={{
            
            //   color: theme === "dark" ? "#000" : "#fff",
            //   transition: "0.3s",
            // }}
                    >{s.charAt(0).toUpperCase()+s.slice(1)}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="col-lg-9 content-col">

            {/* PDF viewer */}
            {/* <section id="pdf-viewer" className="mb-5 reveal section-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0">Whitepaper PDF</h3>
                <div className="muted small">Embedded viewer</div>
              </div>
              <iframe className="pdf-frame" title="whitepaper-pdf" src=""></iframe>
              <div className="mt-3 d-flex gap-2">
                <a href="/whitepaper.pdf" className="btn btn-outline-primary" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right me-2"></i> Open in new tab</a>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pdfModal"><i className="bi bi-arrows-fullscreen me-2"></i> Fullscreen</button>
              </div>
            </section> */}

<section id="pdf-viewer" className="mb-5 section-card p-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h3 className="mb-0"
     style={{
              color: theme === "dark" ? "#ffffff" : "#111111",
              transition: "0.3s",
            }}>Whitepaper PDF</h3>
    <div className="text-muted small">Embedded viewer</div>
  </div>

  {/* Embedded PDF */}
  <iframe
   className="pdf-frame"
    title="dummy-pdf"
    src="/dummy.pdf#view=FitH"

  ></iframe>

  {/* Buttons */}
  <div className="mt-3 d-flex flex-wrap gap-2">
    <a
      href="/dummy.pdf"
      className="btn btn-outline-primary"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-box-arrow-up-right me-2"></i>
      Open in new tab
    </a>

    <button
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#pdfModal"
    >
      <i className="bi bi-arrows-fullscreen me-2"></i>
      Fullscreen
    </button>
  </div>
</section>



<div
  className="modal fade"
  id="pdfModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Whitepaper PDF</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>

      <div className="modal-body p-0">
        <iframe
          title="dummy-pdf-fullscreen"
          src="/dummy.pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  </div>
</div>




            {/* MANUAL SECTIONS */}
            {/* INTRODUCTION */}
            <section id="intro" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" 
                 style={{color: theme === "dark" ? "#ffffff" : "#111111",transition: "0.3s",}}>1. Introduction</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">Introduction section with detailed explanation of the project purpose and technical overview.</p>
                  <ul  style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>Key concepts and motivation.</li>
                    <li>High-level architecture overview.</li>
                    <li>Intended audience and use cases.</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Overview and context for Introduction.</div>
                    <div className="mt-3">
                      <img src={BoxImg1} alt="illustration" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROBLEM */}
            <section id="problem" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>2. Problem</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">Describe the problem your blockchain solves. Include context, pain points, and motivation for your solution.</p>
                  <ul style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>Problem statement and analysis.</li>
                    <li>Technical challenges to overcome.</li>
                    <li>Examples from real use cases.</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Key takeaways of the problem section.</div>
                    <div className="mt-3">
                      <img src={BoxImg2} alt="illustration" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ARCHITECTURE */}
            <section id="architecture" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>3. Architecture</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">Details of blockchain architecture, consensus layers, modules, and network components.</p>
                  <ul style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>Node types and roles</li>
                    <li>Communication and data flow</li>
                    <li>Security considerations</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Architecture diagram & summary.</div>
                    <div className="mt-3">
                      <img src={BoxImg3}alt="illustration" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CONSENSUS */}
            <section id="consensus" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>4. Consensus</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">Consensus mechanism details and security guarantees.</p>
                  <ul style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>Algorithm description</li>
                    <li>Fault tolerance and finality</li>
                    <li>Validator incentives</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Consensus overview and key benefits.</div>
                    <div className="mt-3">
                      <img src={BoxImg4} alt="illustration" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TOKENOMICS */}
            <section id="tokenomics" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>5. Tokenomics</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">Detailed explanation of token distribution, utility, and incentives.</p>
                  <ul style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>Staking incentives</li>
                    <li>Team & foundation allocation</li>
                    <li>Public sale and reserve tokens</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Tokenomics visual summary</div>
                    <div className="mt-3 d-flex justify-content-center">
                      <TokenomicsPie />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* GOVERNANCE */}
            <section id="governance" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h3 className="mb-0" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>6. Governance</h3>
                <div className="muted" style={{fontSize:13}}>Last updated: Nov 20, 2025</div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="muted">How decisions are made, voting mechanisms, and community involvement.</p>
                  <ul style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>
                    <li>DAO and proposal workflow</li>
                    <li>Voting & quorum rules</li>
                    <li>On-chain governance benefits</li>
                  </ul>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 text-center">
                  <div className="p-3 border rounded">
                    <div className="mb-2" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}><strong>Highlights</strong></div>
                    <div className="muted small">Governance model overview.</div>
                    <div className="mt-3">
                      <img src={BoxImg6}alt="illustration" className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ROADMAP */}
            <section id="roadmap" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <h3 className="mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>7. Roadmap</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="timeline-item mb-3">
                    <h6 className="mb-1" style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>Q1 - Core Chain</h6>
                    <small className="muted">Node setup, explorer, testnet</small>
                  </div>
                  <div className="timeline-item mb-3">
                    <h6 className="mb-1" style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>Q2 - Smart Contract Layer</h6>
                    <small className="muted">EVM compatibility & SDKs</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="timeline-item mb-3">
                    <h6 className="mb-1" style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>Q3 - Mainnet</h6>
                    <small className="muted">Launch, token distribution</small>
                  </div>
                  <div className="timeline-item mb-3">
                    <h6 className="mb-1" style={{color: theme === "dark" ? "#F9DFDF" : "#111111",transition: "0.3s",}}>Q4 - DAO</h6>
                    <small className="muted">Full governance tools</small>
                  </div>
                </div>
              </div>
            </section>

            {/* TEAM */}
            <section id="team" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <h3 className="mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>8. Team & Advisors</h3>
              <div className="row g-3">
                {[1,2,3,4].map((i)=> (
                  <div className="col-6 col-md-3" key={i}>
                    <div className="card p-3 text-center">
                      <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="avatar" className="rounded-circle mb-2" style={{width:72,height:72}} />
                      <strong>Member {i}</strong>
                      <div className="muted small">Role</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion" className="mb-5 reveal section-card p-4"
            style={{
              background: theme === "dark" ? "#001F3D" : "#ffff",
              transition: "0.3s",
            }}>
              <h3 className="mb-3" style={{color: theme === "dark" ? "#fff" : "#111111",transition: "0.3s",}}>9. Conclusion</h3>
              <p className="muted">Summarize the whitepaper and call to action: join the community, audit reports, links to SDK and docs.</p>
              <div className="d-flex gap-2 mt-3">
                <a href="#" onClick={(e)=>e.preventDefault()} className="btn btn-primary">Join Community</a>
                <a href="#" onClick={(e)=>e.preventDefault()} className="btn btn-outline-secondary">Read Docs</a>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* PDF fullscreen modal */}
      <div className="modal fade" id="pdfModal" tabIndex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pdfModalLabel">Whitepaper — Fullscreen</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <iframe title="wpaper-full" src="/whitepaper.pdf#view=FitH" style={{width:'100%',height:'100vh',border:0}}></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe modal */}
      <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <h5>Join the beta</h5>
              <p className="muted">Enter your email to get invited to the validator beta and developer previews.</p>
              <div className="input-group mb-3">
                <input className="form-control" placeholder="you@domain.com" />
                <button className="btn btn-primary">Request Invite</button>
              </div>
              <button className="btn btn-link" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        document.querySelectorAll('section[id]').forEach(s=>s.setAttribute('tabindex','-1'));
      `}} />
    </div>
  );
}
