import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Animate 24</h2>
      <div className='container about__container'>
        <div className="about__me"> 
        <div className="about__me-image">
          <img src={ME} alt='Me'/>
        </div>

        </div>

        <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2D Animation  Story Board  Motion Graphic ADs</small>
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>50+Worldwide</small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>90+Completed</small>
        </article>
         </div>
         <p>We are an online animation studio. Our services are available 24 hours
        regardless of where you might be in the world. We are swift and give you quality animation for your various media needs.
        We are very affordable with flexible payment plans for your needs.</p>

        <a href='https://bit.ly/3QZWgfC' className='btn btn-primary'>Get a Quote</a>
        </div>
      </div>

    </section>
  )
}

export default About