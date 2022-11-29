import React, { useState, useRef, useEffect } from "react";
import Chevron from "../assets/chevron.svg";
import "./Accordeon.css";

export default function Accordeon(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <>
      <div onClick={toggleState} className="accord-visible">
        <h2>{props.title}</h2>
        <img
          src={Chevron}
          alt="chevron"
          style={{rotate: toggle ? "180deg" : ""}}
        />
      </div>

      <div
        ref={refHeight}
        className={toggle ? "accord-toggle animated" : "accord-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.content}</p>
      </div>
    </>
  );
}
