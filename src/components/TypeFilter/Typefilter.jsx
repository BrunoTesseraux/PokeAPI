import "./TypeFilter.scss";
import { useEffect, useState, useContext } from "react";
import { PokeDetailsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import PokeItem from "../PokeItem/PokeItem";

const Typefilter = () => {
  const [typeData, setTypeData] = useState();
  const [typeInput, setTypeInput] = useState([]);
  const pokeData = useContext(PokeDetailsContext);

  console.log(typeInput);
  console.log(PokeDetailsContext);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((typeData) => setTypeData(typeData))
      .catch((error) => console.log("Hier ist ein Fehler: ", error));
  }, []);

  // push type inputs in typeInput array
  const getTypes = (event) => {
    
    if(typeInput.length < 2 && event.target.value !== "reset") // up to two choices max
    {
      setTypeInput(typeInput.concat(event.target.value));
      console.log(typeInput);
    }
    else if(event.target.value === "reset") // reset choices
    {
      setTypeInput([])
      console.log("typeInput reset", typeInput);
    }
    else
    {
      console.log("too many types");
    }
  }

  // filter by types
  const filterTypes = () =>
  {
    const typeMatch = [...pokeData.resetData].filter((pokemon) => 
    {
      for(const types of pokemon.types)
      {
        const pokeType = types.type.name.toLowerCase()
        if(pokeType.includes(typeInput[0]) || pokeType.includes(typeInput[1]))
        {
          return pokemon;
        }
        else if(typeInput.length === 0)
        {
          console.log("please select at least one type");
          return pokemon
        }
      }
    })
    pokeData.setPokedetaildata(typeMatch);
  }

  return (
    <>
      <section className="typefilter-wrapper">
        <h2>Type</h2>

        <div>
          {typeData?.results.map((singleType, index) => (
            <button
              onClick={getTypes}
              value={singleType.name}
              key={index}
              className={`${singleType.name}${typeInput.includes(singleType.name) ? "-selected" : ""}`}
            >
              {singleType.name}
            </button>
          ))}
        </div>

        <Link to="/types/pokemon-gallery" onClick={filterTypes}>Search</Link>
        <button value="reset" onClick={getTypes}>Reset</button>
      </section>
    </>
  );
  
  return <>
  
  </>;
};

export default Typefilter;
