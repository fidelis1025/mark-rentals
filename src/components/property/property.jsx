import { React, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PropertyCard from "../property-card/property-card";
import ReactPaginate from "react-paginate";
import { selectPropertySections } from "../../redux/property-card/property-card.selector";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const Property = ({ property, perPage }) => {
  // the perPage prop is gotten from properties page
  const [currentPage, setCurrentPage] = useState(0);
  const propertyPerPage = perPage;
  const lastIndex = currentPage + propertyPerPage;
  const records = property.slice(currentPage, lastIndex);
  const pageCount = Math.ceil(property.length / propertyPerPage);

  const handlePageClick = (event) => {
    const newPage = (event.selected * propertyPerPage) % property.length;
    setCurrentPage(newPage);
  };

  return (
    <div className="md:w-full md:min-h-[75rem] md:bg-[#F5F5F5] ">
     
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
  );
};

const mapStateToProps = createStructuredSelector({
  property: selectPropertySections,
});

export default connect(mapStateToProps)(Property);
