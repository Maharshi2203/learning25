import React from 'react'
import { Link } from 'react-router-dom'

export const BookDetails = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>BookDetails</h1>
        <div>
            <ul>
                <li>
                    <Link to="/study/j">Java</Link>
                </li>
                <li>
                    <Link to="/study/10">C++</Link>
                </li>
                <li>
                    <Link to="/study/10py">Python</Link>
                </li>
            </ul>

        </div>


    </div>
  )
}
