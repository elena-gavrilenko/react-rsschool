import React, { Component } from 'react';
import { CardList } from '../CardList/CardList';
import type { MainProps } from '../../types/types';

export class Main extends Component<MainProps> {
  render() {
    console.log(this.props.cats);
    return (
      <>
        <main>
          <CardList cats={this.props.cats} />
        </main>
      </>
    );
  }
}
