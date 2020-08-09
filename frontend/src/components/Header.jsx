import React from 'react';
import '../App.scss';

export const Header = () => {
  return(
    <nav>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="rocketpower-logo.png" />
          </a>
        </div>
        <div className="menu">
          <button>
            Write us!
          </button>
        </div>
      </div>
    </nav>
  );
}