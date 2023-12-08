import { useEffect, useState, useContext } from "react";
import { PokeDetailsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import PokeItem from "../PokeItem/PokeItem";

const Searchbar = () => {

  const [searchbarInput, setSearchbarInput] = useState([]);
  const pokeData = useContext(PokeDetailsContext);

  const filterByKeyword = (e) => {

    const filteredPoke = [...pokeData.resetData].filter((pokemon) => {
      if(pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
      {
        return pokemon;
      }
    })
    pokeData.setPokedetaildata(filteredPoke);
  }

  return (
  <>
    <input 
    onChange={filterByKeyword} 
    className="searchbar" 
    type="text" 
    placeholder="Type in name or id"
    />
  </>);
};

export default Searchbar;
