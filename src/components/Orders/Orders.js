import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const Orders = () => {
  const {
    refetch,
    isLoading,
    data: orders = [],
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addtocart");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = () => {
    fetch("http://localhost:5000/addtocart", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your product has been successfully deleted");
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {orders.length ? (
        <h1 className="lg:mx-[104px] text-2xl text-green-600 font-semibold mt-3">
          Your Order
        </h1>
      ) : (
        <></>
      )}
      <div className="mt-4">
        {orders.length ? (
          orders.map((order) => (
            <div class=" overflow-x-auto shadow-md sm:rounded-lg lg:mx-[104px]">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-24 p-4 rounded-full">
                      <img
                        src={order?.image}
                        alt="Apple Watch"
                        className="rounded-full"
                      />
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white lg:w-[490px]">
                      {order?.productName}
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-3">
                        {order.quantity}
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {order?.recentPrice}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {order?.recentPrice * order?.quantity}
                    </td>
                    <td class="px-6 py-4">
                      <p
                        class="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                        onClick={() => handleDelete()}
                      >
                        Remove
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <h3 className="text-2xl my-10 font-semibold lg:mx-[104px] text-green-600">
            You have not ordered any products yet
          </h3>
        )}
      </div>
      {orders.length ? (
        <div className="flex">
          <Link to="/checkout">
            <button className="btn bg-green-600 lg:ml-[104px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700">
              Proceed to checkout
            </button>
          </Link>
          <Link to="/shopallproducts">
            <button className="btn bg-green-600 lg:ml-[12px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700 mb-[4%]">
              Back to shopping
            </button>
          </Link>
        </div>
      ) : (
        <Link to="/shopallproducts">
          <button className="btn bg-green-600 lg:mx-[104px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700 mb-[4%]">
            Back to shopping
          </button>
        </Link>
      )}
    </div>
  );
};

export default Orders;
