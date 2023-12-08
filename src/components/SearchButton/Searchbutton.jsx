import { useContext, useState } from "react";
import { PokeDetailsContext} from "../../context/Context";

const Searchbutton = () => {
  
  const [typeInput, setTypeInput] = useState([]);
  const pokeData = useContext(PokeDetailsContext);

  // console.log(buttonValue);
  // console.log(pokeData);
  console.log("typeInput", typeInput);
  
  // push type inputs in typeInput array
  const getTypes = (event) => {
    
    if(typeInput.length < 2 && event.target.value !== "reset") // up to two choices max
    {
      setTypeInput(typeInput.concat(event.target.value));
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
      <button onClick={filterTypes}>Search</button>
      <button value="poison" onClick={getTypes}>Poison</button> 
      <button value="psychic" onClick={getTypes}>Grass</button>
      <button value="reset" onClick={getTypes}>Reset</button>
    </>
  );
};

export default Searchbutton;
