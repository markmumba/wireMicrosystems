import image1 from '../assets/images/ildefonso-polo-DX9X0g0Cg88-unsplash.jpg'
import image2 from '../assets/images/compare-fibre-8xnaQKWjDrM-unsplash.jpg'
import image3 from '../assets/images/mika-baumeister-gwWkv06WYFY-unsplash.jpg'

function Services(props) {


  return (
    <div className="items-center bg-white flex flex-col px-16 py-2 max-md:px-5">
      <header className="header text-black text-center text-4xl font-bold leading-10 max-w-screen-md mt-16 max-md:max-w-full max-md:mt-10">
        Browse our wide selection of high-quality Ethernet cables, routers, switches, hubs, and fiber cables.
      </header>
      <div className="justify-center self-stretch mt-20 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:mt-10">
              <img loading="lazy" srcSet={image1}  className="aspect-[1.69] object-contain object-center w-full self-stretch overflow-hidden" />
              <div className="self-stretch text-black text-center text-2xl font-bold leading-9 mt-8">
                Discover the latest advancements in networking technology with our top-of-the-line products.
              </div>
              <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                Our products are designed to deliver fast and reliable network connections.
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:mt-10">
              <img loading="lazy" srcSet={image2} className="aspect-[1.69] object-contain object-center w-full self-stretch overflow-hidden" />
              <div className="self-stretch text-black text-center text-2xl font-bold leading-9 mt-8">
                Enhance your network performance with our cutting-edge routers and switches.
              </div>
              <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                Experience seamless connectivity and superior network management.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:mt-10">
              <img loading="lazy" srcSet={image3} className="aspect-[1.69] object-contain object-center w-full self-stretch overflow-hidden" />
              <div className="self-stretch text-black text-center text-2xl font-bold leading-9 mt-8">
                Get reliable and high-speed data transmission with our premium Ethernet cables.
              </div>
              <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                Ensure smooth and efficient network performance with our top-quality cables.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Services ;