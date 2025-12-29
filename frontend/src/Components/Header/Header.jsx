


import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-7xl mt-10">
        <figure className="relative">
          {/* Responsive Image */}
          <img
            src={assets.header_img}
            alt="Food Delivery"
            className="w-full h-auto object-cover rounded-xl"
          />

          {/* Text Overlay */}
          <figcaption className="absolute top-1/2 left-6 xl:top-1/3 sm:left-10 -translate-y-1/2 max-w-lg sm:max-w-xl md:max-w-2xl">
            <h1 className="text-sm  sm:text-3xl mt-10 md:text-4xl xl:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
              Delicious food delivered to your door — fast, fresh, and hot.
            </h1>

            <p className="text-sm sm:text-lg md:text-xl mt-3 xl:mt-5 text-white/90 drop-shadow">
              Order your favorite meals with just a click and enjoy
              restaurant-quality taste at home.
            </p>

            <Link to='/order-place'><button className="mt-5 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-3xl bg-red-500 hover:bg-red-600 duration-200 text-white shadow-lg">
              Place Order
            </button></Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Header;
