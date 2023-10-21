import React from "react";
import AllProductsCard from "./AllProductsCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const AllProducts = () => {
  const { isLoading, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homeproducts");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Our All Products</h1>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:mx-[104px]">
        {products?.map((product) => (
          <AllProductsCard product={product}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
