/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <section className={props.ClassBanner}>
      <img src={props.picture} alt={props.alt} />
      <p className="banner-text">{props.text}</p>
    </section>
  );
}
