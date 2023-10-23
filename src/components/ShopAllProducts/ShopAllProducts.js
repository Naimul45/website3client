import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ShopAllProduct from "./ShopAllProduct";
import Shipping from "../ShippingHomeSection3/Shipping";
import ProductsOfCategories from "./ProductsOfCategories";
import Loading from "../Loading/Loading";
import { useLoaderData } from "react-router-dom";

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
      fetch("http://localhost:5000/homeproducts")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  });
  // const { isLoading } = useQuery({});
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <>
      <div className="flex lg:mx-[104px] mt-6">
        <div className="lg:w-[275px] bg-base-200 lg:h-[458px] lg:mr-3 rounded">
          <div className="p-4">
            <h1 className="text-xl font-semibold">
              PRODUCT CATEGORIES {products?.length}
            </h1>

            <div>
              <h2 className="text-lg font-semibold my-2 bg-white pl-2">
                Cricket
              </h2>
              <p
                onClick={() => setCategory("cricket bat")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Bats
              </p>

              <p
                onClick={() => setCategory("cricket gloves")}
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
                onClick={() => setCategory("cricket helmets")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Helmets
              </p>

              <p
                onClick={() => setCategory("cricket clothing")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Clothing
              </p>

              <p
                onClick={() => setCategory("cricket guards")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Guards
              </p>

              <p
                onClick={() => setCategory("cricket balls")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Balls
              </p>

              <p
                onClick={() => setCategory("cricket shoes")}
                className=" text-base font-semibold block mb-2  hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Shoes
              </p>
              <p
                onClick={() => setCategory("cricket accessories")}
                className="text-base font-semibold hover:text-orange-600 hover:cursor-pointer"
              >
                Cricket Accessories
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          {products.length ? (
            products.map((product) => (
              <ShopAllProduct product={product}
                data={data}
              ></ShopAllProduct>
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
