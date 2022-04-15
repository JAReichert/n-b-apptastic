import React from "react";
import "./Main.css";

export default function Main({ imageSrc }) {
  return (
    <div className="main">
      <img src={imageSrc} alt="Bam dunking" className="mainImage" />
      <h1 className="mainTitle">N-B-Apptastic!</h1>
    </div>
  );
}
