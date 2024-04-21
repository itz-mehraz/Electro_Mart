import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="ওয়ান ওয়াশ"
            price="150 Taka"
            color="Black"
            badge={true}
            des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Minister Catle"
            price="1500 Taka"
            color="Black"
            badge={true}
            des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Walton Microwave-Oven"
            price="8000 Taka"
            color="Mixed"
            badge={true}
            des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Minister Freeze"
            price="30000 Taka"
            color="Mixed"
            badge={false}
            des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
