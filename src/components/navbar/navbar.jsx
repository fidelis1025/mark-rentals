import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo1.svg";

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
    // <div className={`bg-blue-500 ${condition ? 'bg-red-500' : ''}`}>Some content</div>
    // const navbarClasses = classNames("fixed", "top-0", "w-full", "py-3", "z-50", {
    //   "bg-white shadow-md": isScrolled,
    // });
    // [#f5f5f5ce]
    <div
      className={`md:flex md:justify-center ${property} ${
        navScroll
          ? "md:bg-[#545454ce] md:fixed md:top-0 md:w-full md:z-10 md:text-red-500 px-0"
          : ""
      } `}
    >
      <div
        className={`md:flex md:pt-6 md:items-center ${
          navScroll ? "md:text-[#FFFFFF]" : " md:text-white"
        }`}
      >
        <div className="md:flex md:space-x-32 md:pr-56 md:pb-4">
          <NavLink>
            <Logo />
          </NavLink>
        </div>
        <div className="font-Sans md:font-normal md:font md:text-lg md:flex space-x-16 ">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/properties">Properties</NavLink>

          <NavLink to="tenants">Tenants</NavLink>

          <NavLink to="contact">Contact Us</NavLink>
        </div>

        <div>
          <hr className="md:border md:border-[#FFFFFF]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
