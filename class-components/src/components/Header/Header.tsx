import React, { Component } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import './header.css';
import type { HeaderState } from '../../types/types';

export class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
    };
  }
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
            <Input className="header__input"></Input>
            <Button className="header__button">Search</Button>
          </div>
        </header>
      </>
    );
  }
}
