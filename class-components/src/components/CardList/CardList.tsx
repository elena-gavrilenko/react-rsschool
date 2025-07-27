import { Card } from '../Card/Card';
import './cardList.css';
import type { CardListProps } from '../../types/types';

export const CardList = (props: CardListProps) => {
  const { cats } = props;
  return (
    <div className="cardList">
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};
