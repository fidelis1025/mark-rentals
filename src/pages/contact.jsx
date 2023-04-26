import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactsHolder from '../components/contactsholder'

const Contact = () => {
  const property = "md:bg-[#545454ce]"
  return (
    <div>
        <Navbar property={property}/>
        <ContactsHolder/>
        <Footer/>
    </div>
  )
}

export default Contact