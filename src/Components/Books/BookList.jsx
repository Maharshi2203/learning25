import React, { useContext } from 'react'
import { BookContext } from './BookContext'


export const BookList = () => {
  const {bookData} = useContext(BookContext)
  console.log("book data...",bookData)
  return (
    <div style={{width:"100%",border:"1px solid black",margin:"5px",height:"auto"}}>
        <h1>BOOK LIST</h1>
        {/* provider no required */}
      
    </div>
  )
}