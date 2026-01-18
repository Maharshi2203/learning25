import React from 'react'
import { Link } from 'react-router-dom';

export const Books = () => {
    var Books = [
    { id: 101, name: "Java", price:100 },
    { id: 102, name: "C++",price:200 },
    { id: 103, name: "Python",price:300 },
  ];
  return (
    <div style={{textAlign:'center'}}>
        <h1>Books</h1>
        {
        Books.map((book)=>{
          return <li>
            <Link to={`/study/${book.price}`}>{book.name}</Link>
          </li>
        })
      }
    </div>
  )
}
