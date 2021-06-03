import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {

  const SessionLinks = () => {
    // debugger
    if (props.currentUser !== null) {
      return (
        <React.Fragment >
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment >
          <li className="nav-link">
            <Link to="/signup" >Sign Up</Link>
          </li>
          <li className="nav-link">
            <Link to="login" >Log In</Link>
          </li>
        </React.Fragment>
      )
    }
  }

  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#about">About</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact</a>
        </li>

        {/* <SessionLinks /> */}
      </ul>
    </nav>
  )
}

export default NavBar