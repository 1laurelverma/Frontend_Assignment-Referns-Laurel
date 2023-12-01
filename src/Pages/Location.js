import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      console.log(a);
    })();
  }, [api]);

  return (
    <div className="px-3 pt-5" style={{ backgroundColor: "#F6F4EB" }}>
      <div className="row mb-5">
        <h1 className="text-center mb-3">
          Location :<span style={{ color: "#4682A9" }}> {name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}</h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4" style={{ color: "#4682A9" }}>
            Pick Location
          </h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
