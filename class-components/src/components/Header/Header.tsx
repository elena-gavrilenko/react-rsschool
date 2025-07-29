import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import './header.css';
import type { HeaderProps } from '../../types/types';
import { Link } from 'react-router-dom';
import { useSearchStorage } from '../../hooks/useSearchStorage';

export const Header = ({ onSearchQueryChange, isLoading }: HeaderProps) => {
  const { searchQuery, setSearchQuery } = useSearchStorage('catSearchQuery');

  const handleSearch = () => {
    onSearchQueryChange(searchQuery);
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
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Search'}
        </Button>
      </div>
    </header>
  );
};
