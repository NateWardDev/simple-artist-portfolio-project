import { useState } from "react";
// framer motion
import { motion } from "framer-motion";
import { navAnim } from "../animations";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="topnav">
        <ul>
          <h1 className="logo">Logo</h1>
          <div className="desktop-nav">
            <li>
              <motion.a
                variants={navAnim}
                animate="visible"
                initial={{ y: "-50px" }}
                transition={{ duration: 2 }}
                href="#about"
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                variants={navAnim}
                animate="visible"
                initial={{ y: "-75px" }}
                transition={{ duration: 2 }}
                href="#portfolio"
              >
                Gallery
              </motion.a>
            </li>
            <li>
              <motion.a
                variants={navAnim}
                animate="visible"
                initial={{ y: "-100px" }}
                transition={{ duration: 2 }}
                href="#commission-container"
              >
                Commissions
              </motion.a>
            </li>
            <li>
              <motion.a
                variants={navAnim}
                animate="visible"
                initial={{ y: "-125px" }}
                transition={{ duration: 2 }}
                href="#contact"
              >
                Contact
              </motion.a>
            </li>
          </div>
        </ul>
      </nav>

      <div className="ham-navbar">
        <h1 className="logo">Logo</h1>
        <div
          className={`menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`line1 ${menuOpen ? "line1-active" : ""}`}></div>
          <div className="line2 line2-active"></div>
          <div className={`line3 ${menuOpen ? "line3-active" : ""}`}></div>
        </div>
      </div>

      <div className={`ham-menu ${menuOpen ? "active" : ""}`}>
        <nav>
          <div className="hide">
            <a href="#about" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </a>
          </div>
          <div className="hide">
            <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>
              Gallery
            </a>
          </div>
          <div className="hide">
            <a
              href="#commission-container"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Commissions
            </a>
          </div>
          <div className="hide">
            <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
              Conatct
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
