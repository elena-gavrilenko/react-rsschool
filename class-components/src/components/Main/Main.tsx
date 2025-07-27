import { CardList } from '../CardList/CardList';
import type { MainProps } from '../../types/types';
import './main.css';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';

export const Main = ({ cats }: MainProps) => {
  return (
    <>
      <ErrorBoundary>
        <main className="main">
          <CardList cats={cats} />
        </main>
      </ErrorBoundary>
    </>
  );
};
