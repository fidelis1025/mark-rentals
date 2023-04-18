import React from "react";

import image1Url from "../../images/happiness.jpg";
import image2Url from "../../images/roommates.jpg";
import image3Url from "../../images/cleaning.jpg";
import image4Url from "../../images/flexible.jpg";

import Button from "./button";
import Form from "./form";

const FormSection = () => {
  return (
    <div>
    <div className="md:px-32 md:pt-20 md:flex md:space-x-16">
      <div className="md:font-Inter md:font-semibold md:text-center md:text-lg md:text-[#FFFFFF]">
        <div className="md:flex md:items-end space-x-4 md:pb-2">
          <div
            className="md:w-60 md:h-72 bg-center md:bg-cover hover:scale-95"
            style={{
              backgroundImage: `url(${image4Url})`,
              borderRadius: "2rem",
            }}
          >
            <div className="md:w-60 md:h-72 md:bg-[#00000033] rounded-[2rem] md:p-6">
              Flexible Leases
            </div>
          </div>
          <div
            className="md:w-60 md:h-60 bg-center md:bg-cover hover:scale-95"
            style={{
              backgroundImage: `url(${image1Url})`,
              borderRadius: "2rem",
            }}
          >
            <div className="md:w-60 md:h-60 md:bg-[#00000033] rounded-[2rem] md:p-6">
              7-Day Happiness Guaranteed
            </div>
          </div>
        </div>

        <div className="md:flex md:items-start space-x-4 md:pt-2">
          <div
            className="md:w-52 md:h-64 bg-center md:bg-cover hover:scale-95"
            style={{
              backgroundImage: `url(${image3Url})`,
              borderRadius: "2rem",
            }}
          >
            <div className="md:w-52 md:h-64 md:bg-[#00000033] rounded-[2rem] md:p-6">
              Monthly House Cleaning
            </div>
          </div>
          <div
            className="md:w-72 md:h-72 bg-center md:bg-cover hover:scale-95"
            style={{
              backgroundImage: `url(${image2Url})`,
              borderRadius: "2rem",
            }}
          >
            <div className="md:w-72 md:h-72 md:bg-[#00000033] rounded-[2rem] md:p-6 ">
              Choose Your Own Roommate
            </div>
          </div>
        </div>
      </div>

      <div className="md:font-Inter md:text-[18191F] md:w-auto md:mt-32">
        <h2 className="text-justify capitalize md:text-3xl md:font-extrabold">
          Flexibility and options to suit your lifestyle.
        </h2>
        <p className="text-justify md:text-dark md:font-normal md:py-6">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <Button className="search">Search Rooms</Button>
      </div>
    </div>
    <Form/>
    </div>
  );
};

export default FormSection;
