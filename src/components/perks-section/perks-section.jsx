import React from "react";

import image2 from "../../images/unsplash_oGmf8o53LeE.png";
import PropertyHeading from "../property-heading/property-heading";

import Perks from "../perks/perks";

const PerksSection = () => (
  <div>
    <div className="md:px-20">
      <h2 className="capitalize md:pl-12 md:mt-14 md:font-Inter md:text-text md:text-3xl md:font-extrabold">
        minimum living cost takes care of everything
      </h2>

      <div className="md:flex space-x-4 md:mt-5">
        <img
          src={image2}
          alt="Pool"
          className="md:ml-4 md:w-96 md:h-[30rem] md:rounded-br-pic"
        />
        <Perks />
      </div>
    </div>
    <PropertyHeading />
  </div>
);

export default PerksSection;
