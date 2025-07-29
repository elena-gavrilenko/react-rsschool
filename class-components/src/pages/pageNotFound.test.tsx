import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PageNotFound } from './pageNotFound';

describe('Page not found', () => {
  it('should render page content', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: 'Back to home' })
    ).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Back to home' });
    expect(link).toHaveAttribute('href', '/');
  });
});
