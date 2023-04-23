import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
  qtdRegistros,
  totalRegistros,
  page,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumber = [];
  const [pageNumberLimit, setPageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  for (let i = 1; i <= Math.ceil(totalRegistros / qtdRegistros); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul class="pagination">
        <li>
          <button
            onClick={() => {
              prevPage();
              if ((page - 1) % pageNumberLimit === 0 && page != 1) {
                setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
              }
            }}
          >
            Prev
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (minPageNumberLimit - pageNumberLimit >= 0) {
                setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
              }
            }}
          >
            ...
          </button>
        </li>
        {pageNumber.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                className={page == number ? "active" : null}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        })}
        <li>
          <button
            onClick={() => {
              if (
                pageNumberLimit + minPageNumberLimit <=
                Math.ceil(totalRegistros / qtdRegistros)
              ) {
                setMaxPageNumberLimit(pageNumberLimit + maxPageNumberLimit);
                setMinPageNumberLimit(pageNumberLimit + minPageNumberLimit);
              }
            }}
          >
            ...
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              nextPage();
              if (page + 1 > maxPageNumberLimit) {
                setMaxPageNumberLimit(pageNumberLimit + maxPageNumberLimit);
                setMinPageNumberLimit(pageNumberLimit + minPageNumberLimit);
              }
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
