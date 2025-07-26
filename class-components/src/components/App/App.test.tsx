import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('App Component', () => {
  it('renders header and main content', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main
  });
});
