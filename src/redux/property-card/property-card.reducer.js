import image3 from "../../images/unsplash_Eh_It1hg4Hs.png";
import image4 from "../../images/unsplash_2d4lAQAlbDA.png";
import image5 from "../../images/unsplash_T6d96Qrb5MY.png";
import image6 from "../../images/unsplash_KQgrVfR3r74.png";
import image7 from "../../images/unsplash_UV81E0oXXWQ.png";
import image8 from "../../images/unsplash_uDtC-1NLEzU.png";


import image9 from "../../images/istockphoto-478528970-612x612.png";
import image10 from "../../images/istockphoto-875424104-612x612.png";
import image11 from "../../images/istockphoto-1145034668-612x612.png";
import image12 from "../../images/istockphoto-1357529184-612x612.png";
import image13 from "../../images/istockphoto-1365649825-612x612.png";
import image14 from "../../images/istockphoto-1393890856-612x612.png";




const INITIAL_STATE = {
    property: [
        {
            id: 1,
            image: image3,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Private Room",
            price: "$850",
            rooms: "2",
            baths: "1",
        },
        {
            id: 2,
            image: image4,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Condo",
            price: "$1000",
            rooms: "2",
            baths: "1",
        },
        {
            id: 3,
            image: image5,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Private Room",
            price: "$700",
            rooms: "2",
            baths: "1",
        }, {
            id: 4,
            image: image6,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Loft",
            price: "$1500",
            rooms: "2",
            baths: "1",
        }, {
            id: 5,
            image: image7,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Alcove Studio",
            price: "$900",
            rooms: "2",
            baths: "1",
        }, {
            id: 6,
            image: image8,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Private Room",
            price: "$900",
            rooms: "2",
            baths: "1",
        },
        {
            id: 7,
            image: image9,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Condo",
            price: "$1000",
            rooms: "2",
            baths: "1",
        },
        {
            id: 8,
            image: image10,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Cluster",
            price: "$650",
            rooms: "2",
            baths: "1",
        }, {
            id: 9,
            image: image11,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Studio",
            price: "$1200",
            rooms: "2",
            baths: "1",
        }, {
            id: 10,
            image: image12,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Mid Rise",
            price: "$750",
            rooms: "2",
            baths: "1",
        }, {
            id: 11,
            image: image13,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "High Rise",
            price: "$850",
            rooms: "2",
            baths: "1",
        }, {
            id: 12,
            image: image14,
            address: "2578 Folsom street, san francisco, CA, 94110",
            type: "Walk Up",
            price: "$700",
            rooms: "2",
            baths: "1",
        },
]
}

const propertyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default propertyReducer 