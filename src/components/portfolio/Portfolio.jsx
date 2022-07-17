import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import PortfolioArticle from './PortfolioArticle'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioArticle img={IMG1} title='CryptoGeek' github='https://github.com/HamzaaNaseer/crypto-app' demo='https://hamzacod3edcryptoapp.netlify.app/' />
        <PortfolioArticle img={IMG2} title='my title' github='https://github.com/hamzaaNaseer' demo='https://github.com/hamzaaNaseer' />
        <PortfolioArticle img={IMG3} title='my title' github='https://github.com/hamzaaNaseer' demo='https://github.com/hamzaaNaseer' />
        <PortfolioArticle img={IMG4} title='my title' github='https://github.com/hamzaaNaseer' demo='https://github.com/hamzaaNaseer' />
        <PortfolioArticle img={IMG5} title='my title' github='https://github.com/hamzaaNaseer' demo='https://github.com/hamzaaNaseer' />
        <PortfolioArticle img={IMG6} title='my title' github='https://github.com/hamzaaNaseer' demo='https://github.com/hamzaaNaseer' />



      </div>
    </section>
  )
}

export default Portfolio