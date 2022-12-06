/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import "./HousingSheet.css";
import HousingJson from "../assets/Housing.json";
import Accordeon from "../Components/Accordeon";
import Carrousel from "../Components/Carrousel";
import Tag from "../Components/Tag";

export default function HousingSheet() {
  const { housingId } = useParams();
  const housing = HousingJson.find((housing) => housing.id === housingId);
  const { title, location, rating, host, equipments, description, pictures } =
    housing;

  return (
    <>
      <section>
        <Carrousel />
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

          <div className="housingSheet-host">
            <span>{host.name}</span>
            <img src={host.picture} alt="Photo de l'hôte" />
          </div>
        </div>
      </section>

      <section className="housingSheet-accordeons">
        <Accordeon title="Description" content={description} />
        <Accordeon
          title="Équipements"
          content={equipments.map((equipments, index) => (
            <li className="apartment__dropdowns__list" key={index}>
              {equipments}
            </li>
          ))}
        />
      </section>
    </>
  );
}
