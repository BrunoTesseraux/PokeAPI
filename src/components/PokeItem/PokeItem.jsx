import { Link } from "react-router-dom";
import "./PokeItem.scss";

const PokeItem = (props) => {
  return (
    <article class="pokeitem">
      <Link to={`./pokemon-details/${props.id}`} className="pokemon-link">
        <img src={props.img} alt={props.name} />
        <div>
          <p>#{props.id.toString().padStart(3, "0")}</p>
          <p>
            {props.name.charAt(0).toUpperCase() +
              props.name.slice(1).toLowerCase()}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PokeItem;
