import { NavLink } from 'react-router-dom'

import './Navbar.css'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav  id='nav-bar'>
      <NavLink to="/ts_easy_tools/numbers">Numeros</NavLink>
      <NavLink to="/ts_easy_tools/temperature">Temperatura</NavLink>
      <NavLink to="/ts_easy_tools/time">Tempo</NavLink>
      <NavLink to="/ts_easy_tools/length">Comprimento</NavLink>
      <NavLink to="/ts_easy_tools/velocity">Velocidade</NavLink>
      <NavLink to="/ts_easy_tools/energy">Energia</NavLink>
    </nav>
  )
}

export default Navbar