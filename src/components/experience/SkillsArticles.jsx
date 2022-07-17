import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'


const SkillsArticles = (props) => {
    return (
        <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
                <h4>{props.skill}</h4>
                <small className="text-light">{props.experience}</small>
            </div>
        </article>
    )
}

export default SkillsArticles