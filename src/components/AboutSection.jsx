import artist from "../images/artist.jpg";
import { useRef } from "react";
// Animations
import { motion, useInView } from "framer-motion";
import { textAnim, headAnim } from "../animations";

const AboutSection = () => {
  // framer motion animations
  const ref = useRef(null);
  useInView(ref);

  return (
    <section className="about-container" id="about" ref={ref}>
      <div className="about-img">
        <img src={artist} alt="me drawing" />
      </div>
      <div className="about-text">
        <div className="about-head">
          <div className="hide">
            <motion.h3
              variants={headAnim}
              initial="hidden"
              whileInView="visible"
              viewport="viewport"
            >
              About
            </motion.h3>
          </div>
          <div className="hide">
            <motion.h2
              variants={headAnim}
              initial="hidden"
              whileInView="visible"
              viewport="viewport"
            >
              Who Am I?
            </motion.h2>
          </div>
        </div>
        <motion.p
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          viewport="viewport"
        >
          Welcome to the vibrant world of comic book art! I&apos;m Jane, and I
          like to draw. Ive always had a passion for visuals. I try to breathe
          life into characters and illustrations that leap off the page. Each
          stroke of my pen and brush is infused with boundless imagination,
          inviting you to join me on exhilarating adventures through vividly
          illustrated worlds.
        </motion.p>
        <motion.p
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          viewport="viewport"
        >
          Exploring the realms of heroes, villains, and everything in between,
          my work celebrates the timeless allure of comic book art. Iconic
          characters from iconic comic books. I craft each chracter with
          precision and passion, ensuring every moment resonates with intensity
          and excitement. Join me as we embark on an electrifying journey where
          imagination knows no bounds, and the art of comics reigns supreme.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
