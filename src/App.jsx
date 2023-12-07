import "./App.css";
import { FetchContext } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";
import DataFetch from "./data/DataFetch";
import Pokelist from "./components/PokeList/PokeList";
function App() {
  const [pokedata, setPokedata] = useState([]);
  console.log("appjsx", pokedata);
  return (
    <>
      <FetchContext.Provider value={{ pokedata, setPokedata }}>
        <DataFetch />
        <Header />
        <Pokelist />
        {/* <Routes>
          <Route />
        </Routes> */}
      </FetchContext.Provider>
    </>
  );
}

export default App;
