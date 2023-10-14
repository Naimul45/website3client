import React from "react";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="py-1 visitOurFacebookAppNavbar flex justify-end pr-24">
        <div className="flex">
          <h1 className="font-semibold">Visit Our Facebook App </h1>
          <div>
            <FaFacebook className="text-lg" />
          </div>
        </div>
      </div>

      <div className="navbar bg-base-100 lg:ml-[50px] py-4">
        <div className="">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <label className="bg-base-200 px-3 rounded">
                <BiSearch className="text-2xl mt-3" />
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-solid border border-slate-500 py-2 text-lg text-black font-semibold rounded lg:w-[680px] pl-3 bg-base-100"
                placeholder="Search Products..."
              />
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 pl-10">
            <label className="bg-base-200 px-3 rounded">
              <BiSearch className="text-2xl mt-3" />
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border-solid border border-slate-500 py-2 text-lg text-black font-semibold rounded lg:w-[680px] pl-3 bg-base-100"
              placeholder="Search Products..."
            />
          </ul>
        </div>
        <div className="navbar-end lg:w-[331px]">
          <Link to="/" className="border-r-2 border-slate-400 pr-3">
            <MdOutlineAccountCircle className="w-[28px] h-[28px] lg:ml-[30px] " />
            <p>My Account</p>
          </Link>
          <Link to="/" className="border-r-2 border-slate-400 px-3">
            <BiHelpCircle className="w-[28px] h-[28px] lg:ml-[37px]" />
            <p>Customer Help</p>
          </Link>
          <Link to="/" className="pl-3">
            <FiArrowRightCircle className="w-[28px] h-[28px] lg:ml-[18px]" />
            <p>Checkout</p>
          </Link>
        </div>
      </div>
      <div className="py-3 navbar3rdpart flex justify-between px-6 lg:pl-[60px] lg:pr-[90px]">
        <div className="flex">
          <Link to="/" className="pl-4 text-lg font-semibold text-white">
            Home
          </Link>
          <Link
            to="/allproducts"
            className="pl-4 text-lg font-semibold text-white"
          >
            Shop (All Products)
          </Link>
          <Link to="/contact" className="pl-4 text-lg font-semibold text-white">
            Contact Us
          </Link>
          <Link to="/cart" className="pl-4 text-lg font-semibold text-white">
            Cart
          </Link>
        </div>
        <div className="flex ">
          <p className="text-lg font-semibold text-white">$0</p>
          <Link to="">
            <AiOutlineShopping className="w-[28px] h-[28px] ml-1 text-orange-400" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
