import { useState, useEffect } from "react";

const Preloader = () => {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(true);
    }, 1000);
  }, []);

  return (
    <div className={`preloader-wrapper ${preloader ? "loaded" : ""}`}>
      <div className="container">
        <h1 className={preloader ? "loaded" : ""}>Jane Smith Art</h1>
        <div className={`slide1 slide ${preloader ? "loaded" : ""}`}></div>
        <div className={`slide2 slide ${preloader ? "loaded" : ""}`}></div>
        <div className={`slide3 slide ${preloader ? "loaded" : ""}`}></div>
      </div>
    </div>
  );
};

export default Preloader;
