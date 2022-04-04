import React from 'react'

function Country({name, population, region, capital, flag}) {
  return (
    <div className="country">
      <div className="country__inner">
        <img className="country__img" src={flag} alt="flag image"/>
        <div className="country__info-block">
          <h3 className="country__info-block-title">{name}</h3>
          <p className="country__info-block-text">Population: <span>{population}</span></p>
          <p className="country__info-block-text">Region: <span>{region}</span></p>
          <p className="country__info-block-text">Capital: <span>{capital}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Country