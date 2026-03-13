import "./clients&partner.css";

export default function PartnersClients() {
  return (
    <section className="pc-main-section">

      {/* Partners Row */}
      <div className="container-fluid">
        <div className="row align-items-center">

          <div className="col-lg-2 col-md-3 pc-box pc-box-dark">
            <h4>Our Partners</h4>
          </div>

          <div className="col-lg-10 col-md-9 pc-slider-area">
            <div className="pc-marquee pc-right">

              <div className="pc-track">
                <img src="/logos/hacken.png" />
                <img src="/logos/cobo.png" />
                <img src="/logos/banxa.png" />
                <img src="/logos/alchemy.png" />
                <img src="/logos/nexo.png" />
                <img src="/logos/unstoppable.png" />

                {/* duplicate */}
                <img src="/logos/hacken.png" />
                <img src="/logos/cobo.png" />
                <img src="/logos/banxa.png" />
                <img src="/logos/alchemy.png" />
                <img src="/logos/nexo.png" />
                <img src="/logos/unstoppable.png" />
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Clients Row */}
      <div className="container-fluid pc-second-row">
        <div className="row align-items-center">

          <div className="col-lg-2 col-md-3 pc-box pc-box-light">
            <h4>Our Clients</h4>
          </div>

          <div className="col-lg-10 col-md-9 pc-slider-area">
            <div className="pc-marquee pc-right">

              <div className="pc-track">
                <img src="/logos/sil.png" />
                <img src="/logos/5ire.png" />
                <img src="/logos/qubetics.png" />
                <img src="/logos/skoda.png" />
                <img src="/logos/tata.png" />

                {/* duplicate */}
                <img src="/logos/sil.png" />
                <img src="/logos/5ire.png" />
                <img src="/logos/qubetics.png" />
                <img src="/logos/skoda.png" />
                <img src="/logos/tata.png" />
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}