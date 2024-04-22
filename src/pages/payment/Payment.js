import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>
          সার্ভিস উন্নয়ন এর জন্য এই মুহূর্তে আমাদের পেমেন্ট গেটওয়ে বন্ধ রয়েছে,
          সাময়িক অসুবিধার জন্য দুখিত.
        </p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;