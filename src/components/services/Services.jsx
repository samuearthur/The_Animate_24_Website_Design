import React from 'react'
import './services.css'
import GIF from '../../assets/storyboard.gif'
import GIF1 from '../../assets/2d.gif'
import GIF2 from '../../assets/motiongraphic.gif'
const Services = () => {
  return (
   <section id='services'>
    <h5>What We Offer</h5>
    <h2>Services</h2>

    <div className="container service__container">
      <article className='service'>
      <div className="service__head">
        <h3>2D ANIMATION</h3>
      </div>
      <ul className='service__list'>

      <img src={GIF1} alt="2D" />
      </ul>
        <div className="service__list-cta">
        <a href='https://bit.ly/3QZWgfC' className='btn btn-primary'>Get a Quote</a> </div>
      </article>
      {/*===End of one package==*/}
      <article className='service'>
      <div className="service__head">
        <h3>MOTION-GRAPHICS</h3>
      </div>
      <ul className='service__list'>
      <img src={GIF2} alt="Motion-Graphic" />
        </ul>
        <div className="service__list-cta">
        <a href='https://bit.ly/3QZWgfC' className='btn btn-primary'>Get a Quote</a> </div>
      </article>
       {/*===End of one package==*/}
       <article className='service'>
      <div className="service__head">
        <h3>STORYBOARD </h3>
      </div>
      <ul className='service__list'>
        {/* put the gif in the src */}
        <img src={GIF} alt="gif_here" />
        {/* <li><BiCheck className='service__list-icons'/>
        <p>3D</p>
        </li>
        <li><BiCheck className='service__list-icons'/>
        <p>3D</p>
        </li>
        <li><BiCheck className='service__list-icons'/>
        <p>3D</p>
        </li>
        <li><BiCheck className='service__list-icons'/>
        <p>3D</p>
        </li>
        <li><BiCheck className='service__list-icons'/>
        <p>3D</p>
        </li> */}
        </ul>
        <div className="service__list-cta">
        <a href='https://bit.ly/3QZWgfC' className='btn btn-primary'>Get a Quote</a> </div>
      </article>
    </div>





   </section>
    )
}

export default Services