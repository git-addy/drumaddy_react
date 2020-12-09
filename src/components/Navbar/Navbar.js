import React, { Component } from 'react'
import MenuItems from './MenuItems'
import './Navbar.css'
import searchicon_cc24 from '../../assets/searchicon_cc24.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  showHamburger = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logoContainer">
            <a href="#"><img src={logo} alt="logo of the brand"></img></a>
          </div>
          <div className="menu-icon" onClick={this.showHamburger}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {
              MenuItems.map((item, index) => {
                return (
                  <Link to={item.url}>
                    <li key={index}>
                      <a className={item.cName} href={item.url}>{item.label}</a>
                    </li>
                  </Link>
                )
              }
              )
            }
          </ul>

          <div className="search">
            <label htmlFor="search"></label>
            <input type="text" name="search" id="searchField" />
            <button><img src={searchicon_cc24} height="14px" width="14px" alt="searchIcon" /></button>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
