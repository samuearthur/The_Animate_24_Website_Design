import React from 'react'
import{ImYoutube2} from 'react-icons/im'
import{GrInstagram} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.youtube.com/channel/UCliJtIzXXu2Lz31i4aAAsCA' target='_blank'><ImYoutube2/></a>
    <a href='https://www.instagram.com/animate24__' target='_blank'><GrInstagram/></a>
    <a href='https://web.facebook.com/theanimate24' target='_blank'><BsFacebook /></a>
    <a href='https://www.linkedin.com/company/animate24/' target='_blank'><BsLinkedin /></a>

    </div>
  )
}

export default HeaderSocials