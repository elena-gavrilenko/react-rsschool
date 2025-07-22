// errorBoundary.test.tsx
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './errorBoundary';
import { afterAll, beforeAll, vi } from 'vitest';
import { describe, expect, it } from 'vitest';
describe('ErrorBoundary', () => {
  const ThrowErrorComponent = () => {
    throw new Error('Test Error');
  };
  beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('displays fallback UI when child throws error', () => {
    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText(/something went wrong!/i)).toBeInTheDocument();

    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
