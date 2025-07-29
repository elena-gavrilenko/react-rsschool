import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
  const mockOnSearchQueryChange = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders header with search input and button', () => {
    render(
      <BrowserRouter>
        <Header
          onSearchQueryChange={mockOnSearchQueryChange}
          isLoading={false}
        />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/enter breed id/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls onSearchQueryChange on button click', () => {
    render(
      <BrowserRouter>
        <Header
          onSearchQueryChange={mockOnSearchQueryChange}
          isLoading={false}
        />
      </BrowserRouter>
    );

    // Изменяем значение input
    const input = screen.getByPlaceholderText(/enter breed id/i);
    fireEvent.change(input, { target: { value: 'beng' } });

    // Кликаем кнопку поиска
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(mockOnSearchQueryChange).toHaveBeenCalledWith('beng');
  });

  it('disables button when loading', () => {
    render(
      <BrowserRouter>
        <Header
          onSearchQueryChange={mockOnSearchQueryChange}
          isLoading={true}
        />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeDisabled();
  });

  it('updates search query on input change', () => {
    render(
      <BrowserRouter>
        <Header
          onSearchQueryChange={mockOnSearchQueryChange}
          isLoading={false}
        />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText(
      /enter breed id/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'siam' } });

    expect(input.value).toBe('siam');
  });
});
