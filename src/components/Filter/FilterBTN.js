/* eslint-disable */
import React from "react";

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check" style={{ padding: "0px" }}>
        <input className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
