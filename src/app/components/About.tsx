import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="w-11/12 sm:w-2/6 text-center mb-5">
        <p className="text-sm py-3 text-customGreen">About Us</p>
        <h3 className="text-xl sm:text-2xl font-semibold">
          We provide great services for our customers based on needs
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-32 text-gray-800 font-light text-sm my-5">
        <div className="w-full sm:w-1/4">
          <p className="my-3 leading-6">
            EthicalMine leverages blockchain technology to bring unprecedented
            transparency and accountability to the mining industry. Our platform
            tracks and verifies every step of the supply chain, ensuring ethical
            practices from extraction to end product.
          </p>
          <p>
            We aim to bring integrity and trust back to the mining sector by
            providing a platform that tracks and verifies every step of the
            supply chain.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <Image src="/Laptop.svg" alt="laptop" width={300} height={400} />
        </div>
      </div>
      <div className="flex  flex-col-reverse sm:flex-row-reverse justify-center items-center gap-5 sm:gap-32 text-gray-800 font-light text-sm my-5">
        <div className="w-full sm:w-1/4">
          <p className="leading-6">
            By ensuring that all activities are transparent and compliant with
            ethical standards, we empower businesses, regulators, and consumers
            to make informed and responsible choices.
          </p>
          <button className="bg-gradient-tob2 text-gray-500 px-3 py-2 my-5 rounded-md">
            Learn more
          </button>
        </div>
        <div className="w-full sm:w-auto">
          <Image src="/specify event details card.jpg" alt="user" width={300} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
