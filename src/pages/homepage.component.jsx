import React from "react";


import Welcome from "../components/welcome/welcome.component";
import PerksSection from "../components/perks-section/perks-section.component";
import Property from "../components/property/property.component";
import FormSection from "../components/flexibility/flexibility.component";

const HomePage =()=>(
<div>
    <Welcome/>
    <PerksSection/>
    <Property/>
    <FormSection/>
</div>
)

export default HomePage;