import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end font-bold text-2xl">TOTAL: <span className="font-bold text-2xl ml-1">{totalAmount} USD</span></div>
        </div>
      ) : (
        <div>Your Cart is empty...</div>
      )}
    </div>
  );
};

export default Cart;
