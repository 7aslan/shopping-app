import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1 text-xl px-2 font-bold">Category</div>
      {categories && categories.length > 0
        ? categories.map((category, i) => (
            <div
              className="text-lg cursor-pointer hover:bg-gray-200 p-2"
              key={i}
            >
              {category}
            </div>
          ))
        : null}
    </div>
  );
};

export default Category;
