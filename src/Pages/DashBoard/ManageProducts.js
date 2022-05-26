import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleProduct from "./SingleProduct";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/goods").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='text-5xl text-blue-700 text-center mb-5'>
        ManageMent Your Product
      </h1>
      <div className='overflow-x-auto '>
        <table className='table w-full  lg:w-11/12 mx-auto'>
          <thead>
            <tr>
              <th>NO.</th>
              <th>Avater</th>
              <th>Product</th>
              <th>Price/Unit</th>
              <th>Avialable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <SingleProduct
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
              ></SingleProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
