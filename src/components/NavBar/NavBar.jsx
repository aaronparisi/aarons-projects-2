import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from '../../utils/helpers';

// import styleVars from '../../stylesheets/_vars.scss'
// todo figure out how to import scss vars

const shouldShow = () => {
  const navCoverEle = document.elementFromPoint(0,101)
  if (navCoverEle.dataset.nav === "show") {
    return true
  } else {
    return false
  }
}

const NavBar = props => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [curScrollPos, setCurScrollPos] = useState(window.pageYOffset)
  const [barVisible, setBarVisible] = useState(shouldShow());
  const [borderVisible, setBorderVisible] = useState(shouldShow())

  const borderTransTime = 250
  const barTransTime = 350
  
  useEffect(() => {
    let isScrolling;

    const handleScroll = debounce(() => {
      window.clearTimeout(isScrolling)

      isScrolling = setTimeout(() => {
        adjustState();
      }, 100);
    }, 250)

    const adjustState = () => {
      setCurScrollPos(window.pageYOffset)

      // setBarVisible(shouldShow())
      if (shouldShow()) {
        // showing bar, border goes AFTER bar
        setBarVisible(true)
        
        setTimeout(() => {
          setBorderVisible(true)
        }, barTransTime * .9);
      } else {
        // retracting bar, border goes BEFORE bar
        setBorderVisible(false)

        setTimeout(() => {
          setBarVisible(false)
        }, borderTransTime / 2);
      }

      setPrevScrollPos(curScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const barVisibleTransStyle = `top ${barTransTime / 1000}s ease-in, background-color ${barTransTime / 1000}s ease-in`
  const barNotVisibleTransStyle = `top ${barTransTime / 1000}s ease-out, background-color ${barTransTime / 1000}s ease-out`

  const navBarStyles = {
    transition: barVisible ? barVisibleTransStyle : barNotVisibleTransStyle,
    top: barVisible ? '0px' : '-100px'
  }

  const navBorderStyles = {
    width: borderVisible ? '100%' : '0%',
    transition: `width ${borderTransTime / 1000}s ease-out`
  }

  const SessionLinks = () => {
    
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
        <div className="border-blocker"></div>
        <div className="nav-links">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <div className="border-blocker"></div>
      </nav>
      <div className="nav-border" style={{...navBorderStyles}}></div>
    </div>
  )
}

export default NavBar