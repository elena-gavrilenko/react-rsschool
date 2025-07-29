import type { PaginationProps } from '../../types/types';
import { Button } from '../UI/Button/Button';
import './pagination.css';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <Button
        className="pagination__prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt; Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        className="pagination__next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &gt;
      </Button>
    </div>
  );
};
