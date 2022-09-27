import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import{ImYoutube2} from 'react-icons/im'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>

        <a href='#' className='footer_logo'>Animate 24</a>
        <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
         </ul>

            <div className="footer__socials">
                <a href='https://www.youtube.com/channel/UCliJtIzXXu2Lz31i4aAAsCA' target='_blank'><ImYoutube2/></a>
                <a href='https://www.instagram.com/animate24__'><FaFacebook/></a>
                <a href='https://web.facebook.com/theanimate24'><FiInstagram/></a>
                <a href='https://www.linkedin.com/company/animate24/'><BsLinkedin/></a>
                <a href='https://www.github.com/samuearthur'><AiFillGithub/></a>
              
            </div>

            <div className="footer__copyright" text-color='#ffff'>
             <h2> &copy; <a href='https://github.com/samuearthur/animate24-website-design'><AiFillGithub/></a> 2022</h2>
            </div>
    </footer>
  )
}

export default Footer