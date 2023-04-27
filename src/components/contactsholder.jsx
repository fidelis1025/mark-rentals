import React, {useState, useEffect} from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

import { HiOutlineMail} from "react-icons/hi";
import {BsTelephoneOutbound} from "react-icons/bs"

// import img10 from "./../images/bethany.jpg";

import { faker } from '@faker-js/faker';


const ContactsHolder = () => {

  const [contacts, setContacts] = useState([]);



  
  
  useEffect(() => {
      const newContacts = [];
    
      for (let i = 0; i < 8; i++) {
          newContacts.push({
              name: faker.name.fullName(),
              email: faker.internet.email(),
              phone: faker.phone.number(),
              image: faker.image.avatar(),
              jobTitle: faker.name.jobTitle()
            });
          }
        
          setContacts(newContacts);
        }, []);
        
        console.log(contacts);
  
  return (
    <div className="md:mt-20">
       <div className="md:mx-20 md:my-4">
        <hr className="md:border md:border-[#F4511E] md:mt-20" />
      </div>
{
  contacts.map((contact,index) =>(

      <div key={index} className="md:mx-32 md:px-8 md:py-8 md:flex md:items-center">
        <div>
          <img
            src={contact.image}
            alt={contact.name}
            className="md:text-center md:h-72 md:w-72 md:rounded-full md:ring-2 md:ring-[#F4511E] md:object-cover"
          />
        </div>

        <div className="md:ml-20">
          
            <h4 className="md:text-[2.6rem] md:font-bold md:tracking-[.3rem] md:text-[#F4511E]">{contact.name}</h4>
          
         
            <p className="md:text-[1.6rem] md:font-semibold md:tracking-wide md:py-3 md:text-[#F4511E]">{contact.jobTitle}</p>
         
          <div className="md:flex md:items-center">
            <HiOutlineMail className="md:w-8 md:h-8 md:text-[#F4511E]" />
            {/* <a href={`mailto:${recipient}?subject=Property Enquiries`}></a> */}
             <a href={`mailto:undiefidelis@gmail.com?subject=Property Enquiries`} className="md:text-[1.5rem] md:pl-4 md:underline md:underline-offset-4">{contact.email}</a> 

          </div>


          <div className=" md:flex md:items-center">
            <BsTelephoneOutbound className="md:w-8 md:h-8 md:text-[#F4511E]" />
            <a href="tel:+1-123-456-7890" className="md:text-[1.5rem] md:pl-4">{contact.phone}</a>
            {/* <a href="tel:+1-123-456-7890">Call Us</a> */}
          </div>
        </div>
      <div className="md:ml-auto">
        <ul className="list-none md:flex-col md:space-y-6">
          <li>
            <a
              href={`https://facebook.com/${contact.name}`}
              className="md:text-[#F4511E] md:hover:text-[#d99986]"
            >
              <FaFacebook className="md:w-5 md:h-5"/>
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/${contact.name}`}
              className=" md:text-[#F4511E] md:hover:text-[#d99986]"
            >
              <FaTwitter className="md:w-5 md:h-5" />
            </a>
          </li>
          <li>
            <a
              href={`https://linkedin.com/${contact.name}`}
              className="md:text-[#F4511E] md:hover:text-[#d99986]"
            >
              <FaLinkedin className="md:w-5 md:h-5" />
            </a>
          </li>
          <li>
            <a
              href={`https://instagram.com/${contact.name}`}
              className="md:text-[#F4511E] md:hover:text-[#d99986]"
            >
              <FaInstagram className="md:w-5 md:h-5" />
            </a>
          </li>
          <li>
            <a
              href={`https://google.com/${contact.name}`}
              className="md:text-[#F4511E] md:hover:text-[#d99986]"
            >
              <FaGoogle className="md:w-5 md:h-5" />
            </a>
          </li>
        </ul>
      </div>
      </div>  
  ))
}
    </div>
  );
};

export default ContactsHolder;
