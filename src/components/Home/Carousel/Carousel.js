import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          <img
            src="https://www.google.com/search?q=images&oq=images&aqs=chrome..69i57j0i402i650j0i67i650l3j0i131i433i512j0i20i131i263i433i512j0i512l2.1289j0j7&sourceid=chrome&ie=UTF-8#vhid=nwiTKnJXTwcwcM&vssid=l"
            id="slide-1"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1xoqpuQaTNnyePLvrVMceQ-OZpDwhtGE_zJV3Iu0bNqm2IexOe1oWNh8zoR2u15Znf4&usqp=CAU"
            id="slide-2"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdxG-JSuchSSWP1UAEkvBTTwrD3vnliPd8rQTyKMCtD5PG9Mx_jN1CgS92uSUcIIqCxE&usqp=CAU"
            id="slide-3"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHic94MasM9qEpeRUBqzo6xR09VM8vdJA5p9Nt7sy2pEtAXxqJ7xiIFcK9CwvEI1qP9I&usqp=CAU"
            id="slide-4"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4uJPSlC26MERP5XXh8wo2j6QYp0B557QLhtj3v6A2rCwj6kpvkZXLmojDAv4EmsL7hg&usqp=CAU"
            id="slide-5"
            alt=""
          />
        </div>

        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
