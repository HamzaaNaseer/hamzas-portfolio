import React from 'react'
import './Footer.css'

import {FaFacebookSquare} from 'react-icons/fa'
import {BsReddit} from 'react-icons/bs'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">HAMZACOD3$</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100010208912713"><FaFacebookSquare/></a>
        <a href="https://www.reddit.com/u/username_hamza?utm_medium=android_app&utm_source=share"><BsReddit/></a>
        <a href="https://twitter.com/HamzaNa54162567?t=rqtRhmSEqyfiaoewNFdEzg&s=09"><SiTwitter/></a>

      </div>

      <div className="footer__copyright">
        <small> &copy; HAMZA COD3$. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer