import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TbShoppingCartOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    isLoading,
    data: orders = [],
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/addtocart?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/confirmorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your order has been confirmed");
        window.location.reload();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex lg:flex-row flex-col lg:mx-[104px] lg:px-0 px-4 justify-between">
      {orders.length ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold mt-10">
            Billing & Shipping{orders.length}
          </h1>
          <div className="mt-3">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              {...register("name")}
              className="border border-solid border-red-600 block rounded lg:w-[297px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Phone Number</label>
            <input
              {...register("phoneNumber")}
              className="border border-solid border-red-600 block rounded lg:w-[619px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Full Address</label>
            <input
              {...register("address")}
              className="border border-solid border-red-600 block rounded lg:w-[619px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="House Number , Street Name And City"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">
              Country / Region
              <p className="inline text-orange-600 font-semibold text-lg">*</p>
            </label>
            <h3 className="text-xl font-semibold">Bangladesh</h3>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold mt-5 mb-3">
              Additional Information
            </h1>
            <label className="text-lg font-semibold block">
              Order Notes(optional)
            </label>
            <textarea
              name=""
              id=""
              className="lg:w-[619px] w-full h-[150px] border border-solid border-red-600 rounded pl-2 pt-2 lg:text-lg text-base font-semibold"
              placeholder="Notes about your order , e.g. special notes for delivery"
              {...register("orderNotes")}
            ></textarea>
          </div>

          <button className="btn bg-green-600 text-white w-full hover:bg-red-600 lg:w-[300px]  mt-2">
            Place Order
          </button>
        </form>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mt-10">Billing & Shipping</h1>
          <div className="mt-3">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              {...register("name")}
              className="border border-solid border-red-600 block rounded lg:w-[297px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Phone Number</label>
            <input
              {...register("phoneNumber")}
              className="border border-solid border-red-600 block rounded lg:w-[619px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Full Address</label>
            <input
              {...register("address")}
              className="border border-solid border-red-600 block rounded lg:w-[619px] w-full h-[40px] pl-3 lg:text-lg text-base font-semibold"
              placeholder="House Number , Street Name And City"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">
              Country / Region
              <p className="inline text-orange-600 font-semibold text-lg">*</p>
            </label>
            <h3 className="text-xl font-semibold">Bangladesh</h3>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold mt-5 mb-3">
              Additional Information
            </h1>
            <label className="text-lg font-semibold block">
              Order Notes(optional)
            </label>
            <textarea
              name=""
              id=""
              className="lg:w-[619px] w-full h-[150px] border border-solid border-red-600 rounded pl-2 pt-2 lg:text-lg text-base font-semibold"
              placeholder="Notes about your order , e.g. special notes for delivery"
              {...register("orderNotes")}
            ></textarea>
          </div>

          <button
            className="btn bg-green-600 text-white w-full hover:bg-purple-600 lg:w-[300px] mt-2"
            disabled
          >
            Place Order
          </button>
        </div>
      )}

      <div className="mt-10">
        <h1 className="text-2xl text-green-600 font-semibold mb-4 ">
          Your Order
        </h1>
        <div>
          {orders?.length ? (
            orders.map((order) => (
              <div className=" overflow-x-auto shadow-md sm:rounded-lg lg:mx-[104px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-[96px] h-[96px] p-4 rounded-full">
                        <div className="lg:w-[64px] w-[64px] lg:h-[64px] h-[64px]">
                          <img
                            src={order?.image}
                            alt="Apple Watch"
                            className="rounded-full lg:w-[64px] w-[64px] lg:h-[64px] h-[64px] "
                          />
                        </div>
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white lg:w-[490px] w-[220px]">
                        <p className="lg:w-[490px] w-[220px]">
                          {order?.productName}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          {order.quantity}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {order?.recentPrice}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {order?.recentPrice * order?.quantity}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div className=" my-20">
              <TbShoppingCartOff className="text-7xl text-green-600  mx-[40%]" />

              <h2 className="text-lg font-semibold text-green-600 text-center">
                There are no products here , please add products to the cart
              </h2>
              <Link to="/shopallproducts">
                <button className="btn bg-green-600 lg:mx-[104px] text-center mt-3 text-white lg:w-[300px] w-full hover:bg-emerald-700 mb-[4%]">
                  Back to shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
