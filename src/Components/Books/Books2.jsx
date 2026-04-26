import React, { useState } from 'react'
import { BookList } from './BookList'
import { BookContext } from './BookContext'

export const Books2 = () => {

  const [bookCount, setbookCount] = useState(100)
  const [bookData, setbookData] = useState([
    {id:101,name:"java",price:1200,qty:10},
    {id:102,name:"python",price:1300,qty:100},
    {id:103,name:"c",price:200,qty:5},
    {id:104,name:"cpp",price:1000,qty:200},
    
  ])


  return (
    <div style={{textAlign:"center"}}>
        <h1>BOOKS</h1>
        <BookContext.Provider value={{bookData,bookCount}}>
          <BookList></BookList>
        </BookContext.Provider>
    </div>
  )
}