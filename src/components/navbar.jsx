import React, { useState } from "react";
import { ReactComponent as Logo } from "./../assets/logo1.svg";

import { NavLink } from "react-router-dom";

const Navbar = ({ property }) => {
  const [navScroll, setNavScroll] = useState(false);

  const fixedNav = () => {
    if (window.scrollY > 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", fixedNav);

  return (
   
    <div
      className={`md:flex md:justify-center ${property} ${
        navScroll
          ? "md:bg-[#545454ce] md:fixed md:top-0 md:w-full md:z-10 px-0"
          : ""
      } `}
    >
      <div
        className={`md:flex md:items-center ${
          navScroll ? "md:text-[#FFFFFF] md:py-6" : " md:text-white md:pt-6"
        }`}
      >
        <div className="md:flex md:space-x-32 md:pr-56 md:pb-4">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="font-Sans md:font-normal md:font md:text-lg md:flex space-x-16 ">
          <NavLink
            to="/"
            className={({ isActive}) =>
              isActive ? "" : ""
            }
          >
            Home
          </NavLink>

          <NavLink to="/properties">Properties</NavLink>

          <NavLink to="/tenants">Tenants</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div>
          <hr className="md:border md:border-[#FFFFFF]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
