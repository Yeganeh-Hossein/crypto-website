import React from "react";
import contactImg from "../assets/images/contact.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-12 bg-info p-3 rounded">
        <h3>Contact us</h3>
      </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 ">
          <div className="mt-3">
            <h3 className="text-primary">How to contact us :</h3>
            <h5>+98 911 369 7249</h5>
            <h5>hosseinyeganeh2023@gmail.com</h5>
          </div>
          <div className="mt-3">
    
              <div className="mb-3">
                <label className="form-label">
                   Your Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="please type your name:"
                />
                
              </div>
              <div className="mb-3">
                <label className="form-label">
                   Your Message:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="please type your Message:"
                />
                
              </div>
              <button className="btn btn-outline-primary ms-3">send</button>
          </div>
        </div>
        <div className="col-md-5 rounded text-center">
          <img
            src={contactImg}
            alt="contactImg"
            className="img-fluid contactImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
