import React from "react";

import { ReactComponent as Perks1 } from "../../assets/Vector1.svg";
import { ReactComponent as Perks2 } from "../../assets/Vector2.svg";
import { ReactComponent as Perks3 } from "../../assets/Vector3.svg";
import { ReactComponent as Perks4 } from "../../assets/Vector4.svg";
import { ReactComponent as Perks5 } from "../../assets/Vector5.svg";
import { ReactComponent as Perks6 } from "../../assets/Vector6.svg";

const Perks = () => (
  <div className="md:mt-12 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-2">

    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 rounded-lg md:flex md:justify-center md:items-center">
        <Perks1 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Pay as Little as possible!
      </h3>
    </div>

    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 md:rounded-lg md:flex md:justify-center md:items-center">
        <Perks2 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Enjoy wisdom of community!
      </h3>
    </div>
    
    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 md:rounded-lg md:flex md:justify-center md:items-center">
        <Perks3 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Let's somebody else take care of Landlord!
      </h3>
    </div>
    
    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 md:rounded-lg md:flex md:justify-center md:items-center">
        <Perks4 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Enjoy peaceful Environment!
      </h3>
    </div>
    
    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 md:rounded-lg md:flex md:justify-center md:items-center">
        <Perks5 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Stay Safe! Save Money!
      </h3>
    </div>
    
    <div className="md:h-40 md:pb-2">
      <div className="bg-white shadow-lg md:h-14 md:w-14 md:rounded-lg md:flex md:justify-center md:items-center">
        <Perks6 />
      </div>
      <h3 className="capitalize md:font-Inter md:font-semibold md:text-2xl md:text-text md:pt-3">
      Pay for what you use!
      </h3>
    </div>

  </div>
);

export default Perks;
