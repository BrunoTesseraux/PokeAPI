import { useEffect, useContext } from "react";
import { FetchContext, PokeDetailsContext } from "../../context/Context";

const Pokelist = () => {
  const fetchedData = useContext(FetchContext);
  const pokeDetailsData = useContext(PokeDetailsContext);
  console.log("pokelist", fetchedData.pokedata);

  let array = [];
  console.log(array);

  fetchedData.pokedata.map((poke) =>
    fetch(poke.url)
      .then((response) => response.json())
      .then((data) => array.push(data))
  );

  return (
    <div>
      <h1>hallo</h1>
    </div>
  );
};
export default Pokelist;
