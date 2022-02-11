import React, { useState, useEffect } from "react";
import "./Back2Top.css";

const Back2Top = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblility);
    return () => {
      window.removeEventListener("scroll", toggleVisiblility);
    };
  });
  return (
    <div className="scroll2Top">
      {isVisible && (
        <div onClick={scrollToTop} className="back2Topconainer">
          Back to Top
        </div>
      )}
    </div>
  );
};

export default Back2Top;
