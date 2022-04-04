import React from 'react'

function Search({ onChange, searchValue }) {

  const onChangeSearchInput = (event) => {
    onChange(event.target.value);
  }

  return (
    <div className="main__search">
      <input onChange={onChangeSearchInput} value={searchValue} className="main__search-input" type="search" placeholder="search for a country..." />
      <img className="main__search-img" src="img/search.png" alt="search icon" />
    </div>
  )
}

export default Search