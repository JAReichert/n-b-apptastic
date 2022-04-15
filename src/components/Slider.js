import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

export default function Slider({ imageSrc, title, subtitle, flipped }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="nba" className="sliderImage"></img>
          <div className="sliderContent">
            <h1 className="sliderTitle">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="sliderContent">
            <h1 className="sliderTitle">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="" className="sliderImage"></img>
        </>
      );
    }
  };
  return (
    <div className={inView ? "slider sliderZoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
}
