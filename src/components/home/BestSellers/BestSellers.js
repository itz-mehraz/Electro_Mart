import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="15W Backup_Light "
          price="600 Taka"
          color="Blank and White"
          badge={true}
          des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Walton Fan"
          price="3000 Taka"
          color="Gray"
          badge={false}
          des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Samsung A70 Tab"
          price="35000 Taka"
          color="Mixed"
          badge={true}
          des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Walton v52"
          price="2200 Taka"
          color="Black"
          badge={false}
          des="In Bangladesh, you can get original Walton WSI-KRYSTALINE-24H PLASMA 2 Ton Twinfold Inverter AC From Star Tech. We have a large collection of latest Walton AC to purchase.."
        />
      </div>
    </div>
  );
};

export default BestSellers;
