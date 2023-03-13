import { React, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PropertyCard from "../property-card/property-card.component";
import { selectPropertySections } from "../../redux/property-card/property-card.selector";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const Property = ({ property }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const propertyPerPage = 6;
  const lastIndex = currentPage + propertyPerPage;
  const records = property.slice(currentPage, lastIndex);
  const pageCount = Math.ceil(property.length / propertyPerPage);



  const handlePageClick = (event) => {
    const newOffset = (event.selected * propertyPerPage) % property.length;
    setCurrentPage(newOffset);
  };

  return (
    <div className="md:w-full md:h-[80rem] md:bg-[#F5F5F5] ">
      <div className="md:flex justify-between">
        <h3 className="capitalize font-Inter md:pl-32 md:text-4xl md:font-extrabold md:py-12 md:text-[#000000]">
          List of Properties
        </h3>
        <button></button>
      </div>
      <div className="md:flex md:items-center md:justify-center">
        <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-12 md:gap-y-16">
          {records &&
            records.map(({ id, ...otherProps }) => (
              <PropertyCard key={id} {...otherProps} />
            ))}
        </div>
      </div>
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
  );
};

const mapStateToProps = createStructuredSelector({
  property: selectPropertySections,
});

export default connect(mapStateToProps)(Property);
