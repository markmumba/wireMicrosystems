import router from "../assets/images/router.png";
import switche from "../assets/images/switch.png";
import rack from "../assets/images/rack.png";
import ethernet from "../assets/images/ethernet.png";
import fiber from "../assets/images/fiber.png";
import modem from "../assets/images/modem.png";

function Products() {
  return (
    <div className="justify-between items-center bg-white flex flex-col px-16 py-12 rounded-3xl max-md:px-5">
      <header className="text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Networking Equipment
      </header>
      <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
        Browse our successful networking equipment installations
      </div>
      <form className="self-stretch mt-36 py-5 md:px-40  max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet={router} className="w-[400px] h-[400px]  rounded-lg object-contain bg-gray-300 p-10" alt="Networking Equipment 1" />
            <p className="text-black  text-2xl font-bold text-center">Router</p>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet={switche} className="w-[400px] h-[400px]  rounded-lg object-contain bg-gray-300 p-10 " alt="Networking Equipment 2" />
            <p className="text-black  text-2xl font-bold text-center">Switch</p>
          </div>
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet={rack} className=" w-[400px] h-[400px]  rounded-lg object-contain bg-gray-300 p-10" alt="Networking Equipment 3" />
            <p className="text-black  text-2xl font-bold text-center">Rack</p>
          </div>
        </div>
      </form>
      <form className="self-stretch mt-8 mb-10 md:px-40 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet={ethernet} className=" md:w-[400px] md:h-[400px]  rounded-lg object-contain bg-gray-300 p-10"
              alt="Networking Equipment 4"
            />
            <p className="text-black  text-2xl font-bold text-center">Ethernet</p>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet={fiber} className=" md:w-[400px] md:h-[400px]  rounded-lg object-contain bg-gray-300 p-10" alt="Networking Equipment 5" />
            <p className="text-black  text-2xl font-bold text-center">Fiber</p>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet={modem} className=" md:w-[400px] md:h-[400px]  rounded-lg object-contain bg-gray-300 p-10" alt="Networking Equipment 6" />
            <p className="text-black  text-2xl font-bold text-center">Modem</p>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Products;
