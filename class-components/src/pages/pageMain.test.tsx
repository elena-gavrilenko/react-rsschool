import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageMain } from './pageMain';
import { BrowserRouter } from 'react-router-dom';

describe('PageMain', () => {
  it('should render App with Header and Main', () => {
    render(
      <BrowserRouter>
        <PageMain />
      </BrowserRouter>
    );

    expect(screen.getByText('Cats')).toBeInTheDocument();

    expect(document.querySelector('.main')).toBeInTheDocument();

    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
