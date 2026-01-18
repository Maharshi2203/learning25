import React from "react";

export const MapDemo6 = () => {
  const products = [
    {
      _id: "p1001",
      name: "Wireless Bluetooth Headphones",
      brand: "SoundMax",
      category: "Electronics",
      subCategory: "Audio",
      price: 2999,
      discountPercentage: 20,
      finalPrice: 2399,
      rating: 4.5,
      stock: 120,
      sku: "SM-BT-01",
      color: "Black",
      warranty: "1 Year",
      features: ["Noise Cancellation", "Fast Charging", "Bluetooth 5.3"],
      isLive: true,
      createdAt: "2024-11-12T10:30:00Z",
    },
    {
      _id: "p1002",
      name: "Men Slim Fit Cotton Shirt",
      brand: "UrbanWear",
      category: "Fashion",
      subCategory: "Men Clothing",
      price: 1499,
      discountPercentage: 30,
      finalPrice: 1049,
      rating: 4.2,
      stock: 85,
      sku: "UW-SHIRT-09",
      color: "Blue",
      size: ["S", "M", "L", "XL"],
      material: "100% Cotton",
      washCare: "Machine Wash",
      isLive: true,
      createdAt: "2024-10-20T08:15:00Z",
    },
    {
      _id: "p1003",
      name: "Gaming Mechanical Keyboard",
      brand: "KeyBlaze",
      category: "Electronics",
      subCategory: "Computer Accessories",
      price: 4599,
      discountPercentage: 10,
      finalPrice: 4139,
      rating: 4.7,
      stock: 40,
      sku: "KB-MECH-77",
      switchType: "Blue Switch",
      backlight: "RGB",
      connectivity: "Wired USB",
      compatibleWith: ["Windows", "Mac"],
      isLive: true,
      createdAt: "2024-12-01T14:45:00Z",
      color: "red",
    },
    {
      _id: "p1004",
      name: "Stainless Steel Water Bottle 1L",
      brand: "HydroPlus",
      category: "Home & Kitchen",
      subCategory: "Drinkware",
      price: 899,
      discountPercentage: 15,
      finalPrice: 764,
      rating: 4.3,
      stock: 200,
      sku: "HP-BOTTLE-1L",
      capacity: "1 Liter",
      insulated: true,
      material: "Stainless Steel",
      color: "Silver",
      isLive: true,
      createdAt: "2024-09-18T06:20:00Z",
    },
    {
      _id: "p1005",
      name: "Smart Fitness Watch",
      brand: "FitTrack",
      category: "Electronics",
      subCategory: "Wearables",
      price: 5999,
      discountPercentage: 25,
      finalPrice: 4499,
      rating: 4.6,
      stock: 60,
      sku: "FT-WATCH-5",
      display: "AMOLED",
      batteryLife: "7 Days",
      waterResistance: "IP68",
      features: ["Heart Rate", "Sleep Tracking", "SpO2"],
      isLive: true,
      createdAt: "2024-12-05T11:00:00Z",
      color: "pink",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 6</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Price (₹)</th>
            <th>Discount (%)</th>
            <th>Final Price (₹)</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>SKU</th>
            <th>Color</th>
            <th>Warranty</th>
            <th>Features</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => {
            return (
              <tr>
                <td>{prod._id}</td>
                <td>{prod.name}</td>
                <td>{prod.brand}</td>
                <td
                  style={{
                    backgroundColor: prod.category == "Electronics" && "yellow",
                  }}
                >
                  {prod.category}
                </td>
                <td>{prod.subCategory}</td>
                <td>{prod.price} {prod.price<=1500 && " Sasta Prod"}</td>
                <td
                  style={{
                    backgroundColor: prod.discountPercentage > 20 && "blue",
                  }}
                >
                  {prod.discountPercentage}
                </td>
                <td style={{ color: prod.finalPrice > 4000 && "gold" }}>
                  {prod.finalPrice}
                </td>
                <td style={{ color: prod.rating < 4.5 && "red" }}>
                  {prod.rating}  
                  {
                    prod.rating>4.5 && "   *****"
                  }
                  
                </td>
                <td style={{ backgroundColor: prod.stock < 50 && "red" }}>
                  {prod.stock}
                </td>
                <td>{prod.sku}</td>
                <td style={{color:prod.color}}>{prod.color}</td>
                <td>{prod.warranty}</td>
                <td>{prod.features}</td>
                <td>{prod.isLive ? "true" : "false"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};