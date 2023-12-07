import { useEffect, useContext } from "react";
import { FetchContext, PokeDetailsContext } from "../../context/Context";

const Pokelist = () => {
  const fetchedData = useContext(FetchContext);
  const pokeDetailsData = useContext(PokeDetailsContext);

  useEffect(() => {
    let array = [];

    const fetchData = () => {
      const promises = fetchedData?.pokedata.map((poke) =>
        fetch(poke.url)
          .then((response) => response.json())
          .then((data) => array.push(data))
          .catch((error) => console.log("Request not found", error))
      );

      Promise.all(promises)
        .then(() => {
          pokeDetailsData.setPokedetaildata(array);
        })
        .catch((error) => console.log("Error fetching data:", error));
    };

    fetchData();
  }, [fetchedData.pokedata, pokeDetailsData.setPokedetaildata]);

  return (
    <div>
      <h1>PokeList</h1>
      {pokeDetailsData.pokedetaildata.map((pokeInfos) => {
        return (
          <div>
            <h2>{pokeInfos.name}</h2>
            <img src={pokeInfos.sprites.other.home.front_default} alt="" />
          </div>
        )
      })}
    </div>
  );
};

export default Pokelist;
