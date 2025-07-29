import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { BrowserRouter } from 'react-router-dom';

describe('About Component', () => {
  const renderAbout = () => {
    return render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  };

  it('has proper CSS classes applied', () => {
    renderAbout();

    const aboutContainer = screen.getByText('About me').closest('.about');
    expect(aboutContainer).toBeInTheDocument();

    expect(screen.getByText('About me')).toHaveClass('about__title');

    const educationSection = screen
      .getByText('Education')
      .closest('.about__me');
    expect(educationSection).toBeInTheDocument();

    const rssContainer = screen
      .getByAltText('logo schools')
      .closest('.about__rss');
    expect(rssContainer).toBeInTheDocument();
  });
});
