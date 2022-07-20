import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className="cursor-pointer"> Booking.com </h1>
      </div>
      <ul className="hidden md:flex ">
        <li> Home </li>
        <li> Destination </li>
        <li> Travel </li>
        <li> View </li>
        <li> Book </li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson size={30} className="mr-7" />
        <FcSearch size={30} className="mr-4" />
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={25} className="text-black" />
        ) : (
          <HiOutlineMenu size={25} />
        )}
      </div>
      {/* mobile menu dropdown  */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul className="text-black">
          <h1 className="border-b"> Booking.com </h1>
          <li className="border-b"> Home </li>
          <li className="border-b"> Destination </li>
          <li className="border-b"> Travel </li>
          <li className="border-b"> View </li>
          <li className="border-b"> Book </li>
        </ul>
        <div className="flex flex-col">
          <button className="my-4 rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7">
            Search
          </button>
          <button className=" rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow">
            Account
          </button>
        </div>
        <div className="text-black flex justify-between mt-10">
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsInstagram className="icon" />
          <BsPinterest className="icon" />
          <BsYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
