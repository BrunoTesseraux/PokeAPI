import { useEffect, useContext } from "react";
import { FetchContext } from "../../context/Context";

const Pokelist = () => {
  const fetchedData = useContext(FetchContext);
  console.log("pokelist", fetchedData.pokedata);
  return (
    <div>
      <h1>hallo</h1>
      {fetchedData.pokedata.map((poke) => (
        <div>
          <h2>{poke.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default Pokelist;
