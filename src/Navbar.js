import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1>NASA Mars Rovers</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/CurRov'>Curiosity</a>
        <a href='/SprRov'>Spirit</a>
        <a href='/OppRov'>Opportunity</a>
      </div>
    </nav>
  )
}
