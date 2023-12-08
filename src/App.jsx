import "./App.css";
import { FetchContext, PokeDetailsContext } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useContext, useState } from "react";
import DataFetch from "./data/DataFetch";
import Pokelist from "./components/PokeList/PokeList";
import Home from "./pages/Home";
import Typefilter from "./components/TypeFilter/Typefilter";
import PokeDetails from "./components/PokeDeteails/PokeDetails";
import PokeGallery from "./components/PokeGallery/PokeGallery";

function App() {
  const [pokedata, setPokedata] = useState([]);
  const [resetData, setResetData] = useState([])
  const [pokedetaildata, setPokedetaildata] = useState([]);

  // console.log(searchInput);
  // console.log("appjsx", pokedata);
  // console.log("Appjsx", pokedetaildata);
  // console.log("Appjsx resetData:", resetData);

  return (
    <FetchContext.Provider value={{ pokedata, setPokedata }}>
      <PokeDetailsContext.Provider
        value={{ pokedetaildata, setPokedetaildata, resetData, setResetData }}
      >
        <DataFetch />
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/types" element={ <Typefilter />} />
          <Route path="/types/pokemon-gallery" element={ <PokeGallery/> } />
          <Route path="/pokemon-details/:id" element={<PokeDetails />} />
        </Routes>
      </PokeDetailsContext.Provider>
    </FetchContext.Provider>
  );
}

export default App;
