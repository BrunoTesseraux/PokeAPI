import { Link } from "react-router-dom";
import "./PokeItem.scss"



const PokeItem = (props) => {
  return (
        <article>
          <div>
        <img src={props.img} alt={props.name}/>
        </div>
          <div>
          <h2>{props.name.toUpperCase()}</h2>
          <h3># {props.id.toString().padStart(3,"0")}</h3>
          <div className="flexitem">
          {props.types.map((types, index) =>  <p key={index}>{types.type.name}</p>)}
          </div>
          </div>
          <Link to="./pokemon-details"/>
        </article>
  )
  ;
};

export default PokeItem;
