import { CardList } from '../CardList/CardList';
import type { MainProps } from '../../types/types';
import './main.css';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';
import { Pagination } from '../Pagination/Pagination';

export const Main = ({
  cats,
  currentPage,
  totalPages,
  onPageChange,
}: MainProps) => {
  return (
    <>
      <ErrorBoundary>
        <main className="main">
          <CardList cats={cats} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </main>
      </ErrorBoundary>
    </>
  );
};
