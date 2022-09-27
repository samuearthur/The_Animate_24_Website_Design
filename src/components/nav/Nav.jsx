import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {TbBrandSvelte} from 'react-icons/tb'
import{FiPackage} from 'react-icons/fi'
import {IoMdContacts} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ?   'active': '' } ><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ?   'active': '' }><AiOutlineUser/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ?   'active': '' }><AiOutlineProject/></a>
      <a href='#services'onClick={() => setActiveNav('#services')} className={activeNav === '#services' ?   'active': '' }><FiPackage/></a>
      <a href='#testimonials'onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ?   'active': '' }><TbBrandSvelte/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ?   'active': '' }><IoMdContacts/></a>
    </nav>
  )
}

export default Nav