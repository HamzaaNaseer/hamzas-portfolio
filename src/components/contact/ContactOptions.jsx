import React from 'react'

const ContactOptions = (props) => {
  return (
    <article className="contact__option">
            {props.icon}
            <h4>{props.title}</h4>
            <h5>{props.contactAddress}</h5>
            <a href={props.hRef} target='_blank' rel="noreferrer">Send a message</a>
          </article>
  )
}

export default ContactOptions