import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const NavbarRight = () => {
  return (
    <div className="">
      <div>
        <input type="text" />
        <BiSearch size={25} />
      </div>
      <AiOutlineHeart size={25} />
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5">
          3
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
