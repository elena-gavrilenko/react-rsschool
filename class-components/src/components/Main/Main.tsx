import React, { Component } from 'react';
import { CardList } from '../CardList/CardList';
import type { MainProps } from '../../types/types';
import './main.css';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';

export class Main extends Component<MainProps> {
  render() {
    console.log(this.props.cats);
    return (
      <>
        <ErrorBoundary>
          <main className="main">
            <CardList cats={this.props.cats} />
          </main>
        </ErrorBoundary>
      </>
    );
  }
}
