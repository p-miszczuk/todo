import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to="/list/"
          >
            List
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
            to="/done/"
          >
            Done
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
