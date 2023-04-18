import React from "react";
import { FaBath,FaBed  } from 'react-icons/fa'


const PropertyCard = ({ image, address, rooms, type, price, baths }) => (
  <div className="md:rounded-2xl overflow-hidden md:border md:border-[#E4E4E4] md:w-80 md:bg-[#ffffff] shadow-lg transform transition-duration-1000 hover:scale-105">
     <img className="md:w-full md:h-60" src={image} /> 
    {/* <div
      style={{ backgroundImage: `url(${image})` }}
      className="md:w-full md:h-60"
    /> */}

    <div>
      <div className="md:w-full md:h-40 md:p-6">
        <h3 className="capitalize md:font-Sans md:font-bold md:text-xl md:text-[#000000]">
          {address}
        </h3>
        <p className="capitalize md:mt-1.5 md:mb-1 md:font-Sans md:font-normal md:text-sm md:text-[#818181]">
          {type}
        </p>
        <p className="md:font-Sans md:font-bold md:text-xl md:text-[#F4511E]">$
          {price}
          <span>/Month</span>
        </p>
      </div>
{/* Come back and adjust this grids and borders to divide */}
      <div className="md:-mt-4 md:w-full md:flex md:space-x-0 md:border-t">
        <div className="md:w-1/2 md:border-r md:h-12 md:flex md:justify-center md:items-center">
          <FaBed className="md:w-4 md:h-4" />
          <span className="md:pl-4">{rooms}</span>
        </div>
        <div className="md:w-1/2 md:h-12 md:flex md:justify-center md:items-center ">
          <FaBath className="md:w-4 md:h-4" />
          <span className="md:pl-4">{baths}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
