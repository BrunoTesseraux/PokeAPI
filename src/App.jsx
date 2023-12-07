import "./App.css";
import { FetchContext } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useState } from "react";
import DataFetch from "./data/DataFetch";
function App() {
  const [pokedata, setPokedata] = useState([]);
  return (
    <>
      <FetchContext.Provider>
        <DataFetch />
        <Header />
        <Routes>
          <Route />
        </Routes>
      </FetchContext.Provider>
    </>
  );
}

export default App;
