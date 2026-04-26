import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo2 = () => {

    const [Products, setProducts] = useState([])  

    const getProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            console.log(res.data.products)
            setProducts(res.data.products)
        } catch (error) {
            console.log("Error fetching products:", error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>API DEMO 2</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>DISCOUNT</th>
                        <th>RATING</th>
                        <th>STOCK</th>
                        <th>THUMBNAIL</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Products.map((prod) => (
                            <tr key={prod.id}>  
                                <td>{prod.id}</td>
                                <td>{prod.title}</td>
                                <td>{prod.category}</td>
                                <td>{prod.price}</td>
                                <td>{prod.discountPercentage}</td>
                                <td>{prod.rating}</td>
                                <td>{prod.stock}</td>
                                <td>
                                    <img
                                        src={prod.thumbnail}
                                        alt={prod.title}
                                        style={{ height: "50px", width: "50px" }}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}