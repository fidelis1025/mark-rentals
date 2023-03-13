import React from "react";
import { ReactComponent as Bath } from "../../assets/bath.svg";
import { ReactComponent as Room } from "../../assets/rooms.svg";

const PropertyCard = ({ image, address, rooms, type, price, baths }) => (
  <div className="md:rounded-lg overflow-hidden md:border md:border-[#E4E4E4] md:w-80 md:bg-[#ffffff] shadow-lg transform transition-duration-1000 hover:scale-105">
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
        <p className="md:font-Sans md:mb-2 md:font-bold md:text-xl md:text-[#F4511E]">
          {price}
          <span>/Month</span>
        </p>
      </div>
{/* Come back and adjust this grids and borders to divide */}
      <div className="md:w-full md:flex md:space-x-0 md:border-t">
        <div className="md:w-1/2 md:border-r md:h-16 md:h-16 md:flex md:justify-center md:items-center">
          <Room className="md:w-4 md:h-4" />
          <span>{rooms}</span>
        </div>
        <div className="md:w-1/2 md:h-16 md:flex md:justify-center md:items-center ">
          <Bath className="md:w-4 md:h-4" />
          <span>{baths}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
