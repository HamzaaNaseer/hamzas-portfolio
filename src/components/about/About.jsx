import React from 'react'
import './About.css'
import ME from '../../assets/ok.jpg'
import {  FaAward} from "react-icons/fa";
import {FaUsers} from 'react-icons/fa'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>
                        <article className="about__card">
                            <FaUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>worked with many clients</small>
                        </article>
                        <article className="about__card">
                            <HiOutlineFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ completed projects</small>
                        </article>
                    </div>
                    <p>I'm Hamza Naseer a full stack dev && final year student @ comsats.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About