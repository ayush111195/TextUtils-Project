import React from 'react'
import PropTypes from 'prop-types' // prop type ko import karne e leye hum impt ka use karte h 

export default function Navbar(props) {                   // react fution based components chahiye tha is liye rfc likh kr enter dwa diya 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a> {/*TITIL KI VALUE PROPES SE DENE KE LEYE */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a> {/*TITIL KI VALUE PROPES SE DENE KE LEYE */}
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==="light" ?"dark":"light"}`}>
  <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">DarkMode</label>
</div>

      </div>
    </div>
  </nav>
  
  )
}
Navbar.propTypes={title: PropTypes.string.isRequired,         //  {/*props ki value ka type set karne ke leye  */}
                    aboutText:PropTypes.string.isRequired}


Navbar.defaultProps={                                         // {/* props ki default  value set karne ke leye  */}
    title:'set title here',
    aboutText:'About text here'
}                    