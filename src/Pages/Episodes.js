import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="px-3 pt-5" style={{ backgroundColor: "#F6F4EB" }}>
      <div className="row mb-5">
        <h1 className="text-center mb-3">
          Episode name : <span style={{ color: "#4682A9" }}>{name === "" ? "Unknown" : name}</span>
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4" style={{ color: "#4682A9" }}>
            Pick Episode
          </h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
