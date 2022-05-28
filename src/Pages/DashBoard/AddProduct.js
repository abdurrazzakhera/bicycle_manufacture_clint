import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handelProducAdd = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const name = event.target.productName.value;
    const dec = event.target.dec.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const available = event.target.available.value;
    // make a object for product add
    const product = {
      img,
      name,
      dec,
      price,
      quantity,
      available,
    };
    // console.log("submit", product);
    fetch("https://intense-citadel-48808.herokuapp.com/goods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearar ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product Added");
          event.target.reset();
        }
        // console.log(data);
      });
  };
  return (
    <div>
      <h1 className='text-5xl text-primary text-center mb-5'>
        ADD Your Product
      </h1>
      <div className='lg:w-6/12 mx-auto bg-base-100 my-14'>
        <form onSubmit={handelProducAdd} className='grid grid-cols-1 gap-5 '>
          <input
            type='text'
            name='img'
            placeholder='Product Img url'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='text'
            name='productName'
            placeholder='Product Name'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='text'
            name='dec'
            placeholder='Product Description'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='number'
            name='price'
            placeholder='Product Per Unit Price'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='number'
            name='quantity'
            placeholder='Minimum Lots'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='number'
            name='available'
            placeholder='Available Quantity'
            className='w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400'
          />
          <input
            type='submit'
            className='w-full px-4 py-2 btn btn-active btn-primary '
            value='Add Product'
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
