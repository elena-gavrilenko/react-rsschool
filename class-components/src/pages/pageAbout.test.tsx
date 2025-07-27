import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PageAbout } from './pageAbout';

describe('About Page', () => {
  it('should render page content', () => {
    render(
      <BrowserRouter>
        <PageAbout />
      </BrowserRouter>
    );

    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'logo schools' })
    ).toBeInTheDocument();
  });
});
