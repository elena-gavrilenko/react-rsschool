// Main.test.tsx
import { render, screen } from '@testing-library/react';
import { Main } from './Main';
import type { CatImage } from '../../types/types';
import { describe, it, expect } from 'vitest';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';
describe('Main Component', () => {
  const validCat: CatImage = {
    id: '1',
    url: 'https://example.com/cat.jpg',
    width: 500,
    height: 500,
    breeds: [{ id: 'beng', name: 'Bengal', description: 'Test' }],
  };

  it('renders cards with valid data', () => {
    render(
      <ErrorBoundary>
        <Main cats={[validCat]} />
      </ErrorBoundary>
    );
    expect(screen.getByText('Bengal')).toBeInTheDocument();
  });

  it('handles empty cats array', () => {
    render(
      <ErrorBoundary>
        <Main cats={[]} />
      </ErrorBoundary>
    );
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
