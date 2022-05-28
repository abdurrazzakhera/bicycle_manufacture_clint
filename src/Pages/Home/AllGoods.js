import React, { useEffect, useState } from "react";
import Goods from "./Goods";

const AllGoods = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://intense-citadel-48808.herokuapp.com/goods", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className='lg:container mx-auto'>
      <h1 className='text-3xl text-red-500'>
        {" "}
        {/* All Product ar here:{products.length} */}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th className='w-20'>Description</th>
              <th>price</th>
              <th>Minimum Lot</th>
              <th>Avilable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products
              .map((product, index) => (
                <Goods
                  key={product._id}
                  product={product}
                  index={index}
                ></Goods>
              ))
              .slice(0, 6)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGoods;
