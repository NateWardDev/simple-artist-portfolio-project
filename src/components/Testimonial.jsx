import { useState, useRef } from "react";
// data
import { testimonialState } from "../data";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// animations
import { motion, useInView } from "framer-motion";
import { headAnim } from "../animations";

const Testimonial = () => {
  const [testimonial] = useState(testimonialState);
  // scroll animations
  const ref = useRef(null);
  useInView(ref);

  return (
    <section className="testimonial-container" ref={ref}>
      <div className="head hide">
        <motion.h2
          variants={headAnim}
          initial="hidden"
          whileInView="visible"
          viewport="viewport"
        >
          From People Like You!
        </motion.h2>
      </div>
      <div className="test-wrapper">
        {testimonial.map((item) => (
          <div className={`${item.wrapperClass}`} key={item.key}>
            <div className="img hide">
              <img src={item.imgSrc} alt={item.imgAlt} />
            </div>
            <div className="text">
              <span>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              <p>{item.text}</p>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
