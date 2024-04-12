import React from "react";

import "../assets/footer.css";

function Footer() {
  return (
    <div className="foot-body">
      <div className="footer-heading">
        <div className="footer-head">
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="foot-logo">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
      <div className="list">
        <div>
          <h4>Project</h4>
          <a href="https://fontawesome.com/">Changelog</a>
          <a href="https://fontawesome.com/">Status</a>
          <a href="https://fontawesome.com/">License</a>
          <a href="https://fontawesome.com/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://fontawesome.com/">GitHub</a>
          <a href="https://fontawesome.com/">Issues</a>
          <a href="https://fontawesome.com/">Project</a>
          <a href="https://fontawesome.com/"> Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="https://fontawesome.com/">Support</a>
          <a href="https://fontawesome.com/">Troubleshooting</a>
          <a href="https://fontawesome.com/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="https://fontawesome.com/">Terms of Service</a>
          <a href="https://fontawesome.com/">Privacy Policy</a>
          <a href="https://fontawesome.com/">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
