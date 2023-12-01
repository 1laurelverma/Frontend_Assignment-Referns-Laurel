import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import Type from "./category/Type";
import styles from "./Filter.module.scss";

const Filter = ({
  // pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
  updateType,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updateType("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className={`${styles.filter_outer} col-lg-3 col-12  `}>
      <div>
        <h3 className="text-center mb-3" style={{ color: "#4682A9" }}>
          Filters
        </h3>

        <div
          className="accordion"
          id="accordionExample"
          style={{ backgroundColor: "#91C8E4", border: "2px solid #91C8E4", borderRadius: "5px" }}
        >
          <Status updatePageNumber={updatePageNumber} updateStatus={updateStatus} />
          <Species updatePageNumber={updatePageNumber} updateSpecies={updateSpecies} />
          <Gender updatePageNumber={updatePageNumber} updateGender={updateGender} />
          <Type updatePageNumber={updatePageNumber} updateType={updateType} />
        </div>
        <div
          style={{ cursor: "pointer", color: "#4682A9" }}
          onClick={clear}
          className=" text-decoration-none text-center mt-3 fs-5"
        >
          Clear Filters
        </div>
      </div>
    </div>
  );
};

export default Filter;
