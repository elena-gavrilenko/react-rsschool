import React, { Component } from 'react';
import type { CardProps } from '../../types/types';
import './card.css';

export class Card extends Component<CardProps> {
  render() {
    const { cat } = this.props;
    const breed = cat.breeds?.[0];
    const name = breed?.name || 'Unknown Breed';
    const description = breed?.description || 'No description available';
    return (
      <>
        <div className="card">
          <div className="card__image">
            <img src={cat.url} alt={name || 'Cat'} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{name || 'Unknown Breed'}</h3>
            <p className="card__description">
              {description || 'No description available'}
            </p>
          </div>
        </div>
      </>
    );
  }
}
