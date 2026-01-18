import React from 'react'
import { Link } from 'react-router-dom'

export const HostarShows = () => {
  return (
    <div style={{textAlign:'center'}}>
          
          <h1>HostarShows</h1>
        <div>
            <ul>
          <li>
            <Link to="/watch">Stranger Things</Link>
          </li>
          <li>
            <Link to="/watch">From</Link>
          </li>
          <li>
            <Link to="/watch">Dooms Day</Link>
          </li>

          <li>
            <Link to="/watch/st">Stranger Things</Link>
          </li>
          <li>
            <Link to="/watch/1009">From</Link>
          </li>
          <li>
            <Link to="/watch/doom12">Dooms Day</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
