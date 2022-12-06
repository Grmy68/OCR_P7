import React from "react";
import Banner from "../Components/Banner";
import Accordeon from "../Components/Accordeon";
import AboutJson from "../assets/About.json";
import BannerAbout from "../assets/BannerAbout.webp";
import "./About.css";

export default function About() {
  return (
    <>
      <Banner
        ClassBanner={"banner banner-about"}
        picture={BannerAbout}
        alt="Image de montagnes"
        text=""
      />

      <section className="accordeons">
        {AboutJson.map((about) => {
          return (
            <div className="accord" key={about.title}>
              <Accordeon {...about} />
            </div>
          );
        })}
      </section>
    </>
  );
}
