import React from "react";
import image1 from "../../images/istockphoto-166268403-612x612.png";

import Navbar from "../navbar/navbar";
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




// import React, { useState } from 'react';

// const data = [
//   { id: 1, price: 1000, rooms: 2, type: 'Apartment', baths: 1 },
//   { id: 2, price: 1500, rooms: 3, type: 'House', baths: 2 },
//   { id: 3, price: 2000, rooms: 4, type: 'Apartment', baths: 2 },
//   { id: 4, price: 2500, rooms: 5, type: 'House', baths: 3 },
// ];

// const FilterComponent = () => {
  // const [filters, setFilters] = useState({
    // these should correspond with the naming in the reducer
  //   minPrice: '',
  //   maxPrice: '',
  //   rooms: '',
  //   type: '',
  //   baths: '',
  // });
  



// Substitute one
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

// Main one
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFilters((filters) => ({
//     ...filters,
//     [name]: name === 'type' ? value : parseInt(value),
//   }));
// };



// const filteredData = data.filter((item) => {
//   return (
//     (filters.minPrice === '' || item.price >= filters.minPrice) &&
//     (filters.maxPrice === '' || item.price <= filters.maxPrice) &&
//     (filters.rooms === '' || item.rooms >= filters.rooms) &&
//     (filters.type === '' || item.type === filters.type) &&
//     (filters.baths === '' || item.baths >= filters.baths)
//   );
// });


//   return (
//     <div className="flex flex-col w-64 space-y-4">
//       <h2 className="text-lg font-bold">Filter Properties</h2>
{/* <label className="flex flex-col space-y-2">
  <span className="font-medium">Price</span>
  <div className="flex space-x-4">
    <input
      type="number"
      name="minPrice"
      value={filters.minPrice}
      onChange={handleChange}
      className="border-gray-300 border p-2 rounded-lg"
      placeholder="Min"
    />
    <input
      type="number"
      name="maxPrice"
      value={filters.maxPrice}
      onChange={handleChange}
      className="border-gray-300 border p-2 rounded-lg"
      placeholder="Max"
    />
  </div>
</label> */}

//       <label className="flex flex-col space-y-2">
//         <span className="font-medium">Number of Rooms</span>
//         <input
//           type="number"
//           name="rooms"
//           value={filters.rooms}
//           onChange={handleChange}
//           className="border-gray-300 border p-2 rounded-lg"
//         />
//       </label>
//       <label className="flex flex-col space-y-2">
//         <span className="font-medium">Property Type</span>
//         <select
//           name="type"
//           value={filters.type}
//           onChange={handleChange}
//           className="border-gray-300 border p-2 rounded-lg"
//         >
//           <option value="">All</option>
//           <option value="Apartment">Apartment</option>
//           <option value="House">House</option>
//         </select>
//       </label>
//       <label className="flex flex-col space-y-2">
//         <span className="font-medium">Number of Baths</span>
//         <input
//           type="number"
//           name="baths"
//           value={filters.baths}
//           onChange={handleChange}
//           className="border-gray-300 border p-2 rounded-lg"
//         />
//       </label>
//       <button
//         type="button"
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//       >
//         Filter
//       </button>
//     </div>
//   );
// };

// export default FilterComponent;
