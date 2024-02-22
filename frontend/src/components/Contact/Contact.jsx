import "./contact.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <form id="contact_form" name="contact_form" method="post">
        <h1>Contact Form</h1>
        <div className="mb-3 row">
          <div className="col-sm-6">
            <label>First Name</label>
            <input
              type="text"
              required
              maxLength="50"
              className="form-control"
              id="first_name"
              name="first_name"
            />
          </div>
          <div className="col-sm-6">
            <label>Last Name</label>
            <input
              type="text"
              required
              maxLength="50"
              className="form-control"
              id="last_name"
              name="last_name"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-6">
            <label htmlFor="email_addr">Email address</label>
            <input
              type="email"
              required
              maxLength="50"
              className="form-control"
              id="email_addr"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="phone_input">Phone</label>
            <input
              type="tel"
              required
              maxLength="50"
              className="form-control"
              id="phone_input"
              name="Phone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary px-4 btn-lg">
          Post
        </button>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
