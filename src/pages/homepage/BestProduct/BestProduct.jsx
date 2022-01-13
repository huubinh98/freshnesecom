import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem";
import productService from "../../../service/productService";
import "./bestproduct.scss";

export default function BestProduct() {
  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const resPro = await productService.getProduct();
      const dataPro = resPro?.data;
      setGetProduct(dataPro);
    })();
  }, []);

  return (
    <div className="pro__list">
      <ProductItem productCart={getProduct.slice(1, 7)} />
    </div>
  );
}
