import { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import type { AppState, CatImage } from '../../types/types';

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cats: [],
    };
  }
  handleCatsLoaded = (cats: CatImage[]) => {
    this.setState({ cats });
    console.log('Received cats:', cats);
  };
  render() {
    return (
      <>
        <Header onCatsLoaded={this.handleCatsLoaded} />
        <Main cats={this.state.cats} />
      </>
    );
  }
}

export default App;
