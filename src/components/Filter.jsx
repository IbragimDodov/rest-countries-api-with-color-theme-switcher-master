import React, { useEffect, useRef, useState } from 'react'

function Filter({ regionsArr, regionFilter, setRegionFilter}) {

  const [visiblePopup, setVisiblePopup] = useState(false);

  const sortRef = useRef();
  
  const arrayOfRegion = [...new Set(regionsArr)];

  const onSelectItem = (value) => {
    setRegionFilter(value);
    setVisiblePopup(false);
  };

  const togglePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onPopupOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onPopupOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="main__filter">
      <div className="dropdown">
        <div onClick={togglePopup} className="dropdown__btn-block">
          <button className="dropdown__btn">Filter by Region: {regionFilter} </button>
          <img className="dropdown__img" src="img/dropdown.png" alt="dropdown icon" />
        </div>
        <div className="dropdown__links-wrapper">
          {visiblePopup && <ul className="dropdown__links-inner">
            {
              arrayOfRegion.map((region) => (
                <li
                  key={region}
                  onClick={() => onSelectItem(region)}
                  className={regionFilter === region ? 'dropdown__link dropdown__link--active' : 'dropdown__link'}
                  href="#">{region}</li>
              ))
            }
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default Filter