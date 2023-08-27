import React, { useState } from "react";
import HeroImage from './pizzza.jpg';
import '../styles/Contact.css';

export default function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const subject = "Contact Form Submission";
    const mailtoLink = `mailto:testing.email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Full Name: ${fname}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${HeroImage})` }}>
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" onSubmit={(event) => { handleSubmit(event) }}>
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter Full Name" required value={fname} onChange={(e) => { setFname(e.target.value) }} />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="6" placeholder="Enter Message" required value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
}
