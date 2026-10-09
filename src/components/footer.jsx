// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <svg viewBox="0 0 1440 320" className="wave">
        <path d="M0,128L26.7,128C53.3,128,107,128,160,133.3C213.3,139,267,149,320,133.3C373.3,117,427,75,480,53.3C533.3,32,587,32,640,64C693.3,96,747,160,800,176C853.3,192,907,160,960,170.7C1013.3,181,1067,235,1120,234.7C1173.3,235,1227,181,1280,144C1333.3,107,1387,85,1413,74.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      <div className="footer-nav-wrapper">
        <h3 className="logo">Jane Smith Art</h3>
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Gallary</a>
          <a href=" #commission-container">Commissions</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <p>example@gmail.com</p>
          <p>123-456-7890</p>
        </div>
      </div>
      <div className="social-wrapper">
        <h3 className="logo logo2">Follow Me!</h3>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/"
            target="blank"
            aria-label="Instagram link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="blank"
            aria-label="Facebook link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="blank"
            aria-label="Youtube link"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="blank"
            aria-label="TikTok link"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div>
          <p>
            Website made by
            <a href="https://natecward.com/" target="blank">
              Nate Ward.
            </a>
          </p>
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
