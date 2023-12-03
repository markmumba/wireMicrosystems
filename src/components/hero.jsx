import React from "react";
import heroImage from "../assets/images/compare-fibre-hXVVNB6Qctg-unsplash.jpg";

function NetworkingComponent(props) {
  return (
    <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[900px] px-20 py-12 max-md:px-5">
      <img
        loading="lazy"
        srcSet={heroImage}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
        <header className="relative text-white text-center text-6xl font-bold leading-[67px] max-w-screen-md mt-56 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Discover the Latest Networking Equipment & Special Offers
        </header>
        <div className="relative text-white text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          Upgrade your network with our high-quality equipment. Take advantage
          of our special package deals.
        </div>
        <form className="relative items-stretch flex gap-4 mt-6 mb-40 pt-4 max-md:mb-10">
          <button
            className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5"
            aria-label="Shop"
            role="button"
          >
            Shop
          </button>
          <button
            className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-white max-md:px-5"
            aria-label="Learn More"
            role="button"
          >
            Learn More
          </button>
        </form>
      
    </div>
  );
}

export default NetworkingComponent;
