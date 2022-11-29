import React from "react";
import "./Thumb.css"

export default function Thumb(props) {
  return (
      <article className="article">
        <img className="article-image" src={props.cover} alt="Appartement" />
        <div className="article-title">{props.title}</div>
      </article>
  );
}
