import React from 'react'
import { Link } from 'react-router-dom';

export const HostarMovies = () => {
     var movies = [
    { id: 101, name: "Stanger Things" },
    { id: 102, name: "From" },
    { id: 103, name: "DoomsDay" },
  ];
  return (
    <div style={{textAlign:'center'}}>
        <h1>Movies List</h1>
        {
        movies.map((movie)=>{
          return <li>
            {/* <Link to={`/watch/${movie.id}`}>{movie.name}</Link> */}
            <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
          </li>
        })
      }
    </div>
  )
}
