import React from "react";
import { ReactComponent as Bath } from "../../assets/bath.svg";
import { ReactComponent as Room } from "../../assets/rooms.svg";



const PropertyCard = ({ image, address, rooms, type, price, baths }) => (
  <div className=" md:border md:border-[#E4E4E4] md:w-80 md:bg-[#ffffff] shadow-lg">
    <img className="md:rounded-2xl md:w-full md:h-60 pointer transform transition-duration-10000 hover:scale-110" src={image} />
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
      
      <div className="md:w-full md:flex md:space-x-0 md:border-t">
        <div className="md:w-1/2 md:border-r md:h-16 md:h-16 md:flex md:justify-center md:items-center">
          <Room/>
          <span>{rooms}</span>
        </div>
        <div className="md:w-1/2 md:h-16 md:flex md:justify-center md:items-center">
          <Bath/>
          <span>{baths}</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
