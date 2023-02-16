import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

type Props = {
  title: String,
  pathLink: String,
  description: String,
  examples: Array<string>,
  icon: any,
}

const Card = ({ title, pathLink, description, examples, icon}: Props) => {
  return (
    <div className='card-item'>
      <Link to={`${pathLink}`}>
        <div className='icon'>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {examples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Link>
    </div>
  )
}

export default Card