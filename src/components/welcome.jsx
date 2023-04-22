import React from "react";
import image1 from "./../images/istockphoto-166268403-612x612.png";

import Navbar from "./navbar";
// import MapArea from "../map-area/map-area";

const Welcome = () => (
  <div
    className="md:w-full md:h-[40rem] md:bg-cover"
    style={{ backgroundImage: `url(${image1})` }}
  >
    <div className="md:w-full md:h-[40rem] md:bg-darkerWhite">
      <div className="">
        <Navbar />
      </div>
      <p className=" md:pl-32 font-Inter text-white capitalize md:pt-32 md:font-bold md:text-[3rem] md:w-[35rem] md:h-52">
        The most affortable places to stay in the san franciso bay area
      </p>
    </div>
    <div>{/* <MapArea/>   */}</div>
  </div>
);

export default Welcome;



