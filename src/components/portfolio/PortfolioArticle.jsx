import React from 'react'

const PortfolioArticle = (props) => {
  return (
    <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={props.img} alt="" />
          </div>
          <h3>{props.title}</h3>
          <div className="portfolio__item-cta">

            <a href={props.github} target='_blank' rel="noreferrer" className='btn'>Github</a>

            <a href={props.demo} target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
  )
}

export default PortfolioArticle