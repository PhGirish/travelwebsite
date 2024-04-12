import "../assets/ContactUs.css";

import React from "react";

function ContactUS() {
  return (
    <div className="form-container">
      <h1>Send us a message</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUS;
