import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ShopAllProduct from "./ShopAllProduct";
import Shipping from "../ShippingHomeSection3/Shipping";

import { useLoaderData } from "react-router-dom";
import "../../App.css";

import { BiHelpCircle } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";

import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BiSearch } from "react-icons/bi";

const getFilteredProducts = (query, products) => {
  if (!query) {
    return products;
  }
  return products.filter((product) =>
    product.product_name.toLowerCase().includes(query)
  );
};

const ShopAllProducts = () => {
  const [query, setQuery] = useState("");

  const { user } = useContext(AuthContext);
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

  const filteredItems = getFilteredProducts(query, products);

  return (
    <>
      <div>
        <img
          src="https://wallpapers.com/images/hd/bangladesh-cricket-team-green-poster-3532ukxu2ppipg3d.jpg"
          alt=""
          className="lg:h-[490px] objectFit w-full"
        />
      </div>
      <div className="lg:mx-[104px]  lg:flex hidden justify-between  lg:flex-row flex-col ">
        <h2 className="lg:text-3xl text-lg font-bold mt-6">Products</h2>
        <div className="navbar-center  flex mt-3">
          <ul className="menu menu-horizontal flex ">
            <label className="bg-base-200 px-3 rounded lg:h-[50px] h-[40px]">
              <BiSearch className="text-2xl  lg:h-[50px] h-[40px] lg:ml-0 ml-[3px]" />
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-solid border border-slate-500  text-lg text-black font-semibold rounded lg:w-[320px] w-[285px] lg:h-[46px] h-[40px] pl-3 bg-base-100"
              placeholder="Search Products..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </ul>
        </div>
      </div>

      <div className="flex lg:mx-[104px] mt-6 lg:flex-row flex-col">
        <div className="lg:w-[275px] bg-base-200 lg:h-[458px] h-[200px] lg:mr-3 rounded lg:block sticky top-[-1px]">
          <div className="p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">PRODUCT CATEGORIES</h1>
              <div className="dropdown dropdown-end lg:hidden block">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
                >
                  <Link to="/" className="flex">
                    <AiOutlineHome className="text-2xl font-semibold mt-[3px]" />
                    <p className="text-xl font-semibold ml-1">Home</p>
                  </Link>
                  <Link to="/" className="flex">
                    <BiHelpCircle className="text-2xl font-semibold mt-[3px]" />
                    <p className="text-xl font-semibold ml-1">Customer Help</p>
                  </Link>
                  {user ? (
                    <Link to="/checkout" className="flex">
                      <FiArrowRightCircle className="text-2xl font-semibold mt-[3px]" />
                      <p className="text-xl font-semibold ml-1"> Checkout</p>
                    </Link>
                  ) : (
                    <Link to="/login" className="flex">
                      <FiArrowRightCircle className="text-2xl font-semibold mt-[3px]" />
                      <p className="text-xl font-semibold ml-1">Checkout</p>
                    </Link>
                  )}
                </ul>
              </div>
            </div>

            <h2 className="text-lg font-semibold my-2 bg-white pl-2">
              Cricket
            </h2>
            <div className="grid lg:grid-cols-1 grid-cols-3 ">
              <p
                onClick={() => setCategory("cricket Bats")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Bats
              </p>

              <p
                onClick={() => setCategory("cricket Gloves")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket </label>Gloves
              </p>

              <p
                onClick={() => setCategory("cricket pads")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Pads
              </p>

              <p
                onClick={() => setCategory("cricket kitbags")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Kitbags
              </p>

              <p
                onClick={() => setCategory("cricket Helmets")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Helmets
              </p>

              <p
                onClick={() => setCategory("cricket Clothing")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Clothing
              </p>

              <p
                onClick={() => setCategory("Cricket Guards")}
                className="text-base font-semibold block mb-2 hover:text-orange-600 hover:cursor-pointer"
              >
                <label className="lg:inline hidden">Cricket</label> Guards
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
                <label className="lg:inline hidden">Cricket</label> Shoes
              </p>
            </div>
          </div>
        </div>
        <hr className="text-lg font-bold " />
        <div className=" lg:hidden flex justify-between  flex-col sticky top-[198px] bg-base-200 ">
          <h2 className="text-xl font-bold mt-4 pl-3">Products</h2>
          <div className="navbar-center  flex mt-3">
            <ul className="menu menu-horizontal flex ">
              <label className="bg-purple-600 px-3 rounded lg:h-[50px] h-[40px]">
                <BiSearch className="text-2xl  lg:h-[50px] h-[40px] lg:ml-0 ml-[3px] text-white" />
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-solid border border-slate-500  text-lg text-black font-semibold rounded lg:w-[320px] w-[285px] lg:h-[46px] h-[40px] pl-3 bg-base-100"
                placeholder="Search Products..."
                onChange={(e) => setQuery(e.target.value)}
              />
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 lg:mt-0 mt-4">
          {filteredItems.length ? (
            filteredItems.map((product) => (
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
