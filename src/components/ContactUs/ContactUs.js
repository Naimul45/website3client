import React from "react";
import { Link } from "react-router-dom";
import Shipping from "../ShippingHomeSection3/Shipping";
const ContactUs = () => {
  return (
    <>
      <div className="lg:px-[104px] pb-10">
        <h1 className="text-3xl font-semibold py-5 text-center">Contact Us</h1>
        <p className="py-3 text-xl font-semibold">
          Website :
          <Link to="https://departmental-store-02.web.app">
            Departmental Store
          </Link>
        </p>
        <p className="text-xl font-semibold">Call us : 018********</p>
      </div>

      <Shipping></Shipping>
    </>
  );
};

export default ContactUs;
