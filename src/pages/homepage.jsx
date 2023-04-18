import React from "react";

import Welcome from "../components/welcome";
import PerksSection from "../components/perks-section";
import Property from "../components/property";
import FormSection from "../components/flexibility";
import CommentSection from "../components/comments";
import Footer from "../components/footer";

const HomePage = () => {
    const propertyPerPage = 6
    return(
  <div>
    <Welcome />
    <PerksSection />
    <Property perPage={propertyPerPage}/>
    <FormSection />
    <CommentSection />
    <Footer />
  </div>
)};

export default HomePage;
