import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="slides lg:w-full lg:h-[600px]">
      <div className="slide slide-1 lg:w-full lg:h-[600px]">
        <img
          src="https://dkpcricketonline.com/cdn/shop/files/Homepage_Sqaure_2_All_Equipment_1400x.jpg?v=1672046405"
          alt=""
        />
      </div>

      <div className="slide slide-2 lg:w-full lg:h-[600px]">
        <img
          src="https://c8.alamy.com/comp/C99MY8/interior-of-the-shop-at-headingley-home-of-yorkshire-cricket-club-C99MY8.jpg"
          alt=""
        />
      </div>

      <div className="slide slide-3 lg:w-full lg:h-[600px]">
        <img
          src="https://c8.alamy.com/comp/2PYF9NP/cricket-wireless-store-in-modesto-california-usa-an-att-company-providing-low-cost-cellular-service-2PYF9NP.jpg"
          alt=""
        />
      </div>
      <div className="slide slide-4 lg:w-full lg:h-[600px]">
        <img
          src="https://i.ytimg.com/vi/QbInRnN_MIY/maxresdefault.jpg"
          alt=""
        />
      </div>
      <div className="slide slide-5 lg:w-full lg:h-[600px]">
        <img
          src="https://cdn11.bigcommerce.com/s-tj87duh98/product_images/uploaded_images/zirakpure-store-8-.jpeg"
          alt=""
        />
      </div>
      <div className="slide slide-6 lg:w-full lg:h-[600px]">
        <img src="https://wallpaperaccess.com/full/1088599.jpg" alt="" />
      </div>
    </div>
  );
};

export default Carousel;
