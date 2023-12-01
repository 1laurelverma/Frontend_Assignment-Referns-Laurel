import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button onClick={searchBtn} className={`${styles.btn} btn fs-6`}>
        Search
      </button>
    </form>
  );
};

export default Search;
