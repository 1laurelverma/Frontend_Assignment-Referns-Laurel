/* eslint-disable */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          .arrow_button {
            color: white !important;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
              color: white;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center py-4 gap-4"
        style={{ color: "white" }}
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn fs-6 prev arrow_button"
        nextClassName="btn fs-6 next arrow_button"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
