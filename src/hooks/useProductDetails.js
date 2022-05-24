import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/goods/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
      });
  }, [productId]);
  return [product];
};
export default useProductDetails;
