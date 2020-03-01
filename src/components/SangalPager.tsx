import * as React from "react";
import { classnames, arraySizeN } from "../utils/utility";

export interface ISangalPager {
  currentPage: number; //page indexes start from 1
  lastPage: number;
  onPageChangeEvent: (pageNo: number) => void;
  paginationVolume?: number;
}

const SangalPager: React.FC<ISangalPager> = ({
  currentPage,
  lastPage,
  onPageChangeEvent,
  paginationVolume = 5
}) => {
  if (currentPage > lastPage) {
    console.warn("SangalPager: current page cannot be more than last page");
    return <div>Error occured when displaying pagination!</div>;
  }

  const diff = lastPage - currentPage;
  let totalVolume = Math.floor(paginationVolume / 2);
  let startIndex: number, lastIndex: number;

  if (
    currentPage - totalVolume > 0 &&
    currentPage + totalVolume + 1 < lastPage
  ) {
    startIndex = currentPage - totalVolume;
    lastIndex = currentPage + totalVolume + 1;
  } else if (currentPage + totalVolume + 1 >= lastPage) {
    startIndex = currentPage - (paginationVolume - diff);
    lastIndex = lastPage;
  } else {
    startIndex = 1;
    lastIndex = currentPage + (paginationVolume - currentPage) + 1;
  }

  totalVolume = lastIndex - startIndex;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const pageNo = e.currentTarget.getAttribute("data-page");
    if (pageNo && Number(pageNo)) {
      onPageChangeEvent(Number(pageNo));
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            data-testid="first"
            data-page={1}
            onClick={onClick}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">First</span>
          </a>
        </li>
        {arraySizeN(totalVolume).map((it, key) => (
          <li
            className={classnames(
              "page-item",
              currentPage === it + startIndex ? "active" : ""
            )}
            key={key}
          >
            <a
              className="page-link"
              data-page={startIndex + it}
              data-testid={`${startIndex + it}`}
              onClick={onClick}
            >
              {startIndex + it}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            data-testid={"last"}
            data-page={lastPage - 1}
            onClick={onClick}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SangalPager;
