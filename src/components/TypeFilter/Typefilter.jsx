import "./TypeFilter.scss";
import SearchButton from "./../SearchButton/Searchbutton";
import { useEffect, useState } from "react";

const Typefilter = () => {
  const [typeData, setTypeData] = useState();
  console.log(typeData);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const getType = () => {
    setSelectedTypes;
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((typeData) => setTypeData(typeData))
      .catch((error) => console.log("Hier ist ein Fehler: ", error));
  }, []);

  // getTypes

  return (
    <>
      <section className="typefilter-wrapper">
        <h2>Type</h2>

        <div>
          {typeData?.results.map((singleType, index) => (
            <button
              // onClick={getTypes}
              value={singleType.name}
              key={index}
              className={`${singleType.name}`}
            >
              {singleType.name}
            </button>
          ))}
        </div>

        {/* <div className="variante-zwei">
          {typeData?.results.map((singleType, index) => (
            <button
              onClick={() => getType(singleType)}
              value={singleType.name}
              key={index}
              className={`${singleType.name} ${
                selectedTypes?.includes(singleType.name) ? "bug-selected" : ""
              }`}
            >
              {singleType.name}
            </button>
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Typefilter;
