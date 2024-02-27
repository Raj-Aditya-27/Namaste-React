/**
//Importing react and react dom using import instead of CDN
import React from "react";
import ReactDOM from "react-dom";

// createElement takes 3 argument(tag name,attributes like id,[child])
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
 */
/**
 * Create nested div
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello,I'm H1 tag.</h1>
 *          <h2>Hello,I'm H2 tag.</h2>
 *      </div>
 * </div>
 */

/**
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello,I'm H1 tag."),
    React.createElement("h2", {}, "Hello,I'm H2 tag."),
  ])
);

root.render(parent);
*/

//Video No. - 03
// import React from "react";
// import ReactDOM from "react-dom/client";

//React.createElement => JS-object  =>HTMLelement(render)
//This is a core way of react to create things but it is not easy as compare to normal html,so let's use JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//JSX is a html-like syntax not a html and JSX , react are two different things.
//JSX(transpiled before it reaches to JS-engine)-Parcel(prime minister)-babel(home minister)(convert jsx into reactElement)
//JSX => Babel transpile it to  React.createElement => JS-object  =>HTMLelement(render)
// const jsxHeading = <h1 id="heading">Namaste React from JSX 🚀</h1>;
// root.render(jsxHeading);

//React component->eg. button,div,etc;
//functional based component: New
//class based component: old

//functional component->A javascript funtion which returns jsx or react Element
// const HeadingComponent = () => {
//   return <h1>Namaste React functional component 1st way</h1>;
// };

// const HeadingComponent2 = () => <h1>Hello 2nd way</h1>;

//() used for multiple lines jsx
// const HeadingComponent3 = () => (
//   <h1>Namaste React functional component 3rd way</h1>
// );
//react component should always be pass like this <react component/>
// root.render(<HeadingComponent3/>);

//component composition: Using nested components
// () used for multiple lines jsx
// const HeadingComponent4 = () => (
//   <div id="container">
//     <HeadingComponent />
//     <HeadingComponent2></HeadingComponent2>
//     {/* {any javascript code can be used between these two curly braces} */}
//     {1000 + 5}
//     {HeadingComponent3()}
//     <h1>Composition Component</h1>
//   </div>
// );

// root.render(<HeadingComponent4 />);

// Food App
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img
          alt="swiggy"
          src="https://logosmarken.com/wp-content/uploads/2020/11/Swiggy-Zeichen.png"
        ></img>
      </div>
      <div className="NavLinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "3022",
      name: "Aminia Restaurant",
      cloudinaryImageId: "ub35uaf2iferroprejgy",
      locality: "Golpark",
      areaName: "Golpark",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Mughlai", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.5,
      parentId: "47",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-28 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/aminia-restaurant-golpark-kolkata-3022",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "24041",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Kasba",
      areaName: "Kasba",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-kasba-kolkata-24041",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "39309",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Kasba",
      areaName: "Kasba RB Connector",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-28 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-kasba-kasba-rb-connector-kolkata-39309",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3638",
      name: "Gupta Brothers -Ballygunge",
      cloudinaryImageId: "s6osrxqumlqssg6wvu65",
      locality: "Elgin Road",
      areaName: "Ballygunge",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Desserts",
        "South Indian",
        "Indian",
        "Chaat",
        "Mexican",
      ],
      avgRating: 4.4,
      parentId: "358878",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gupta-brothers-ballygunge-elgin-road-ballygunge-kolkata-3638",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12951",
      name: "Zeeshan Deshapriya",
      cloudinaryImageId: "c4ebd411f8427e8b095e2fd6af302f09",
      locality: "Near Deshapriya More",
      areaName: "Kalighat",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Mughlai", "Indian", "Tandoor"],
      avgRating: 4.5,
      parentId: "229811",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/zeeshan-deshapriya-near-deshapriya-more-kalighat-kolkata-12951",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355772",
      name: "Grameen Kulfi",
      cloudinaryImageId: "kaj9fga8axqaehim5nez",
      locality: "Poddar Nagar",
      areaName: "Jadavpur",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-poddar-nagar-jadavpur-kolkata-355772",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "216675",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Kasba",
      areaName: "East Kolkata Township",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-kasba-east-kolkata-township-kolkata-216675",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3018",
      name: "Tero Parbon",
      cloudinaryImageId: "625513ab52bee051fca05e6c15b5472f",
      locality: "Golpark",
      areaName: "Golpark",
      costForTwo: "₹400 for two",
      cuisines: ["Bengali", "Desserts"],
      avgRating: 4.4,
      parentId: "203238",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tero-parbon-golpark-kolkata-3018",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69297",
      name: "Machhli Baba Fries",
      cloudinaryImageId: "dvaa3cfy1v7tkdmesb7s",
      locality: "Block Eg",
      areaName: "Rajdanga Main Road",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bengali",
        "Street Food",
        "Rolls & Wraps",
        "Kebabs",
        "Fast Food",
      ],
      avgRating: 4.5,
      parentId: "4413",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-28 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/machhli-baba-fries-block-eg-rajdanga-main-road-kolkata-69297",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "29424",
      name: "Momo I am",
      cloudinaryImageId: "vuygl4mrkquhg0ma5dqv",
      areaName: "Golpark",
      costForTwo: "₹350 for two",
      cuisines: ["Asian", "Chinese", "Tibetan"],
      avgRating: 4.6,
      parentId: "2055",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-i-am-golpark-kolkata-29424",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "182029",
      name: "The Yellow Straw",
      cloudinaryImageId: "8f52ceb30e31faed0c2d6ee81b8c639d",
      locality: "Acropolis",
      areaName: "Acropolis Mall",
      costForTwo: "₹250 for two",
      cuisines: [
        "Juices",
        "Beverages",
        "Salads",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "South Indian",
        "Ice Cream",
      ],
      avgRating: 4.5,
      parentId: "10442",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-yellow-straw-acropolis-acropolis-mall-kolkata-182029",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18117",
      name: "Hindusthan Sweets",
      cloudinaryImageId: "criuo3dsgvodsed1vxl2",
      locality: "Near 8B Bus stand",
      areaName: "Jadavpur",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Sweets"],
      avgRating: 4.6,
      veg: true,
      parentId: "3371",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 20:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hindusthan-sweets-near-8b-bus-stand-jadavpur-kolkata-18117",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "317711",
      name: "Kabuliwala",
      cloudinaryImageId: "abdgaqn0jkzfatbde09w",
      locality: "Santoshpur",
      areaName: "Selimpur",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "Kebabs", "Indian", "Desserts"],
      avgRating: 4.2,
      parentId: "5547",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 23:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kabuliwala-santoshpur-selimpur-kolkata-317711",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "120155",
      name: "Cakes",
      cloudinaryImageId: "xo4xq9ufqmplnusb9nqs",
      locality: "RAJDANGA MAIN ROAD",
      areaName: "RAJDANGA MAIN ROAD",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.6,
      parentId: "4861",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakes-rajdanga-main-road-kolkata-120155",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "356287",
      name: "Bijoli Grill",
      cloudinaryImageId: "e9wwexdqirzkxgqga3zn",
      locality: "Gariahat",
      areaName: "Kasba",
      costForTwo: "₹300 for two",
      cuisines: ["Bengali", "Snacks"],
      avgRating: 4.6,
      parentId: "2068",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-27 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bijoli-grill-gariahat-kasba-kolkata-356287",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resName } = props;
  return (
    <div className="restaurant-card">
      <img
        alt="Restaurant"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resName.info.cloudinaryImageId
        }
      ></img>
      <h3>{resName.info.name}</h3>
      <h3>{resName.info.cuisines.join(",")}</h3>
      <h3>{resName.info.avgRating}</h3>
      <h3>{resName.info.sla.deliveryTime} minutes</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resObj.map((restaurant) => (
          // key is used to make a card unique and shouldn't re-render
          <RestaurantCard key={restaurant.info.id} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
