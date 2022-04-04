import React, { useEffect, useState } from "react";
import axios from "axios";

import Country from "./components/Country";
import Filter from "./components/Filter";
import DarkMode from "./components/DarkMode";
import Search from "./components/Search";

import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (searchValue) => {
    setSearchValue(searchValue);
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(({data}) => {
        setCountries(data);
      });
  }, [])

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="header__inner">
            <h1>Where in the world?</h1>
            <DarkMode/>
          </div>
        </header>

        <main className="main">
          <div className="main__inner">
            <div className="main__top-block">
              <Search onChange={onChangeSearchInput} searchValue={searchValue} />
              <Filter countries={countries} />
              
            </div>

            <div className="main__countries-block">
              {countries
                .filter(item => item.name.toLowerCase().includes(searchValue))
                .map(country => (
                  <Country
                    key={country.name}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flag={country.flag}
                  />
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
