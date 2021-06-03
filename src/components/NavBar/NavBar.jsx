import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from '../../utils/helpers';

const inFrontOfDark = () => {
  const ele = document.elementFromPoint(0,75)
  
  if (ele.dataset.dark === undefined) {
    return false
  } else {
    return ele.dataset.dark === "true"
  }
}

const NavBar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [lightNav, setLightNav] = useState(inFrontOfDark())
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    return () => setLightNav(inFrontOfDark())
  }, [props])
  
  useEffect(() => {
    let isScrolling;

    const handleScroll = debounce(() => {
      window.clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        adjustState();
      }, 100);
    }, 250)

    const adjustState = () => {
      const curScrollPos = window.pageYOffset
  
      setVisible(  // scrolling UP or at top
        (prevScrollPos > curScrollPos) ||
        curScrollPos < 10
      )

      setTimeout(() => {
        setLightNav(inFrontOfDark())
      }, 1000);
      setPrevScrollPos(curScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])

  const navBarStyles = {
    position: 'fixed',
    left: '0px',
    height: '75px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '3',
    transition: 'top 0.3s, background-color 0.3s, box-shadow 0.3s',
    top: visible ? '0px' : '-100px',
    backgroundColor: lightNav ? '#000C40' : 'transparent',
    borderBottom: lightNav ? '1px solid #ffffff' : 'none',
    boxShadow: lightNav ? '0px 1px 10px #000000' : 'none'
  }

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
    <div className="nav-container" style={{...navBarStyles}}>
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
    </div>
  )
}

export default NavBar