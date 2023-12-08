import { useEffect, useState, useContext } from "react";
import { PokeDetailsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import PokeItem from "../PokeItem/PokeItem";
import "./PokeGallery.scss";

const PokeGallery = () => {
  const pokeData = useContext(PokeDetailsContext);

  return (
    <section className="grid">
      {pokeData.pokedetaildata.map((pokeInfos) => {
        return (
          <Link
            to={`./pokemon-details/${pokeInfos.id}`}
            className="pokemon-link"
          >
            <PokeItem
              key={pokeInfos.id}
              name={pokeInfos.name}
              img={pokeInfos.sprites.other.home.front_default}
              id={pokeInfos.id}
              index={pokeInfos.game_index}
              types={pokeInfos.types}
            />
          </Link>
        );
      })}{" "}
    </section>
  );
};

export default PokeGallery;
