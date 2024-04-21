import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            ৩০ জন গ্রাহক বাইক পাবেন সম্পুর্ন বিনামূল্য
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            ওয়াল্টন পণ্য ক্রয় করলে, আপনি পেয়ে যেতে পারেন ২ লক্ষ টাকার বাইক জিতার
            সুযোগ
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
