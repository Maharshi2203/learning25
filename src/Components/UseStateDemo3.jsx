import React, { useState } from "react";

export const UseStateDemo3 = () => {
  const [products, setproducts] = useState([
    { id: 1, name: "iphone", price: 1200, color: "blue" },
    { id: 2, name: "laptop", price: 1400, color: "black" },
    { id: 3, name: "charger", price: 100, color: "white" },
  ]);

    //     const afterDeleteProduct = products.filter((prod)=>{
//         return prod.id != id
//     })
//     console.log("after delete products = ",afterDeleteProduct)
//     setproducts(afterDeleteProduct)
//   }

const deleteProduct = (id)=>{
    setproducts(products.filter((prod)=>prod.id!= id))
}

  return (
    <div style={{ textAlign: "center" }}>
      <h1>USE STATE DEMO 3</h1>
      {
        products.length == 0 && <h1>NO PRODUCTS FOUND.</h1>
      }
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COLOR</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => {
            return (
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.color}</td>
                <td>
                    <button onClick={()=>{deleteProduct(prod.id)}} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};