import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";

import Loading from "../Loading";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {products && products.length > 0
            ? products.map((product, i) => (
                <Product key={i} product={product} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Products;
