import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';
import { beforeEach, describe, expect, vi } from 'vitest';
import { it } from 'vitest';

describe('Input Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('calls onChange and onSearch when value changes', () => {
    const mockOnChange = vi.fn();
    const mockOnSearch = vi.fn();

    render(<Input onChange={mockOnChange} onSearch={mockOnSearch} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'cat' } });

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnSearch).toHaveBeenCalledWith('cat');
  });

  it('displays the correct value', () => {
    render(<Input value="test value" />);
    expect(screen.getByRole('textbox')).toHaveValue('test value');
  });
});
