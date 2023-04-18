import React from "react";
import Button from "./button";

import { useNavigate } from 'react-router-dom';


const PropertyHeading = () => {
  const navigate = useNavigate();


const handleClick =()=> {
     navigate("/properties");
  }

  return (
    <div className="md:flex md:justify-between md:font-Inter md:px-32 md:py-12 md:bg-[#F5F5F5] ">
      <h3 className="capitalize md:text-3xl md:font-extrabold md:text-[#000000]">
        List of Properties
      </h3>
      <Button handleClick={handleClick} className="property">
        View All Properties
      </Button>
    </div>
  );
};

export default PropertyHeading;
