import React from 'react'
import skali from '/src/assets/skali.png'
const Header = () => {
  return (
   <>
    <div className='header'>
        <img src={skali} alt="smile-img" />
        <h1>Meme Generator</h1>
    </div>
   </>
  )
}

export default Header