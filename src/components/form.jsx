import React from "react";
import Button from "./button"

const Form = () => {
  return (
    <div className="font-Inter md:my-16">
      <h2 className="capitalize md:text-[#252B42] md:text-[1.6rem] md:text-center md:font-bold md:mb-8">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h2>

      <div className=" md:flex md:justify-center md:items-center">
        <form className="md:p-8 md:w-[60rem] md:h-auto md:border md:rounded-2xl">
          <h3 className="capitalize md:mb-8 md:text-[#F4511E] md:text-[1.6rem] md:text-center md:font-bold">
            add a new property
          </h3>
          <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-12 md:gap-x-4">
            <div>
              <label className="block">
                <span className="uppercase font-bold md:text-[#252B42]">
                  Name
                </span>
                <input
                  type="text"
                  className="md:p-4 md:h-12 md:w-72 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none"
                  placeholder="Enter Name"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="uppercase font-bold md:text-[#252B42]">
                  Address
                </span>
                <input
                  type="text"
                  className="md:p-4 md:h-12 md:w-72 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none"
                  placeholder="Enter Address"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="uppercase font-bold md:text-[#252B42]">
                  Price($USD)
                </span>
                <input
                  type="text"
                  className="md:p-4 md:h-12 md:w-72 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none"
                  placeholder="Enter Price"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="uppercase font-bold md:text-[#252B42]">
                  Apartment Type
                </span>
                <select className="block md:h-12 md:w-72 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none">
                  <option></option>
                  <option>Private Room</option>
                  <option>Condo</option>
                  <option>Loft</option>
                  <option>Alcove Studio</option>
                  <option>Low Rise</option>
                  <option>Mid Rise</option>
                  <option>High Rise</option>
                  <option>Walk Up</option>
                  <option>Cluster</option>
                  <option>Studio</option>
                  <option>Others</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block">
                <span className="uppercase font-bold md:text-[#252B42]">
                  Number of rooms
                </span>
                <select className="md:h-12 md:w-72 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </label>
            </div>

            <div>
              <span className="block uppercase font-bold md:text-[#252B42]">
                Disabilities
              </span>
              {/*Add block to label and see what happens*/}
              <div className="md:flex space-x-24">
                <label className="md:flex md:flex-col md:items-center">
                  <span className="font-bold md:text-[#252B42] md:pt-1">
                    Yes
                  </span>
                  <input type="radio" value="yes" name="disability" />
                </label>
                <label className="md:flex md:flex-col md:items-center">
                  <span className="font-bold md:text-[#252B42] md:pt-1">
                    No
                  </span>
                  <input type="radio" value="no" name="disability" />
                </label>
              </div>
            </div>
          </div>

          <div className="md:pt-10">
            <label>
              <span className="uppercase font-bold md:text-[#252B42]">
                Description
              </span>
              <textarea
                name=""
                rows="5"
                className="block resize-none md:w-full md:px-4 md:py-2 md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-[#E6E6E6] md:focus:border-[#E6E6E6] md:placeholder:text-xs md:focus:outline-none"
                placeholder="Enter Apartment Description"
              />
            </label>
          </div>

          <div className="md:pt-10">
            <label className="block">
              <span className="uppercase font-bold md:text-[#252B42]">
                Upload files
              </span>
              <input
                type="file"
                className="md:h-24 md:w-full md:text-[#252B42] md:rounded-md md:bg-[#F9F9F9] md:border md:border-dashed md:border-[#F4511E] md:focus:border-[#F4511E] md:placeholder:text-xs md:focus:outline-none"
                placeholder="Drag your images here, or browse  Supported:  JPG, JPEG, PNG"
              />
            </label>
          </div>
          <div className="md:flex md:justify-center md:mt-8">

          <Button className="secondary">Add New Property</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
