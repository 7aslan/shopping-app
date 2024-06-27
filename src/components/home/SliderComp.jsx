import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">High Quality Shoes</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nesciunt magnam at tenetur sunt nam?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Take a look...
            </div>
          </div>
          <img
            src="https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png"
            alt="shoes"
            // width={480}
            // height={360}
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">High Quality Shoes</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nesciunt magnam at tenetur sunt nam?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Take a look...
            </div>
          </div>
          <img
            src="https://e7.pngegg.com/pngimages/382/622/png-clipart-sneakers-skate-shoe-nike-one-nike-shoe-purple-fashion.png"
            alt="shoes"
            width={360}
            height={360}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
