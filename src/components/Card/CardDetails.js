import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Card.module.scss";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState([]);
  let [fetchedData1, setFetchedData1] = useState([]);
  let [fetchedData2, setFetchedData2] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;
  // let { locationName , locationdimension, locationid} = fetchedData1;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      // console.log(data);

      let a = await fetch(data.location.url).then((res) => res.json());
      setFetchedData1(a);
      // console.log(a);

      let b = await Promise.all(
        data.episode.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setFetchedData2(b);
      // console.log(b);
    })();
  }, [api]);

  return (
    <div
      className={`${styles.cardDetails_outer} d-flex justify-content-around py-5 px-4 w-100`}
      style={{ backgroundColor: "#F6F4EB" }}
    >
      <div className="row">
        <div className="col-lg-6 col-11">
          <h1 className="text-center">{name}</h1>

          <img className="img-fluid" src={image} alt="" />
          {(() => {
            if (status === "Dead") {
              return <div className=" bg-danger fs-5 my-3 text-center">{status}</div>;
            } else if (status === "Alive") {
              return <div className="  bg-success fs-5 my-3 text-center">{status}</div>;
            } else {
              return <div className=" bg-secondary fs-5 my-3 text-center ">{status}</div>;
            }
          })()}

          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Location name: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Location id: </span>
            {fetchedData1.id}
          </div>
          <div className="">
            <span className="fw-bold">Location dimension: </span>
            {fetchedData1.dimension}
          </div>
          <div className="">
            <span className="fw-bold">Amount of Residents: </span>
            {fetchedData1.residents?.length}
          </div>
        </div>

        <div className="content col-lg-6 col-11">
          <div className="">
            <span className="fw-bold">List of episodes character has featured: </span>
            {fetchedData2.map((namee, index) => {
              return (
                <li key={index} style={{ margin: "0px" }}>
                  {namee.name}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
