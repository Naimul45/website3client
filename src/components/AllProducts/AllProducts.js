import React, { useState } from "react";
import AllProductsCard from "./AllProductsCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { BiSearch } from "react-icons/bi";

const getFilteredItems = (query, products) => {
  console.log("products : ", products);
  if (!query) {
    return products;
  }
  return products.filter((product) =>
    product.product_name.toLowerCase().includes(query)
  );
};

const AllProducts = () => {
  const [query, setQuery] = useState("");

  const { isLoading, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homeproducts");
      const data = res.json();
      return data;
    },
  });
  const filteredItems = getFilteredItems(query, products);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="flex justify-between lg:mx-[104px] mt-6">
        <h1 className="text-3xl font-bold text-center my-6">
          Our All Products
        </h1>
        <div className="navbar-center hidden lg:flex mt-3">
          <ul className="menu menu-horizontal px-1 pl-10">
            <label className="bg-base-200 px-3 rounded lg:h-[50px]">
              <BiSearch className="text-2xl  lg:h-[50px]" />
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-solid border border-slate-500  text-lg text-black font-semibold rounded lg:w-[320px] lg:h-[46px] pl-3 bg-base-100"
              placeholder="Search Products..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:mx-[104px]">
        {filteredItems?.map((product) => (
          <AllProductsCard product={product}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
