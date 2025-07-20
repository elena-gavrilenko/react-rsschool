import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import type { CatImage } from '../../types/types';

describe('Card Component', () => {
  const mockCat: CatImage = {
    id: '1',
    url: 'https://example.com/cat.jpg',
    width: 500,
    height: 500,
    breeds: [
      {
        id: 'beng',
        name: 'Bengal',
        description: 'Playful and energetic',
      },
    ],
  };

  it('renders cat image and info', () => {
    render(<Card cat={mockCat} />);
    expect(screen.getByAltText('Bengal')).toBeInTheDocument();
    expect(screen.getByText('Bengal')).toBeInTheDocument();
    expect(screen.getByText('Playful and energetic')).toBeInTheDocument();
  });

  it('shows default values when breed is missing', () => {
    const catWithoutBreed: CatImage = {
      id: '2',
      url: 'https://example.com/cat2.jpg',
      width: 500,
      height: 500,
      breeds: [], // Пустой массив breeds
    };
    render(<Card cat={catWithoutBreed} />);

    expect(screen.getByAltText('Unknown Breed')).toBeInTheDocument();
    expect(screen.getByText('Unknown Breed')).toBeInTheDocument();
    expect(screen.getByText('No description available')).toBeInTheDocument();
  });
});
