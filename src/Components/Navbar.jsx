import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-blue bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"><h3 style={{color:"purple"}}>Hotstar</h3></li>
            <li class="nav-item active">
              <Link class="nav-link" to="/hotstarhomes">
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
            </li>
            <li class="nav-item active">
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
            
            
            
            
          </ul>
        </div>
      </nav>
    </div>
  )
}
