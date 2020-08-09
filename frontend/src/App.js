import React from 'react';
import './App.scss';
import { Header } from './components/Header';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="first-content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem et quasi architecto beatae vitae dicta sunt explicabo.</h2>
      </section>
    </React.Fragment>
  );
}

export default App;
