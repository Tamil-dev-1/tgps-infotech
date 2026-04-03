import React from "react";
import "./form.css";
import Contact_Img from '../../assets/images/home/formImg.jpg'

const Form = () => {
  return (
    <section className="contact-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="contact-title">
              Let's connect and explore possibilities
            </h3>

            <div className="image-box">
              <img
                src={Contact_Img}
                alt="Contact_Img"
                className="img-fluid"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="form-box">

              <h5 className="form-heading">Please Share Your Details:</h5>

              <form action="https://formsubmit.co/operations@tgpsglobal.com" method="POST">
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Contact Form Message" />
  <input type="hidden" name="_template" value="table" />

  <div className="row">
    <div className="col-md-6 mb-3">
      <label>First Name*</label>
      <input type="text" name="firstName" className="form-control" required />
    </div>

    <div className="col-md-6 mb-3">
      <label>Last Name*</label>
      <input type="text" name="lastName" className="form-control" required />
    </div>

    <div className="col-md-6 mb-3">
      <label>Email*</label>
      <input type="email" name="email" className="form-control" required />
    </div>

    <div className="col-md-6 mb-3">
      <label>Phone*</label>
      <input type="text" name="phone" className="form-control" required />
    </div>

    <div className="col-md-6 mb-3">
      <label>Date*</label>
      <input type="date" name="date" className="form-control text-white" required />
    </div>

    <div className="col-md-6 mb-3">
      <label>Time*</label>
      <select name="time" className="form-control" required>
        <option value="">Select One</option>
        <option className="text-dark">10:00 AM</option>
        <option className="text-dark">12:00 PM</option>
        <option className="text-dark">3:00 PM</option>
      </select>
    </div>

    <div className="col-12 mb-3">
      <label>Message:</label>
      <textarea name="message" className="form-control" rows="4"></textarea>
    </div>

    <div className="col-12">
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </div>
  </div>
</form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Form;