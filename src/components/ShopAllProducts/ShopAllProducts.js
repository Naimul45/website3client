import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ShopAllProduct from "./ShopAllProduct";
import Shipping from "../ShippingHomeSection3/Shipping";
import ProductsOfCategories from "./ProductsOfCategories";
import Loading from "../Loading/Loading";
import { useLoaderData } from "react-router-dom";
import "../../App.css";

const ShopAllProducts = () => {
  const [category, setCategory] = useState("");
  const data = useLoaderData();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`http://localhost:5000/categoryproducts?category=${category}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    } else {
      fetch("http://localhost:5000/allproducts")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  });

  return (
    <>
      <div>
        <img
          src="https://wallpapers.com/images/hd/bangladesh-cricket-team-green-poster-3532ukxu2ppipg3d.jpg"
          alt=""
          className="lg:h-[490px] objectFit w-full"
        />
      </div>
      <div className="flex lg:mx-[104px] mt-6">
        <div className="lg:w-[275px] bg-base-200 lg:h-[458px] lg:mr-3 rounded">
          <div className="p-4">
            <h1 className="text-xl font-semibold">PRODUCT CATEGORIES</h1>

            <div>
              <h2 className="text-lg font-semibold my-2 bg-white pl-2">
                Cricket
              </h2>
              <p
                onClick={() => setCategory("cricket Bats")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Bats
              </p>

              <p
                onClick={() => setCategory("cricket Gloves")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricke Gloves
              </p>

              <p
                onClick={() => setCategory("cricket pads")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Pads
              </p>

              <p
                onClick={() => setCategory("cricket kitbags")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Kitbags
              </p>

              <p
                onClick={() => setCategory("cricket Helmets")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Helmets
              </p>

              <p
                onClick={() => setCategory("cricket Clothing")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Clothing
              </p>

              <p
                onClick={() => setCategory("Cricket Guards")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Guards
              </p>

              <p
                onClick={() => setCategory("cricket Balls")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Balls
              </p>

              <p
                onClick={() => setCategory("cricket Shoes")}
                className=" text-base font-semibold block mb-2  hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Shoes
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          {products.length ? (
            products.map((product) => (
              <ShopAllProduct product={product} data={data}></ShopAllProduct>
            ))
          ) : (
            <h1 className="text-3xl   font-semibold">
              There are no product here.
            </h1>
          )}
        </div>
      </div>

      <Shipping></Shipping>
    </>
  );
};

export default ShopAllProducts;
