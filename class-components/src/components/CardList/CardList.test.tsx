import { render, screen } from '@testing-library/react';
import { CardList } from './CardList';
import { describe, expect, it } from 'vitest';

describe('CardList Component', () => {
  const mockCats = [
    {
      id: '1',
      url: 'https://example.com/cat1.jpg',
      width: 500,
      height: 500,
      breeds: [{ id: 'beng', name: 'Bengal', description: 'Playful breed' }],
    },
    {
      id: '2',
      url: 'https://example.com/cat2.jpg',
      width: 500,
      height: 500,
      breeds: [{ id: 'siam', name: 'Siamese', description: 'Vocal breed' }],
    },
  ];

  it('renders list of cards', () => {
    render(<CardList cats={mockCats} />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByText('Bengal')).toBeInTheDocument();
    expect(screen.getByText('Siamese')).toBeInTheDocument();
  });

  it('renders empty state when no cats', () => {
    render(<CardList cats={[]} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
