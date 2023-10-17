import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="slides">
      <div className="slide slide-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6W_z662IFKSueEiBedpiWe4HJt6a7HcIkA&usqp=CAU"
          alt=""
        />
      </div>
      <div className="slide slide-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEM4eTLgBO1VdOLRLbszLy7KihT0NIkCpcMxhKisiW5Rqw2v6pcxZL51bJnY91fLuWWw&usqp=CAU"
          alt=""
        />
      </div>
      <div className="slide slide-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CRSNhhmarsSG46dU2OjDRwheNi6j6fkTK8P1SB5_EWXJvWGyP-rEAG3nXsPeNrc8_mY&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Carousel;
