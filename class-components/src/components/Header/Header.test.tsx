import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect, vi, beforeEach } from 'vitest';

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
    render(<Header onCatsLoaded={mockOnCatsLoaded} />);
    expect(screen.getByPlaceholderText(/enter breed id/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls fetchCats on button click', async () => {
    render(<Header onCatsLoaded={mockOnCatsLoaded} />);
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalled();
    });
  });
});
