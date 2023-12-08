import { useContext } from "react";
import { PokeDetailsContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./PokeDetails.scss";

const PokeDetails = () => {
  const detailsPageContext = useContext(PokeDetailsContext);
  const pokemon = useParams();
  const singlePokemonPath = pokemon.id;

  const singlePokemon = detailsPageContext.pokedetaildata.filter((item) => {
    if (item.id.toString() === singlePokemonPath.toString()) {
      console.log("item", item.name);
      return item;
    }
  });
  console.log("single", singlePokemon[0]);

  return (
    <article
      className="pokemondetails
    "
    >
      <div className="h2-container">
        <h2 className="idk">
          #{singlePokemon[0].id.toString().padStart(3, "0")}
        </h2>
      </div>
      <img
        className="detailblick"
        src={singlePokemon[0].sprites.other.home.front_default}
        alt={singlePokemon.name}
      />
      <h1 className="detailüberschrift">
        {singlePokemon[0].name.charAt(0).toUpperCase() +
          singlePokemon[0].name.slice(1).toLowerCase()}
      </h1>

      <div className="flex3">
        {singlePokemon[0].types.map((types, index) => (
          <button key={index} className={`${types.type.name}`}>
            {types.type.name}
          </button>
        ))}
      </div>
      <div className="flex">
        <p>Height: {singlePokemon[0].height} In</p>
        <p>Weight: {singlePokemon[0].weight} lb</p>
      </div>
      <div className="flex2">
        {singlePokemon[0].stats.map(
          (
            stats,
            index,
            HP,
            Attack,
            Defense,
            Speed,
            Specialattck,
            Specialdefense
          ) => (
            <p key={index} className="stats">
              {" "}
              {stats.stat.name.charAt(0).toUpperCase() +
                stats.stat.name.slice(1).toLowerCase()}
              :{stats.base_stat}{" "}
            </p>
          )
        )}
      </div>
    </article>
  );
};

export default PokeDetails;
