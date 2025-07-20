import React, { Component } from 'react';
import { Card } from '../Card/Card';
import './cardList.css';
import type { CardListProps } from '../../types/types';

export class CardList extends Component<CardListProps> {
  render() {
    const { cats } = this.props;
    console.log(cats);
    // для тестирования error boundary раскомментируйте следующую строку
    // throw new Error('Тест: ErrorBoundary должен это поймать!');
    return (
      <div className="cardList">
        {cats.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
    );
  }
}
