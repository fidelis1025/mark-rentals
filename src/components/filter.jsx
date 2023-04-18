import { React, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PropertyCard from "./property-card";
import ReactPaginate from "react-paginate";
import { selectPropertySections } from "../redux/property-card/property-card.selector";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const Filter = ({ property }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    rooms: "",
    type: "",
    baths: "",
  });
  const [currentPage, setCurrentPage] = useState(0);
  // filter configuration
  const filteredData = property.filter((items) => {
    return (
      (filters.minPrice === "" || items.price >= filters.minPrice) &&
      (filters.maxPrice === "" || items.price <= filters.maxPrice) &&
      (filters.rooms === "" || items.rooms >= filters.rooms) &&
      (filters.type === "" || items.type === filters.type) &&
      (filters.baths === "" || items.baths >= filters.baths)
    );
  });

  // React Pagination config
  const propertyPerPage = 9;
  const lastIndex = currentPage + propertyPerPage;
  const records = filteredData.slice(currentPage, lastIndex);
  const pageCount = Math.ceil(filteredData.length / propertyPerPage);

  // React pagination on click function
  const handlePageClick = (e) => {
    const newPage = (e.selected * propertyPerPage) % filteredData.length;
    setCurrentPage(newPage);
  };

  // handle change of filter inouts
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((filters) => ({
      ...filters,
      [name]: name === "type" ? value : parseInt(value),
    }));
  };

  //To reset all search parameters
  const handleClear = () => {
    setFilters({
        minPrice: "",
        maxPrice: "",
        rooms: "",
        type: "",
        baths: "",
    });
  };

  return (
    <div>
      
        <div className="md:flex md:space-x-12 md:justify-center md:items-end md:my-8">
          <div className="md:flex md:space-x-4 md:justify-center md:items-center">
            <label className="md:flex md:flex-col md:space-y-2">
              <span className="md:font-medium">Price</span>

              <div className="md:flex md:space-x-4">
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleChange}
                  className="md:border-gray-300 md:border md:h-10 md:p-2 md:rounded-lg"
                  placeholder="Min Price"
                />
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleChange}
                  className="md:border-gray-300 md:border md:h-10 md:p-2 md:rounded-lg"
                  placeholder="Max Price"
                />
              </div>
            </label>

            <label className="md:flex md:flex-col md:space-y-2">
              <span className="md:font-medium">Number of Rooms</span>
              <input
                type="number"
                name="rooms"
                value={filters.rooms}
                onChange={handleChange}
                className="md:border-gray-300 md:border md:h-10 md:p-2 md:rounded-lg"
              />
            </label>
            <label className="md:flex md:flex-col md:space-y-2">
              <span className="md:font-medium">Property Type</span>
              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
                className="md:border-gray-300 md:border md:h-10 md:p-2 md:rounded-lg"
              >
                <option value="">All</option>
                <option value="Private room">Private Room</option>
                <option value="Condo">Condo</option>
                <option value="Loft">Loft</option>
                <option value="Alcove Studio">Alcove Studio</option>
                <option value="Low Rise">Low Rise</option>
                <option value="Mid Rise">Mid Rise</option>
                <option value="High Rise">High Rise</option>
                <option value="Walk Up">Walk Up</option>
                <option value="Cluster">Cluster</option>
                <option value="Studio">Studio</option>
                <option value="Others">Others</option>
              </select>
            </label>
            <label className="md:flex md:flex-col md:space-y-2">
              <span className="md:font-medium">Number of Baths</span>
              <input
                type="number"
                name="baths"
                value={filters.baths}
                onChange={handleChange}
                className="md:border-gray-300 md:border md:h-10 md:p-2 md:rounded-lg"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={handleClear}
            className="md:border-2 md:border-[#F4511E] md:text-white hover:text-[#252B42] md:bg-[#F4511E] md:text-base md:font-normal hover:bg-transparent md:w-48 md:h-10 md:px-4 md:py-2 md:rounded-lg"
          >
            Clear
          </button>
        </div>
      

      <div className="md:pt-8 md:w-full md:min-h-[75rem] md:bg-[#F5F5F5] ">
        <div className="md:flex md:items-center md:justify-center">
          <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-12 md:gap-y-16">
            {records &&
              records.map(({ id, ...otherProps }) => (
                <PropertyCard key={id} {...otherProps} />
              ))}
          </div>
        </div>
        <div className="md:pb-4">
          <ReactPaginate
            nextLabel={
              <span className="md:bg-[#F4511E] md:flex md:items-center md:justify-center md:h-12 md:w-16 md:border md:border-[#E4E4E4] hover:scale-105">
                <IconContext.Provider value={{ color: "#FFFFFF" }}>
                  <BsChevronRight />
                </IconContext.Provider>
              </span>
            }
            previousLabel={
              <span className="md:bg-[#F4511E] md:flex md:items-center md:justify-center md:h-12 md:w-16 md:border md:border-[#E4E4E4] hover:scale-105 hover:">
                <IconContext.Provider value={{ color: "#FFFFFF" }}>
                  <BsChevronLeft />
                </IconContext.Provider>
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="md:flex md:justify-center md:items-center md:mt-12"
            pageClassName="md:flex md:items-center md:justify-center md:h-12 md:w-12 md:border md:border-[#E4E4E4] md:w-12 md:bg-[#FFFFFF] text-[#F4511E] hover:scale-105"
            activeClassName="md:bg-[#f8825f] md:text-[#FFFFFF] md:hover:scale-100"
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  property: selectPropertySections,
});

export default connect(mapStateToProps)(Filter);
