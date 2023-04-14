import img1 from "../../images/bethany.jpg";
import img2 from "../../images/esme.jpg";
import img3 from "../../images/logan.jpg";
import img4 from "../../images/pasha.jpg";

const INITIAL_STATE = {
  comments: [
    {
      id: 1,
      note: "Buyers decide in the first eight seconds of seeing a home if they’re interested in buying it. Get out of your car, walk in their shoes and see what they see within the first eight seconds.",
      name: "Bethany Maisie",
      post: "Property Owner",
      thumbnail: img1,
    },
    {
      id: 2,
      note: "A real estate agent has two property listings. Now add 11 more. What does the agent have now? Happiness. That agent has happiness.",
      name: "Esme Kayden",
      post: "Lease Administrator",
      thumbnail: img2,
    },
    {
      id: 3,
      note: "In any market, in any country, there are developers who make money. So I say all of this doom and gloom, but there will always be people who make money, because people always want homes.",
      name: "Darragh Logan",
      post: "Mortgage Processor",
      thumbnail: img3,
    },
    {
      id: 4,
      note: "Typically, the research tells us, that a high quality real estate agent that really knows what they are doing will add more to the equation than they cost. Because people make mistakes when selling their own home the mistakes are costly…",
      name: "Aaron Pasha",
      post: "Escrow Officer",
      thumbnail: img4,
    },
  ],
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default commentsReducer;
