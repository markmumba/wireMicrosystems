

function CustomizedSolutions(props) {
  return (
    <div className="bg-white flex flex-col pl-16 pr-20 py-12 items-start max-md:px-5">
      <header className="text-black text-5xl font-bold leading-[58px] w-[768px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Customized Solutions for Your Business
      </header>
      <p className="text-black text-lg leading-7 whitespace-nowrap mt-6 max-md:max-w-full">
        Contact us today to discuss your networking needs and receive personalized package solutions.
      </p>
      <div className="items-stretch flex gap-4 mt-6 mb-10 pt-4">
        <button
          className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5"
          aria-label="Contact"
        >
          Contact
        </button>
        <a
          href="#"
          className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5"
          aria-label="Learn More"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default CustomizedSolutions;