import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">En kaliteli çanta burada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptatum explicabo commodi a nisi ipsa quia non? Explicabo,
              maxime eligendi. Ducimus magni sint fugit totam eligendi id fuga
              voluptatum quo!{" "}
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[500px]"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0fff5fed-4f51-4da7-8826-13f379685957/custom-v2k-by-you.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold">En kaliteli çanta burada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptatum explicabo commodi a nisi ipsa quia non? Explicabo,
              maxime eligendi. Ducimus magni sint fugit totam eligendi id fuga
              voluptatum quo!{" "}
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="w-[500px]"
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/44f222ab-96b6-43b9-82e7-9a1bd888611d/NIKE+COURT+VISION+LO.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
