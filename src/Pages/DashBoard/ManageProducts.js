import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleProduct from "./SingleProduct";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/goods").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-5xl text-blue-700'>
        Total Product is : {products.length}
      </h1>
      <div class='overflow-x-auto'>
        <table class='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Product</th>
              <th>Price/Unit</th>
              <th>Avialable</th>
              <th>id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <SingleProduct
                key={product._id}
                product={product}
                index={index}
              ></SingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
