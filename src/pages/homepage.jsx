import React from "react";

import Welcome from "../components/welcome/welcome";
import PerksSection from "../components/perks-section/perks-section";
import Property from "../components/property/property";
import FormSection from "../components/flexibility/flexibility";
import CommentSection from "../components/comments/comments";
import Footer from "../components/footer/footer";

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
