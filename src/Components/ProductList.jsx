import React from "react";
import { SubProductList } from "./SubProductList";


export const ProductList = (props) => {
  
  console.log("product list", props);
  
  return (
    <div>
      <h1>Product list</h1>
      <h3>Title : {props.title}</h3>
      <h3>Detail : {props.detail.name}</h3>
      <h3>Detail : {props.detail.city}</h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COLOR</th>
          </tr>
        </thead>
        <tbody>
          {props.productData.map((prod, index) => {
            return (
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubProductList title={props.title}></SubProductList>
    </div>
  );
};