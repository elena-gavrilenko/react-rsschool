import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
