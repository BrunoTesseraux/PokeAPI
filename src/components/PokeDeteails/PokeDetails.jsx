import { useContext } from "react";
import { PokeDetailsContext } from "../../context/Context"
import { useParams } from "react-router-dom";


const PokeDetails = () => {

const detailsPageContext = useContext(PokeDetailsContext);
const pokemon = useParams();
const singlePokemonPath = pokemon.id;

const filteredSinglePokemon = detailsPageContext.pokedetaildata.filter((item) => {

  if(item.id.toString() === singlePokemonPath.toString()){
    console.log("item",item.name)
    return item
  }
})
  return (
          <article>
          {/* <img src={filteredSinglePokemon.sprites.other.home.front_default} alt={filteredSinglePokemon.name}/> */}
          <h1>{filteredSinglePokemon.name}</h1>
          <h2>{filteredSinglePokemon.id}</h2>
          {/* <button></button>
          <button></button>
          <p>{details.height}</p>
          <p>{details.weight}</p>
          <p>{details.moves}</p>
          <p>{details.stats}</p>
          <p>{details.}</p>

          <div>
          {details.stats.map((stats, index) =>  <p key={index}>{stats.base_stats.name}</p>)}
          </div> */}
        </article>
        
          
        
        );
};

export default PokeDetails;


          