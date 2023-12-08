import { useEffect, useContext } from "react";
import { FetchContext, PokeDetailsContext } from "../../context/Context";
import PokeItem from "../PokeItem/PokeItem";
import "./PokeList.scss"



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
          pokeDetailsData.setResetData(array); //RESET DATA FÜR BACK HOME BUTTON
        })
        .catch((error) => console.log("Error fetching data:", error));
    };

    fetchData();
  }, [fetchedData.pokedata, pokeDetailsData.setPokedetaildata]);


  return (
    <section className="grid">
      {pokeDetailsData.pokedetaildata.map((pokeInfos) => {
        return (
        <PokeItem
        key={pokeInfos.id}
        name={pokeInfos.name}
        img={pokeInfos.sprites.other.home.front_default}
        id={pokeInfos.id}
        index={pokeInfos.game_index}
        types={pokeInfos.types}
      />
        )
      })}
    </section>
  );
};

export default Pokelist;
