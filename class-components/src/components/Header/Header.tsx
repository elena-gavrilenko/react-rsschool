import React, { Component } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import './header.css';
import type { CatImage, HeaderProps, HeaderState } from '../../types/types';
import { API_KEY, CATS_URL } from '../constants/constants';

export class Header extends Component<HeaderProps, HeaderState> {
  private apiKey = API_KEY;
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  fetchCats = () => {
    this.setState({ loading: true });
    const searchQuery = localStorage.getItem('searchQuery') || '';
    const limit = searchQuery.trim() ? 1 : 10;
    let apiUrl = `${CATS_URL}limit=${limit}&has_breeds=1`;

    if (searchQuery.trim()) {
      apiUrl += `&breed_ids=${searchQuery.trim()}`;
    }
    fetch(apiUrl, {
      headers: {
        'x-api-key': this.apiKey,
      },
    })
      .then((response) => response.json())
      .then((data: CatImage[]) => {
        console.log(data);
        if (this.props.onCatsLoaded) {
          this.props.onCatsLoaded(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching cats:', error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header__titleGroup">
            <div className="header__logo">
              <img src="/images/simons_cat.gif" alt="" />
            </div>
            <h1 className="header__title">Cats</h1>
          </div>
          <div className="header__searchGroup">
            <Input
              className="header__input"
              search
              placeholder="Enter breed ID (e.g. beng)"
            ></Input>
            <Button
              className="header__button"
              onClick={this.fetchCats}
              disabled={this.state.loading}
            >
              {this.state.loading ? 'Loading...' : 'Search'}
            </Button>
          </div>
        </header>
      </>
    );
  }
}
