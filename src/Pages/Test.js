import housingJson from "../assets/Housing.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Tag from "../Components/Tag";
import Thumb from "../Components/Thumb";
import Accordeon from "../Components/Accordeon";
import Carrousel from "../Components/Carrousel"

export default function Test() {
  console.log(housingJson);

  // Afficher TAGS
  const { housingId } = useParams();
  const housing = housingJson.find((housing) => housing.id === housingId);
  const { /*title, location, rating, host, equipments, description,*/ pictures } = housing;
  return (
    <main>
      <div>
        <h1 style={{ textDecoration: "underline" }}>id: {housingId}</h1>
        <h2 style={{ textDecoration: "underline" }}>TAGS</h2>

        {housing.tags.map((tag, index) => (
          <Tag key={index} getTag={tag} />
        ))}
        <h2 style={{ textDecoration: "underline" }}>Thumb</h2>
        <Link to={`/about`} key={housing.id} title={housing.title}>
          <Thumb {...housing} />
        </Link>
        <h2 style={{ textDecoration: "underline" }}>Accordeon</h2>
        <Accordeon />
        <Accordeon />
        <Carrousel props={pictures} />

      </div>
    </main>
  );
}
