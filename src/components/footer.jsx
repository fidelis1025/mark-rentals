import React from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaGoogle,
  FaPinterest,
} from "react-icons/fa";

import { ReactComponent as Logo } from "../../assets/logo2.svg";

const Footer = () => {
  return (
    <div>
      <div className="md:px-20">
        <hr className="md:border md:border-[#F4511E] md:my-24" />
      </div>
      <div className="md:flex">
        <div className="md:text-[#0A142F]">
          <Logo />
        </div>
        <div className="md:font-Assistant md:text-[#0A142F]">
          <div className="md:flex md:items-center md:space-x-3">
            <i>
              <FaMapMarkerAlt className="text-[#F4511E]" />
            </i>
            <p className="md:text-sm">
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </p>
          </div>

          <div className="md:flex md:items-center md:space-x-24 md:mt-4">
            <div className="md:flex md:items-center md:space-x-3">
              <i>
                <FaPhoneAlt className="text-[#F4511E]" />
              </i>
              <p className="md:text-sm">(+1)667-456-7890</p>
            </div>

            <div className="md:flex md:items-center md:space-x-3">
              <i>
                <FaFax className="text-[#F4511E]" />
              </i>
              <p className="md:text-sm">(+1)667-456-7890</p>
            </div>
          </div>
          <div className="md:flex md:items-center md:space-x-10 md:my-10">
            <p className="md:text-sm md:text-[0A142F]">Social Media</p>

            <ul className="list-none md:flex md:space-x-6">
              <li>
                <a
                  href="https://facebook.com/"
                  className="md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaFacebook className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  className=" md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaTwitter className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  className="md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaLinkedin className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/"
                  className=" md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaYoutube className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com/"
                  className="md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaPinterest className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  className="md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaInstagram className="md:w-5 md:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://google.com/"
                  className="md:text-[#F4511E] md:hover:text-[#d99986]"
                >
                  <FaGoogle className="md:w-5 md:h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <hr className="md:border md:border-[#F4511E] md:mt-20" />
      </div>

      <div className="font-Inter md:flex md:space-x-60 md:pt-8 md:pb-24 md:px-32">
        <ul className="list-none md:flex md:space-x-6 uppercase ">
          <li>
            <a href="">About us</a>
          </li>

          <li>
            <a href="">Contact us</a>
          </li>

          <li>
            <a href="">Help</a>
          </li>

          <li>
            <a href="">Privacy Policy</a>
          </li>

          <li>
            <a href="">Disclaimer</a>
          </li>
        </ul>

        <div>
          <p>Copyright © 2020 MarkRentals. All rights reserved</p>
        </div>







      </div>

     

      {/* <div class="tracker">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <p class="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">1</p>
      <div class="h-px w-16 bg-gray-300 ml-2"></div>
      <p class="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">2</p>
      <div class="h-px w-16 bg-gray-300 ml-2"></div>
      <p class="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">3</p>
      <div class="h-px w-16 bg-gray-300 ml-2"></div>
      <p class="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">4</p>
    </div>

    <div class="text-sm font-medium flex items-center">
      <p class="text-gray-500 mr-2">Kyc</p>
      <p class="text-gray-500 mr-2">Review</p>
      <p class="text-gray-500 mr-2">Payment</p>
      <p class="text-gray-500">Complete</p>
    </div>
  </div>
</div> */}




    </div>
  );
};

export default Footer;
// import React from "react";

// function Tracker(props) {
//   return (
//     <div className="tracker">
//       <div className="commonClass">
//         <div className="items">
//           <p className="circle">1</p>
//           <div className="hr"></div>
//           <p className="circle">2</p>
//           <div className="hr"></div>
//           <p className="circle">3</p>
//           <div className="hr"></div>
//           <p className="circle">4</p>
//           {/* <p className="descr">kyc</p> */}
//         </div>

//         <div className="itemsT">
//           <p className="descr1">Kyc</p>
//           <p className="descr">Review</p>
//           <p className="descr">Payment</p>
//           <p className="descr">Complete</p>
//         </div>

//         {/* <div className="hr"></div> */}
//       </div>

//       {/* seperate */}
//     </div>
//   );
// }
// export default Tracker;


// for collapsable search bar
// import { useState } from 'react';

// function SearchBar() {
//   const [expanded, setExpanded] = useState(false);
//   const [searchValue, setSearchValue] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSearchClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchValue}
//         onChange={handleSearchChange}
//         className={`appearance-none rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${expanded ? 'pl-8 pr-4' : 'pl-4 pr-8'}`}
//       />
//       <div
//         className={`absolute inset-y-0 left-0 flex items-center pl-3 ${expanded ? 'opacity-0' : 'opacity-100'}`}
//       >
//         <svg
//           className="h-6 w-6 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 15l6-6m0 0l6 6m-6-6v12"
//           />
//         </svg>
//       </div>
//       <div
//         className={`absolute inset-y-0 right-0 flex items-center pr-3 ${expanded ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <svg
//           className="h-6 w-6 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           onClick={handleSearchClick}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }


// For filter and search functionality
// import { useState, useEffect } from "react";

// const data = [
//   { id: 1, name: "Card 1", description: "Description for Card 1" },
//   { id: 2, name: "Card 2", description: "Description for Card 2" },
//   { id: 3, name: "Card 3", description: "Description for Card 3" },
// ];

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const results = data.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(results);
//   }, [searchQuery]);

//   return (
//     <div className="container mx-auto py-8">
//       <div className="max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>
//       <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredData.map((item) => (
//           <div key={item.id} className="p-4 bg-white shadow-md">
//             <h2 className="text-lg font-medium">{item.name}</h2>
//             <p className="text-gray-500">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;