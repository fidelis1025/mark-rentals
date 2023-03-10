import React from "react";
import image1 from "../../images/istockphoto-166268403-612x612.png";

import Navbar from "../navbar/navbar.component";

const Welcome = () => (
  <div
    className="md:w-full md:h-[40rem] md:bg-cover"
    style={{ backgroundImage: `url(${image1})` }}
  >
    <div className="md:px-32 md:w-full md:h-[40rem] md:bg-darkerWhite">
      <Navbar />
      <p className="font-Inter text-white capitalize md:pt-40 md:font-bold md:text-[3rem] md:w-[35rem] md:h-52">
        The most affortable places to stay in the san franciso bay area
      </p>
    </div>
    {/* <div></div> */}
  </div>
);

export default Welcome;
