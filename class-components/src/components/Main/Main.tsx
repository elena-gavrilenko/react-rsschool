import React, { Component } from 'react';
import { CardList } from '../CardList/CardList';
import type { MainProps } from '../../types/types';
import './main.css';

export class Main extends Component<MainProps> {
  render() {
    console.log(this.props.cats);
    return (
      <>
        <main className="main">
          <CardList cats={this.props.cats} />
        </main>
      </>
    );
  }
}
