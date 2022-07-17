import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { BsPerson } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'



import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav==='#'?'active':''} onClick={()=>{setActiveNav('#')}}><GoHome /></a>
      <a href="#about" className={activeNav==='#about'?'active':''}  onClick={()=>{setActiveNav('#about')}}><BsPerson /></a>
      <a href="#experience" className={activeNav==='#experience'?'active':''}  onClick={()=>{setActiveNav('#experience')}}><MdWorkOutline /></a>
      <a href="#contact" className={activeNav==='#contact'?'active':''}  onClick={()=>{setActiveNav('#contact')}}><AiOutlineMessage /></a>

    </nav>
  )
}

export default Nav