import React from "react";
import { ReactComponent as Logo } from "../../assets/logo1.svg";

import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <div className="md:flex md:pt-6 md:items-center">
      <div className="md:flex md:space-x-32 md:pr-56 md:pb-4">
        <NavLink>
          <Logo />
        </NavLink>
      </div>
      <div className="font-Sans md:text-white md:font-normal md:font md:text-lg md:flex space-x-16 ">
        <NavLink className="hover:border-b">Home</NavLink>

        <NavLink className="hover:border-b">Landlord</NavLink>

        <NavLink className="hover:border-b">Tenants</NavLink>

        <NavLink className="hover:border-b">Contact Us</NavLink>
      </div>
    </div>
    <hr />
  </div>
);

export default Navbar;
