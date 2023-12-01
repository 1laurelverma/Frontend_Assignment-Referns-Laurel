import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
// import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      // console.log(x);
      let { id, image, name, status, location, gender } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content} p-2`}>
              <div className="fs-5 fw-bold mb-4" style={{ color: "#4682A9" }}>
                {name}
              </div>
              <div className="">
                <div className="fs-6 fw-normal">
                  Gender :{" "}
                  <span className="fs-6 fw-bold" style={{ color: "#749BC2" }}>
                    {gender}
                  </span>
                </div>
              </div>
              <div className="">
                <div className="fs-6 fw-normal">
                  Last Location :{" "}
                  <span className="fs-6 fw-bold" style={{ color: "#749BC2" }}>
                    {location.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;