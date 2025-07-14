import React, { Component } from 'react';
import { Card } from '../Card/Card';
import './cardList.css';
import type { CardListProps } from '../../types/types';

export class CardList extends Component<CardListProps> {
  render() {
    const { cats } = this.props;

    return (
      <div className="card-list">
        {cats.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
    );
  }
}
