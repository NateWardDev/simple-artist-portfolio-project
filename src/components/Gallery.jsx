import { useEffect, useState, useRef } from "react";
// portfilios
import { portfolio } from "../data";
// motion framer/ animations
import { motion, useInView, AnimatePresence } from "framer-motion";
import { portfilioItem, headAnim } from "../animations";

const Gallery = () => {
  const [gallery] = useState(portfolio);
  const [index, setIndex] = useState(1);
  const [activeDisplay, setActiveDisplay] = useState(gallery[index - 1]);
  // popup state
  const [popup, setPopup] = useState(false);
  const [btnPopupIndex, setBtnPopupIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(activeDisplay.imgs);

  useEffect(() => {
    const currentDisplay = gallery.filter((element) => element.index === index);
    setActiveDisplay(currentDisplay[0]);
  }, [index, gallery]);

  useEffect(() => {
    const currentImage = activeDisplay.imgs.filter(
      (element) => element.imageIndex === btnPopupIndex
    );
    setActiveImage(currentImage);
  }, [popup, btnPopupIndex]);

  const handlePopup = (e) => {
    setPopup(!popup);
    setBtnPopupIndex(Number(e.target.id));
  };

  // scroll animations
  const ref = useRef(null);
  useInView(ref);

  return (
    <section id="portfolio">
      <div className="portfolio-head">
        <div className="hide">
          <motion.h2
            ref={ref}
            variants={headAnim}
            initial="hidden"
            whileInView="visible"
            viewport="viewport"
          >
            Gallery
          </motion.h2>
        </div>
        <div className="btns">
          {gallery.map((item) => (
            <motion.button
              variants={headAnim}
              initial="hidden"
              whileInView="visible"
              viewport="viewport"
              onClick={(e) => setIndex(Number(e.target.id))}
              id={item.index}
              key={item.btnKey}
              className={item.index === index ? "active" : ""}
            >
              {item.btnText}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        <AnimatePresence>
          {activeDisplay.imgs.map((img) => (
            <motion.div
              className={`grid-img-wrapper ${img.className}`}
              key={img.key}
              variants={portfilioItem}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={img.src} alt="" />
              <div className="image-btn">
                <button onClick={handlePopup} id={img.imageIndex}>
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div
        className={`popup-wrapper ${popup ? "active" : ""}`}
        onClick={() => setPopup(!popup)}
      >
        <div className="overlay"></div>
        <div className="popup-img-wrapper">
          <div className="img">
            {activeImage.map((img) => (
              <img src={img.src} alt="" key={img.key} />
            ))}
          </div>
          <p>Click anywhere to close</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
