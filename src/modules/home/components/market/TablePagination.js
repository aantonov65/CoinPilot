import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handlePageChange } from "./utils/handlePageChange";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TablePagination = ({ page = 1, setPage }) => {
  return (
    <div className="table-pagination">
      <button
        className={`pagination-btn left ${page === 1 ? "disabled" : ""}`}
        disabled={page === 1 ? true : false}
        onClick={(e) => handlePageChange(e, "-", page, setPage)}>
        <FontAwesomeIcon className="chevron" icon={faChevronLeft} />
      </button>
      Page {page}
      <button
        className={`pagination-btn right ${page === 15 ? "disabled" : ""}`}
        disabled={page === 15 ? true : false}
        onClick={(e) => handlePageChange(e, "+", page, setPage)}>
        <FontAwesomeIcon className="chevron" icon={faChevronRight} />
      </button>
    </div>
  );
};

export default TablePagination;
