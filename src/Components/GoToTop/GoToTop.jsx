import React, { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import "./gototop.css";
function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let scrollHeight = 250;

    let windScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windScroll > scrollHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="top-container">
      {isVisible ? <GoMoveToTop onClick={gotoTop} className="topIcon" /> : ""}
    </div>
  );
}
export default GoToTop;
