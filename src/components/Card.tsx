import React from 'react'
import { Link } from 'react-router-dom'
import { TbNumbers } from 'react-icons/tb'

import './Card.css'

type Props = {
  title: String,
  pathLink: String,
  description: String,
  example1: String,
  example2: String,
  example3: String,
  example4: String,
}

const Card = ({ title, pathLink, description, example1, example2, example3, example4 }: Props) => {
  return (
    <div className='card-item'>
      <Link to={`${pathLink}`}>

        <div className='icon'><TbNumbers /></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>{example1}</li>
          <li>{example2}</li>
          <li>{example3}</li>
          <li>{example4}</li>
        </ul>
      </Link>
    </div>
  )
}

export default Card