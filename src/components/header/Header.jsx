import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/MASCOT-GUY.gif'
import two from '../../assets/got-an-idea.gif'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello </h5>
        <h3>Welcome to </h3>
        <h1>Animate 24</h1>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='me' style={{ "height": "300px","objectFit": "contain", "padding": "10px" }} />
          <img src={two} alt='two' style={{ "height": "300px","objectFit": "contain", "padding": "10px" }} />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}


export default header