import { useState } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import './header.css';
import type { CatImage, HeaderProps } from '../../types/types';
import { API_KEY, CATS_URL } from '../constants/constants';
import { Link } from 'react-router-dom';
import { useSearchStorage } from '../../hooks/useSearchStorage';

export const Header = ({ onCatsLoaded }: HeaderProps) => {
  const [loading, setLoading] = useState(false);
  const apiKey = API_KEY;
  const { searchQuery, setSearchQuery } = useSearchStorage('searchQuery');

  const fetchCats = () => {
    setLoading(true);
    const limit = searchQuery.trim() ? 1 : 10;
    let apiUrl = `${CATS_URL}limit=${limit}&has_breeds=1`;

    if (searchQuery.trim()) {
      apiUrl += `&breed_ids=${searchQuery.trim()}`;
    }

    fetch(apiUrl, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data: CatImage[]) => {
        onCatsLoaded?.(data);
      })
      .catch((error) => {
        console.error('Error fetching cats:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <header className="header">
      <div className="header__titleGroup">
        <div className="header__logo">
          <img src="/images/simons_cat.gif" alt="" />
        </div>
        <h1 className="header__title">Cats</h1>
        <Link className="header__aboutLink" to="/about">
          About
        </Link>
      </div>
      <div className="header__searchGroup">
        <Input
          className="header__input"
          search
          placeholder="Enter breed ID (e.g. beng)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={setSearchQuery}
        />
        <Button
          className="header__button"
          onClick={fetchCats}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Search'}
        </Button>
      </div>
    </header>
  );
};
