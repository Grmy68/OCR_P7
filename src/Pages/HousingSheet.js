/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import "./HousingSheet.css";
import HousingJson from "../assets/Housing.json";
import Accordeon from "../Components/Accordeon";
import Carrousel from "../Components/Carrousel";
import Tag from "../Components/Tag";
import Rating from "../Components/Rating";
import NotFound from "./NotFound";

export default function HousingSheet() {
  const { housingId } = useParams();
  const housing = HousingJson.find((housing) => housing.id === housingId);

  if (typeof housing !== "undefined") {
    const { title, location, rating, host, equipments, description, pictures } =
      housing;

    return (
      <>
        <section>
          <Carrousel pictures={pictures} />
          <div className="separate-infos-host">
            <div className="housinSheet-infos">
              <h1 className="housingSheet-title">{title}</h1>
              <span className="housingSheet-location">{location}</span>
              <ul className="housingSheet-tags">
                {housing.tags.map((tag, index) => (
                  <Tag key={index} getTag={tag} />
                ))}
              </ul>
            </div>
            <div className="separate-host-rating">
              <div className="housingSheet-host">
                <span>{host.name}</span>
                <img src={host.picture} alt="Photo de l'hôte" />
              </div>
              <div className="housingSheet-rate">
                <Rating rating={rating} />
              </div>
            </div>
          </div>
        </section>

        <section className="housingSheet-accordeons">
          <div className="housing-accord-container">
            <Accordeon title="Description" content={description} />
          </div>

          <div className="housing-accord-container">
            <Accordeon
              title="Équipements"
              content={equipments.map((equipments, index) => (
                <span className="equipments-list" key={index}>
                  {equipments}
                </span>
              ))}
            />
          </div>
        </section>
      </>
    );
  } else {
    return <NotFound />;
  }
}
