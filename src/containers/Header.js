import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  fontWeight: 'bold',
  color: 'red',
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/list/">
            List
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/done/">
            Done
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
