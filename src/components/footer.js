import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";
import footerLogo from "../images/logos/footer.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <footer>
      <div className="row" style={{ marginRight: 0 }}>
        <div className="col-md-4" style={{ position: "static" }}>
          <img src={footerLogo} alt="footer-logo" className="footer-image" />
          <p className="level-three-headings">
            IIITH | JNTUH | JNTUK | JNTUA | SVU
          </p>
        </div>

        <div className="col-md-4" style={{ position: "static" }}>
          <ul className="quick-links level-three-headings ">
            <li>
              <h3 className="heading footer-links">Quick Links</h3>
            </li>
            <li className="footer-links">
              <Link to="/TermsAndConditions/#top">Terms & Conditions</Link>
            </li>
            <li className="footer-links">
              <Link to="/PrivacyPolicy/#top">Privacy Policy</Link>
            </li>
            <li className="footer-links">
              <Link to="/RefundCancellation/#top">Refund / Cancellation</Link>
            </li>
            <li className="footer-links">
              <Link
                to="/faq/#top"
                className="footer-links"
                style={{ marginLeft: "0px" }}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-4 social-media-icons level-three-headings">
          <a href="https://www.facebook.com/search/top/?q=msit%20program">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              className="icons"
            />
          </a>

          <a href="https://twitter.com/msitprogram">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="2x"
              className="icons"
            />
          </a>

          <a href="https://www.instagram.com/msit_official/?hl=en">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="icons" />
          </a>

          <a href="https://www.linkedin.com/company/msit-official/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faGooglePlus} size="2x" className="icons" />
          </a>
        </div>

        <div className="col-sm-12 bottom-footer">
          <p>
            Consortium of Institutions of Higher Learning, IIIT Campus,
            Gachibowli, Hyderabad - 500032 Phone: 040-66531342 Mobile: +91
            7799834583,+91 7799834585 <br />
            E-mail: enquiries@msitprogram.net
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;

// Font awesome pixel sizes relative to the multiplier.
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px
