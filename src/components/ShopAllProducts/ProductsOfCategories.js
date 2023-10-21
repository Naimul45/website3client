import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const ProductsOfCategories = () => {
  const [category, setCategory] = useState("");
  console.log(category);

  const { isLoading, data: categoryProducts = [] } = useQuery({
    queryKey: ["categoryProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/categoryproducts?category=${category}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">
        PRODUCT CATEGORIES {categoryProducts?.length}
      </h1>

      <div>
        <h2 className="text-lg font-semibold my-2 bg-white pl-2">Cricket</h2>
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
  );
};

export default ProductsOfCategories;
