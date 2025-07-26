import { useState } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import type { AppState, CatImage } from '../../types/types';

export const App = () => {
  const [cats, setCats] = useState<AppState['cats']>([]);

  const handleCatsLoaded = (newCats: CatImage[]) => {
    setCats(newCats);
    console.log('Received cats:', cats);
  };

  return (
    <>
      <Header onCatsLoaded={handleCatsLoaded} />
      <Main cats={cats} />
    </>
  );
};
