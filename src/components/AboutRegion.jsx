import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

function AboutRegion() {

  const [region, setRegion] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${name}`)
      .then(({data}) => {
        setRegion(data)
      })
  }, [])

  console.log(region);

  return (
    <>
      <Link to="/">
        <button className='button btn-back'>Back</button>
      </Link>
      <div className="region__inner">
        {
          region.map(reg => {

            const {
              numericCode,
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders} = reg;

            return (
              <article className='region-desc-block' key={numericCode}>
                <img className="region__img" src={flag} alt={name}/>
                <div className="region__info-block">
                  <h1 className="region__info-block-title">{name}</h1>
                  <div className="region__info-block-inner">
                    <div>
                      <p className="region__info-block-text country__info-block-text">Native Name: <span>{nativeName}</span></p>
                      <p className="region__info-block-text country__info-block-text">Population: <span>{population}</span></p>
                      <p className="region__info-block-text country__info-block-text">Region: <span>{region}</span></p>
                      <p className="region__info-block-text country__info-block-text">Sub Region: <span>{subregion}</span></p>
                      <p className="region__info-block-text country__info-block-text">Capital: <span>{capital}</span></p>
                    </div>
                    <div>
                      <p className="region__info-block-text country__info-block-text">Top Level Domain: <span>{topLevelDomain}</span></p>
                      <p className="region__info-block-text country__info-block-text">Currencies: <span>{currencies[0].name}</span></p>
                      <p className="region__info-block-text country__info-block-text">Languages: <span>{languages[0].name}</span></p>
                    </div>
                  </div>
                  <div className="border-countries">
                    <p className="region__info-block-text country__info-block-text">Border Countries</p>
                    
                    {borders && 
                      borders.map(border => (
                        <ul className='border-list' key={border}>
                          <li>{border}</li>
                        </ul>
                      ))
                    }
                  </div>
                </div>
              
              </article>
            )
          })
        }

      </div>
    </>
  )
}

export default AboutRegion