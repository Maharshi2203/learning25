import React, { useState } from "react";
import { useForm } from "react-hook-form";


const OrderForm = () => {
  const {register,handleSubmit,formState: { errors },watch} = useForm({mode:"onChange"});

  const [submittedData, setSubmittedData] = useState(null);
  

  
 const price = watch("price") || 0;
const quantity = watch("quantity") || 0;

const isValid = price > 0 && quantity > 0;
const total = isValid ? price * quantity : 0;




  const onSubmit = (data) => {
    setSubmittedData({ ...data, total });
  };
  

  return (
    <div style={{ width: "500px", margin: "auto", padding: "20px",backgroundColor:"blue" }}>
      <h2>Order Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div className="order-details">
          <label>Product Name</label>
          <input type="text"{...register("productName", { required: true })}/>
          {errors.productName && <p>Product name is required</p>}
        </div>

        <div>
          <label>Price</label>
          <input type="number"{...register("price", {required: "Price is required", min: {value: 1,message: "Price cannot be negative or zero"}
  })}
/>
{errors.price && <p>{errors.price.message}</p>}

        </div>
        
        <div>
          <label>Quantity</label>
          <input type="number"{...register("quantity", { required: true })}/>
          {errors.quantity && <p>Quantity is required</p>}
        </div>
        
        <div>
     <label>Total</label>

    <input
        type="number"
        value={isValid ? total : ""}
        readOnly
        required={isValid}
    />

  {isValid && (
    <p className="error">Enter valid price and quantity</p>
  )}
</div>

        <button type="submit">Submit Order</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Order Details</h3>
          <p><strong>Product:</strong> {submittedData.productName}</p>
          <p><strong>Price:</strong> {submittedData.price}</p>
          <p><strong>Quantity:</strong> {submittedData.quantity}</p>
          <p><strong>Total:</strong> {submittedData.total}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
