import React from 'react'

export const MapDemo5 = () => {
    var products = [
        {id:101,name:"iphone",price:1000,qty:100,status:true},
        {id:102,name:"ipad",price:800,qty:10,status:false},
        {id:103,name:"laptop",price:1200,qty:50,status:true},
    ]
  return (
    <div style={{textAlign:"center"}}>
       <h1> MapDemo5 </h1>

        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((prod)=>{
                        return<tr>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.qty}</td>
                            <td>{prod.status}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
       
    </div>

  )
}
