import React from 'react'
import DarkMode from './DarkMode'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1>Where in the world?</h1>
        <DarkMode/>
      </div>
    </header>
  )
}

export default Header