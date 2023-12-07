import { FetchContext } from "../context/Context";
import { useEffect, useState } from "react";
import { useContext } from "react";

const DataFetch = () => {
  const fetchState = useContext(FetchContext);
  //   console.log(fetchState);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1292")
      .then((response) => response.json())
      .then((data) => fetchState.setPokedata(data.results));
  }, []);
};
export default DataFetch;
