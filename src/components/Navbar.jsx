import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  
    <div className="container">
      
      <Link className="navbar-brand me-2" to='/'>
        <h2 className='mt-1'><i className="fa-solid fa-handshake"></i></h2>
      </Link>
  
      
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
         data-bs-auto-close="outside"
      >
        <i className="fas fa-bars"></i>
      </button>
  
     
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
       
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-5"><NavLink className="nav-link" to='/caseview'>Alla ärenden</NavLink></li>
          <li className="nav-item ms-5"><NavLink className="nav-link" to="/create">Skapa nytt ärende</NavLink></li>
        </ul>
        
  
        <div className="loggain-knapp">
          <button type="button" className="btn btn-link px-3 me-2">
            <NavLink className="nav-link text-black" to="/register">REGISTRERA NY ANVÄNDARE</NavLink>
          </button>
        </div>
      </div>
    
    </div>
   
  </nav>
  )
}

export default Navbar