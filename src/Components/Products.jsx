import React, { useState } from 'react'
import { ProductList } from './ProductList'


export const Products = () => {
    
    var title = "Games"
  
    var Companydetail = {
        name:"COD",
        mode:"Online"
    }
 
    const [productData ,setproductData] = useState([
        { id: 1, name: "iphone", price: 1200, color: "blue" },
        { id: 2, name: "laptop", price: 1400, color: "black" },
        { id: 3, name: "cahrger", price: 100, color: "white" },
      ]);

  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCTS</h1>
        <ProductList title = {title} detail = {Companydetail} productData = {productData}></ProductList>
    </div>
  )
}