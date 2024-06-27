const Product = ({ product }) => {
  return (
    <div className="w-[440px] p-3 mb-5 mx-5 border rounded-md  relative">
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 p-2 m-1 bg-black text-white">
        {product?.price} <span className="text-sm ">USD</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl font-bold ">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
