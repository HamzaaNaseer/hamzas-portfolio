import React from 'react'
import './Experience.css'
import SkillsArticles from './SkillsArticles'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <SkillsArticles skill='HTML' experience='Experienced' />
            <SkillsArticles skill='CSS' experience='Experienced' />
            <SkillsArticles skill='REACT JS' experience='Experienced' />
            <SkillsArticles skill='BOOTSTRAPS' experience='Experienced' />
          </div>
        </div>
        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">
            <SkillsArticles skill='NODE JS' experience='Experienced' />
            <SkillsArticles skill='EXPRESS JS' experience='Experienced' />
            <SkillsArticles skill='MongoDb' experience='Experienced' />
            <SkillsArticles skill='PYTHON' experience='Experienced' />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience