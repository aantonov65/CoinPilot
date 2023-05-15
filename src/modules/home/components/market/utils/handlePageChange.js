import { scrollToSection } from "./scrollToSection";

export const handlePageChange = (e, operator, page, setPage) => {
  console.log(e.target.classList);
  if (operator === "+") {
    setPage(page + 1);
  } else if (operator === "-") {
    if (page !== 1) {
      setPage(page - 1);
    }
  }
  scrollToSection("market");
};
