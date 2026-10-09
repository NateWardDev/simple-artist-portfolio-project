import { useState, useRef } from "react";
// data
import { commissionState } from "../data";
// animations
import { motion, useInView } from "framer-motion";
import { headAnim } from "../animations";

const Commission = () => {
  const [commissionData] = useState(commissionState);

  // scroll animations
  const ref = useRef(null);
  useInView(ref);

  return (
    <section id="commission-container" ref={ref}>
      <div>
        <div className="hide">
          <motion.h3
            variants={headAnim}
            initial="hidden"
            whileInView="visible"
            viewport="viewport"
          >
            Commissions
          </motion.h3>
        </div>
        <div className="hide">
          <motion.h2
            variants={headAnim}
            initial="hidden"
            whileInView="visible"
            viewport="viewport"
          >
            Want Custom Art?
          </motion.h2>
        </div>
      </div>
      <div className="comm-card-wrapper">
        {commissionData.map((item) => (
          <div className="comm-card" key={item.name}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="comm-text-wrapper">
              <h4>{item.name} </h4>
              <div className="comm-text">
                <div>
                  <p className="title">A4 size: {item.a4Price} </p>
                  <p>{item.a4sizeCm}</p>
                  <p>{item.a4sizeIn}</p>
                </div>
                <div>
                  <p className="title">A3 size: {item.a3Price} </p>
                  <p>{item.a3sizeCm}</p>
                  <p>{item.a3sizeIn}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commission;
