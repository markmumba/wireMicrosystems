import server from "../assets/images/network-design.jpg";

function About(props) {
  return (
    <form className="items-stretch bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
      <header className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col md:px-20 max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12  max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-black text-center text-base font-semibold leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                Customizable
              </h2>
              <h1 className="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Tailored networking solutions for your business
              </h1>
              <p className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                At our company, we understand that every business has unique
                networking needs. That's why we offer customizable networking
                packages designed to meet your specific requirements. Whether
                you need Ethernet cables, routers, switches, hubs, or fiber
                cables, we have the expertise to create a solution that fits
                your budget and maximizes your network's performance.
              </p>
              <div className="items-stretch flex justify-between gap-5 mt-6 pt-4 self-start">
                <a
                  href="#"
                  className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5"
                >
                  Learn More
                </a>
                <div className="justify-center items-stretch flex gap-2  self-start">
                  <button className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 py-5 max-md:w-full  max-md:ml-0">
            <img loading="lazy" srcSet={server} alt="Networking Solutions" />
          </div>
        </div>
      </header>
    </form>
  );
}

export default About;
