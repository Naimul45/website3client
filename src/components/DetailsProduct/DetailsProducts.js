import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DetailsProducts = () => {
  const [value, setValue] = useState(1);
  const data = useLoaderData();
  // console.log("especific data :", data);

  const plus = () => {
    const valueOfPlus = value + 1;
    setValue(valueOfPlus);
  };

  const minus = () => {
    const valueOfMinus = value - 1;
    setValue(valueOfMinus);
  };

  const handleProduct = () => {
    const info = {
      image: data[0].img,
      productName: data[0].product_name,
      quantity: value,
      recentPrice: data[0].recent_price,
      previousPrice: data[0].prvious_price,
    };
    console.log("information : ", info);

    fetch("http://localhost:5000/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("AddToCart successful!");
      })
      .catch((error) => {
        // console.log(error);
        toast.error("error.message");
      });
  };

  return (
    <div className="card card-side bg-base-100  lg:mx-[90px] lg:mt-4">
      <figure className="border border-solid-2 border-purple-600 rounded-none ">
        <img
          src={data[0].img}
          className="lg:w-[650px] lg:h-[650px] "
          alt="Movie"
        />
      </figure>
      <div className=" ml-10 lg:w-[425px]">
        <h2 className="card-title text-3xl font-bold">
          {data[0].product_name}
        </h2>
        <div className="flex mt-3">
          <del className="bg-orange-600 px-3 text-white text-2xl">
            ৳{data[0].prvious_price}
          </del>
          <h3 className="text-2xl font-semibold ml-3">
            ৳{data[0].recent_price}
          </h3>
        </div>

        <div>
          <div className="flex mt-3">
            <div className="lg:w-[85px]   mr-[35px] flex lg:mt-2">
              <label
                className=" bg-white border border-solid border-black px-3 text-lg font-semibold hover:bg-orange-500 hover:text-white hover:cursor-pointer h-[30px] "
                onClick={() => plus()}
              >
                +
              </label>
              <p className="mx-3">{value}</p>
              <label
                className=" bg-white border border-solid border-black px-3 text-lg font-semibold hover:bg-orange-500 hover:text-white hover:cursor-pointer h-[30px]"
                onClick={() => minus()}
              >
                -
              </label>
            </div>
            <button
              className="btn hover:bg-blue-700 lg:w-[320px] bg-orange-600 text-white "
              onClick={() => handleProduct()}
            >
              Add To Cart
            </button>
          </div>
          <button className="btn hover:bg-blue-700  lg:w-[440px] bg-orange-600 text-white mt-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
