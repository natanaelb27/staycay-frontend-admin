import React from 'react';
import {
  PageButton,
  EllipsesButton,
  HelperButton,
} from './style';
import paginationRange from '../../helpers/Pagination';

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) {
  const pageRange = paginationRange({
    currentPage, totalPages, siblingCount,
  });

  if (currentPage === 0 || pageRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = pageRange[pageRange.length - 1];

  const ellipsis = '...';

  return (
    <div>
      <HelperButton
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Prev
      </HelperButton>
      {pageRange.map((pageNumber, index) => {
        const keyMap = pageNumber + index;
        if (pageNumber === ellipsis) {
          return (
            <EllipsesButton
              type="button"
              key={keyMap}
            >
              &#8230;
            </EllipsesButton>
          );
        }

        return (
          <PageButton
            type="button"
            key={keyMap}
            className={pageNumber === currentPage ? 'active' : null}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      <HelperButton
        type="button"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        Next
      </HelperButton>
    </div>
  );
}

export default Pagination;
