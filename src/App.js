import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <h1>Where in the world?</h1>
            <div className="dark-mode-block">
              <img className="dark-mode-block__img" src="img/sleep-mode.png" alt="dark-mode icon" />
              <p className="dark-mode-block__text">Dark Mode</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="main__inner">
            <div className="main__top-block">

              <div className="main__search">
                <input className="main__search-input" type="search" placeholder="search for a country..." />
                <img className="main__search-img" src="img/search.png" alt="search icon" />
              </div>

              <div className="main__filter">
                <div className="dropdown">
                  <div className="dropdown__btn-block">
                    <button className="dropdown__btn">Filter by Region</button>
                    <img className="dropdown__img" src="img/dropdown.png" alt="dropdown icon" />
                  </div>
                  <div className="dropdown__links-wrapper">
                    <a className="dropdown__link" href="#">Africa</a>
                    <a className="dropdown__link" href="#">America</a>
                    <a className="dropdown__link" href="#">Asia</a>
                    <a className="dropdown__link" href="#">Evrope</a>
                    <a className="dropdown__link" href="#">Oceania</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
