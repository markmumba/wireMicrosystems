
function CustomizedSolutions(props) {
  return (
    <div className="bg-white flex flex-col pl-4 pr-4 md:pl-16 md:pr-20 py-12 items-start max-md:px-5">
      <header className="text-black text-5xl font-bold leading-[58px] w-[100%] md:w-[768px] max-w-full mt-16 md:text-4xl md:leading-[54px] md:mt-10">
        Customized Solutions for Your Business
      </header>
      <p className="text-black text-base md:text-lg leading-7 mt-6 md:max-w-full">
        Contact us today to discuss your networking needs and receive personalized package solutions.
      </p>
      <div className="items-stretch flex flex-col md:flex-row gap-4 mt-6 mb-10 pt-4">
        <button
          className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black md:max-md:px-5"
          aria-label="Contact"
        >
          Contact
        </button>
        <a
          href="#"
          className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black md:max-md:px-5"
          aria-label="Learn More"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default CustomizedSolutions;
