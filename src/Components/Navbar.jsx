import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'

export const Navbar = () => {
    const {theme,settheme} = useContext(ThemeContext)
  console.log("theme",theme)
  const themeHandler = ()=>{
    
    if(theme=="light"){
      settheme("dark")
    }
    else{
      settheme("light")
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><h3 style={{color:"purple"}}>Hotstar</h3></li>

            {/* <li class="nav-item active"> */}
            
              {/* <Link class="nav-link" to="/hotstarhomes">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/hotstarshows">
                Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/hotstarmovies">
                Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo">
                UseStateDemo
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo2">
                UseStateDemo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/books">
                Books
              </Link>
            </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo3">
                UseStateDemo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dropdown">
                dropdown
              </Link>
            </li> */}
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/formdemo">
                formdemo1
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo5">
                formdemo5
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/eventform">
                EventForm
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo6">
                formdemo6
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/orderform">
                orderform
              </Link>
            </li> */}
             

            <li className="nav-item active">
              <Link className="nav-link" to="/apidemo1">
                ApiDemo1
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/omdbapi">
                OmdbApi
              </Link>
            </li>
             <li className="nav-item active">
              <Link className="nav-link" to="/apidemo2">
                ApiDemo2
              </Link>
            </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/apidemo3">
                ApiDemo3
              </Link>
            </li>
            
           {/* <li className="nav-item active">
              <Link className="nav-link" to="/apidemo4">
                ApiDemo4
              </Link>
            </li> */}
            <li className="nav-item active">
              <Link className="nav-link" to="/memory">
                Memory
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/reduxapidemo">
                ReduxApiDemo
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>

             <li class="nav-item active">
              <button onClick={()=>{themeHandler()}}>{theme =="light"?"DARK":"LIGHT"}</button>
            </li>
        
          </ul>
        </div>
      </nav>
      <div style={{marginTop:"10px"}}>
        
        <Outlet></Outlet>
      </div>
    </div>
  )
}
