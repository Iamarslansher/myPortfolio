import React, { useState } from "react";
import "./contactus.css";

import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactUS() {
  // 851630dd-6ace-4b90-ba10-7aeabe15fce3
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "851630dd-6ace-4b90-ba10-7aeabe15fce3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  //
  return (
    <div id="contactUs" className="contactus-container">
      <div className="contactus-subContainer">
        <h1 className="contactUs-heading">Get in Touch</h1>
        <div
          className="subContainer"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="leftDiv">
            <h1 className="leftDiv-heading">Let's Talk</h1>
            <p className="leftDiv-content">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <p className="email">
              <MdEmail /> iamarslansher@gmail.com
            </p>
            <p className="contact email">
              <FaPhone /> 0307-2973307
            </p>
            <p className="elocation email">
              <FaLocationDot /> Karachi, pakistan
            </p>

            <div className="icons">
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp className="icon whatsap" />
              </a>
              <a href="https://www.facebook.com/arslan.salloo" target="_blank">
                <FaFacebook className="icon facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/arsalan-sher-0bb9b32a8/"
                target="_blank"
              >
                <FaLinkedin className="icon linkedin" />
              </a>
              <FaInstagram className="icon intagram" />
            </div>
          </div>
          <div className="rightDiv">
            <form onSubmit={onSubmit} className="contact-form">
              <h2 className="form-title">Contact Us</h2>

              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <RiSendPlaneFill className="submit-icon" size={18} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
