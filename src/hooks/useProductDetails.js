import { useEffect, useState } from "react";

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://intense-citadel-48808.herokuapp.com/goods/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);
  return [product];
};
export default useProductDetails;
