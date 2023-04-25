import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Contact = () => {
  const property = "md:bg-[#545454ce]"
  return (
    <div>
        <Navbar property={property}/>
        <Footer/>
    </div>
  )
}

export default Contact