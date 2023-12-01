import React from "react";
import FilterBTN from "../FilterBTN";

const Type = ({ updateType, updatePageNumber }) => {
  let type = ["planet"];
  return (
    <div className="accordion-item" style={{ backgroundColor: "white" }}>
      <h2 className="accordion-header" id="headingfour" style={{ backgroundColor: "#F6F4EB" }}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefour"
          aria-expanded="false"
          aria-controls="collapsefour"
        >
          Type
        </button>
      </h2>
      <div
        id="collapsefour"
        className="accordion-collapse collapse "
        aria-labelledby="headingfour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {type.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="type"
              task={updateType}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Type;
