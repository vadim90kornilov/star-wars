import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ dataCount, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => {
        onChangePage(event.selected + 1);
      }}
      pageRangeDisplayed={10}
      pageCount={Math.ceil(dataCount / 10)}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
