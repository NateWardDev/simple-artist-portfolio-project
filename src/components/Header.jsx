import { useEffect, useState } from "react";
// framer motion
// images for carosel
import { headCarousel } from "../data";
// framer motion
import { motion } from "framer-motion";
import { headingAnim } from "../animations";

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [carousel] = useState(headCarousel());

  const handleCarousel = (e) => {
    setSlideIndex(e.target.innerText - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <header id="header">
      <div className="text-wrapper">
        <div className="hide">
          <motion.h1 variants={headingAnim} animate="visible" initial="hidden">
            Jane
          </motion.h1>
        </div>
        <div className="hide">
          <motion.h1 variants={headingAnim} animate="visible" initial="hidden">
            Smith
          </motion.h1>
        </div>
        <div className="hide">
          <motion.h2 variants={headingAnim} animate="visible" initial="hidden">
            Artist Portfolio
          </motion.h2>
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="slide">
          <div className="img">
            {carousel.map((item) => (
              <img
                className={slideIndex + 1 === item.index ? "active" : ""}
                src={item.src}
                alt={item.placeholder}
                key={item.imageKey}
              />
            ))}
          </div>
          <div className="btns">
            {carousel.map((item) => (
              <button
                onClick={handleCarousel}
                className={item.index - 1 === slideIndex ? "active" : ""}
                key={item.btnKey}
              >
                <span>{item.index}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
