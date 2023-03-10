import { React } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PropertyCard from "../property-card/property-card.component";
import { selectPropertySections } from "../../redux/property-card/property-card.selector";

const Property = ({ property }) => (
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const propertyPerPage = 6;
  //   const lastIndex = currentPage * propertyPerPage;
  //   const firstIndex = lastIndex - propertyPerPage;
  //   const records = property.slice(firstIndex, lastIndex)
  //   const numberOfPage = Math.ceil(property.length/propertyPerPage)

  <div className="md:w-full md:h-[120rem] md:bg-[#F5F5F5] ">
    <div className="md:flex justify-between">
      <h3 className="capitalize font-Inter md:pl-32 md:text-4xl md:font-extrabold md:py-12 md:text-[#000000]">
        List of Properties
      </h3>
      <button></button>
    </div>
    <div className="md:flex md:items-center md:justify-center">
      <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-12 md:gap-y-16">
        {property.map(({ id, ...otherProps }) => (
          <PropertyCard key={id} {...otherProps} />
        ))}
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  property: selectPropertySections,
});

export default connect(mapStateToProps)(Property);
