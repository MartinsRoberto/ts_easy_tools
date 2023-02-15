import React from 'react'
import { Link } from 'react-router-dom'

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
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{example1}</p>
        <p>{example2}</p>
        <p>{example3}</p>
        <p>{example4}</p>
      </Link>
    </div>
  )
}

export default Card