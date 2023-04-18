import React from "react";

import Navbar from "../components/navbar";
import Property from "../components/property";
import Footer from "../components/footer";
import Filter from "../components/filter";

const Properties = () => {
  // const propertyPerPage = 9;
  const property = "md:bg-[#545454ce]";
  return (
    <div>
      <Navbar property={property} />
      <Filter/>
     
      {/* <Property perPage={propertyPerPage} /> */}
      <Footer />
    </div>
  );
};

export default Properties;
