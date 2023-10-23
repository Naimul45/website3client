import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Checkout = () => {
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

  return (
    <div className="flex lg:flex-row flex-col lg:mx-[104px] justify-between">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold mt-10">Billing & Shipping</h1>
        <div className="mt-3">
          <label className="text-lg font-semibold">Your Name</label>
          <input
            {...register("name")}
            className="border border-solid border-red-600 block rounded lg:w-[297px] lg:h-[40px] pl-3 text-lg font-semibold"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-semibold">Your Phone Number</label>
          <input
            {...register("phoneNumber")}
            className="border border-solid border-red-600 block rounded lg:w-[619px] lg:h-[40px] pl-3 text-lg font-semibold"
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-semibold">Your Full Address</label>
          <input
            {...register("address")}
            className="border border-solid border-red-600 block rounded lg:w-[619px] lg:h-[40px] pl-3 text-lg font-semibold"
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
            className="lg:w-[619px] lg:h-[150px] border border-solid border-red-600 rounded pl-2 pt-2 text-lg font-semibold"
            placeholder="Notes about your order , e.g. special notes for delivery"
            {...register("orderNotes")}
          ></textarea>
        </div>

        <button className="btn bg-green-600 text-white w-full hover:bg-red-600 lg:w-[300px] mt-2">
          Place Order
        </button>
      </form>

      <div className="mt-10">
        <h1 className="text-2xl text-green-600 font-semibold mb-4 ">
          Your Order
        </h1>
        <div>
          {orders?.map((order) => (
            <div className="overflow-x-auto lg:w-[481px]">
              <table className="table">
                {/* head */}

                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={order.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold lg:w-[240px] ">
                            {order.productName}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="font-semibold">
                      {order.quantity} * {order.recentPrice}
                    </td>
                    <td className="font-semibold">
                      {order.quantity * order.recentPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
