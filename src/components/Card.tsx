import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

type Props = {
  title: string,
  pathLink: string,
  description: string,
  examples: Array<string>,
  icon: string | React.ReactNode,
}

const Card = ({ title, pathLink, description, examples, icon }: Props) => {
  return (
    <div className='card-item'>
      <Link to={`${pathLink}`} aria-label={title}>
        <div className='icon'><div className="icon-box">{icon}</div></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{examples.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </Link>
    </div>
  )
}

export default Card