import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Navbar.css'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav  id='nav-bar'>
      <NavLink to="/numbers">Numeros</NavLink>
      <NavLink to="/temperature">Temperatura</NavLink>
      <NavLink to="/time">Tempo</NavLink>
      <NavLink to="/length">Comprimento</NavLink>
      <NavLink to="/velocity">Velocidade</NavLink>
      <NavLink to="/energy">Energia</NavLink>
    </nav>
  )
}

export default Navbar