import React from "react";

import Navbar from "../components/navbar/navbar";
import Property from "../components/property/property";
import Footer from "../components/footer/footer";

const Properties = () => {
    const propertyPerPage = 9
    const property = "md:bg-[#545454ce]"
  return (
    <div>
        <Navbar property={property}/>
        <Property perPage={propertyPerPage}/>
        <Footer/>
    </div>
  )
}

export default Properties