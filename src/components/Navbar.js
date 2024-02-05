import React,{ useState }  from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" >
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
      
        </ul>

<div className="color1 " onClick={props.toggleMode3}> </div>
<div className="color2" onClick={props.toggleMode2}></div>
<div className="color3" onClick={props.toggleMode4}></div>
<div className="color4" onClick={props.toggleMode5}></div>
<div className="color5" onClick={props.toggleMode1}></div>
<div className= "color6 " onClick={props.toggleMode}></div>

      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string,
aboutText:PropTypes.string}