import React, { useState } from "react";
import "./Carrousel.css";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

export default function Carrousel(props) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const next = () => {
    if (currentPicture + 1 >= props.pictures.length) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };

  const prev = () => {
    if (currentPicture + 1 <= 1) {
      setCurrentPicture(props.pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };

  return (
    <div className="carrousel-container">
      <div className="carrousel-pictures">
        <img src={props.pictures[currentPicture]} alt="" />
      </div>
      {props.pictures.length > 2 && (
        <>
          <div className="carrousel-navigation">
            <div className="navigation-left">
              <img
                src={arrowLeft}
                alt="Fleche de navigation vers la gauche"
                onClick={prev}
              />
            </div>
            <div className="navigation-right">
              <img
                src={arrowRight}
                alt="Fleche de navigation vers la droite"
                onClick={next}
              />
            </div>
          </div>
          <div className="carrousel-pagination">
            {currentPicture + 1}/{props.pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
