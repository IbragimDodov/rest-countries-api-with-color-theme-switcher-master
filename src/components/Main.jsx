import React, { useState } from 'react'

import Country from "./Country";
import Filter from "./Filter";
import Search from "./Search";

function Main({countries}) {

  
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const onChangeSearchInput = (searchValue) => {
    setSearchValue(searchValue);
  }

  

  const regionsArr = countries.map(country => country.region);

  return (
    <main className="main">
      <div className="main__inner">
        <div className="main__top-block">
          <Search onChange={onChangeSearchInput} searchValue={searchValue} />
          <Filter regionsArr={regionsArr} regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
          
        </div>

        <div className="main__countries-block">

          {countries
            .filter(item => item.region.toLowerCase().includes(regionFilter.toLowerCase()))
            .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
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
  )
}

export default Main