import React, { useEffect, useRef, useState } from 'react'

function Filter({countries}) {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };


  const someArr = countries.map(country => country.region);
  const arrayOfRegion = [...new Set(someArr)];
  const activeLabel = arrayOfRegion[activeItem];

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
          <button className="dropdown__btn">Filter by Region: {activeLabel} </button>
          <img className="dropdown__img" src="img/dropdown.png" alt="dropdown icon" />
        </div>
        <div className="dropdown__links-wrapper">
          {visiblePopup && <ul className="dropdown__links-inner">
            {
              arrayOfRegion.map((region, index) => (
                <li
                  key={region}
                  onClick={() => onSelectItem(index)}
                  className={activeItem === index ? 'dropdown__link dropdown__link--active' : 'dropdown__link'}
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