import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
  const mockOnCatsLoaded = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();

    globalThis.fetch = vi.fn(
      () =>
        Promise.resolve({
          json: () =>
            Promise.resolve([{ id: '1', url: 'cat.jpg', breeds: [] }]),
          ok: true,
          status: 200,
        }) as Promise<Response>
    );
  });

  it('renders header with search input and button', () => {
    render(
      <BrowserRouter>
        <Header onCatsLoaded={mockOnCatsLoaded} />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText(/enter breed id/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls fetchCats on button click', async () => {
    render(
      <BrowserRouter>
        <Header onCatsLoaded={mockOnCatsLoaded} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalled();
    });
  });
});
