import "./form2.css";

const Form2 = () => {
  return (
    <>
    <div className="career-apply-bg">

      <div className="career-apply-card">
        <h3 className="career-form-title">Apply for a Position</h3>

        <form
          action="https://formsubmit.co/operations@tgpsglobal.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={(e) => {
            setTimeout(() => {
              e.target.reset();
            }, 100);
          }}
        >
          {/* ---------- FormSubmit Config ---------- */}
          <input
            type="hidden"
            name="_subject"
            value="TGPS Website – New Job Application"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* ---------- Full Name ---------- */}
          <div className="career-input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* ---------- Email ---------- */}
          <div className="career-input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* ---------- Position ---------- */}
          <div className="career-input-group">
            <label htmlFor="position">Position Applied For</label>
            <select  id="position" name="Position" required>
              <option value=""></option>
              <option className="text-dark">Blockchain Developer</option>
              <option className="text-dark">Frontend Developer</option>
              <option className="text-dark">Fullstack Developer</option>
              <option className="text-dark">UI/UX Designer</option>
              <option className="text-dark">Backend Engineer</option>
            </select>
          </div>

          {/* ---------- Resume Upload ---------- */}
          <div className="career-input-group career-file-group">
            <label htmlFor="resume">Upload Resume (PDF, max 3MB)</label>
            <input
              type="file"
              id="resume"
              name="Resume"
              accept="application/pdf"
              required
            />
          </div>

          {/* ---------- Message ---------- */}
          <div className="career-input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="Message"
              rows="3"
              placeholder="Any additional information..."
            ></textarea>
          </div>

          {/* ---------- Submit ---------- */}
          <button type="submit" className="career-submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>

{/* SECTION ----- 2 */}
      <section
        className="career-footer-section text-center p-5"
        style={{
          borderTop: "1px solid #001F82",
          color:'#fff',
        }}
      >
        <h3 className="fw-bold mb-3">Didn’t find your role?</h3>
        <p className="mb-4">
          We’re always looking for talented individuals — share your resume and
          we’ll get in touch.
        </p>
        <h6 className="px-4 fw-bold">
          Write Us
        </h6>
        <p>To : <a className="text-white" href="">info@tgpsglobal.com</a></p>
      </section>
    </>
  );
};

export default Form2;