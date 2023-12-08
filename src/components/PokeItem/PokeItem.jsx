const PokeItem = (props) => {
  
  return (

        <article>
        <img src={props.img} alt={props.name}/>
          <div>
          <h2>{props.name.toUpperCase()}</h2>
          <h3># {props.id.toString().padStart(3,"0")}</h3>
          <div>
          {props.types.map((types, index) =>  <p key={index}>{types.type.name}</p>)}
          </div>
          </div>
        </article>
  )
  ;
};

export default PokeItem;
