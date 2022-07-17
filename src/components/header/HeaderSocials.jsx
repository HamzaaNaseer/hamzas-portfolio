import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="github.com/hamzaaNaseer/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.linkedin.com/in/hamza-naseer-8a0277220/" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/hamzacod3s/" target="_blank"><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocials