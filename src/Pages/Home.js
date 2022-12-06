/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import HousingJson from "../assets/Housing.json";
import Banner from "../Components/Banner";
import Thumb from "../Components/Thumb";
import BannerHome from "../assets/BannerHome.webp";
// import Thumb from "../Components/Thumb";
import "./Home.css";
// import HousingSheet from "./HousingSheet";

export default function Home() {
  return (
    <>
      <Banner
        ClassBanner={"banner banner-home"}
        picture={BannerHome}
        alt="Image d'une forêt au bord de mer"
        text="Chez vous, partout et ailleurs"
      />

      <section className="housing-container">
        {HousingJson.map((housing) => {
          return (
            <Link
              className="housing-card"
              to={`/housingsheet/${housing.id}`}
              key={housing.id}
              title={housing.title}
            >
              <Thumb {...housing} />
            </Link>
          );
        })}
      </section>
    </>
  );
}
