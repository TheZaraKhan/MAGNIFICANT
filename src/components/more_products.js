import React from "react";

// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function MoreProducts() {
  return (
    <div className=" ">
      <h1 className="text-4xl Canela text-gray-700 font-medium text-center tracking-wide ">
        SHOP MORE
      </h1>

      <div className="grid grid-cols-3 gap-24 mt-16">
        <div className=" ">
          <a href="">
            <div className=" switch transition duration-500 ease-in-out">
              <div className="my-box div_a transition duration-500 ease-in-out ">
                <img
                  src="./images/products/V_001/V_001_c.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
              <div className="div_hover my-box w-full h-full transition duration-500 ease-in-out">
                <img
                  src="./images/products/V_001/V_001_b.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
            </div>
          </a>

          <div className="flex my-6 ">
            <div className="flex-grow">
              <p className="text-md font-medium tracking-wide text-gray-700">
                Pebbled Leather Tote
              </p>
              <p className="  ">
                <span className=" font-medium text-gray-700 ordinal">
                  £79.<span className="text-xs">99</span>
                </span>
                <span className="ml-4 font-medium text-gray-400 line-through">
                  £99.<span className="text-xs">99</span>
                </span>
              </p>
            </div>
            <div className="flex-none">
              <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className=" ">
          <a href="">
            <div className=" switch transition duration-500 ease-in-out">
              <div className="my-box div_a transition duration-500 ease-in-out ">
                <img
                  src="./images/products/V_001/V_001_c.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
              <div className="div_hover my-box w-full h-full transition duration-500 ease-in-out">
                <img
                  src="./images/products/V_001/V_001_b.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
            </div>
          </a>

          <div className="flex my-6 ">
            <div className="flex-grow">
              <p className="text-md font-medium tracking-wide text-gray-700">
                Pebbled Leather Tote
              </p>
              <p className="  ">
                <span className=" font-medium text-gray-700 ordinal">
                  £79.<span className="text-xs">99</span>
                </span>
                <span className="ml-4 font-medium text-gray-400 line-through">
                  £99.<span className="text-xs">99</span>
                </span>
              </p>
            </div>
            <div className="flex-none">
              <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className=" ">
          <a href="">
            <div className=" switch transition duration-500 ease-in-out">
              <div className="my-box div_a transition duration-500 ease-in-out ">
                <img
                  src="./images/products/V_001/V_001_c.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
              <div className="div_hover my-box w-full h-full transition duration-500 ease-in-out">
                <img
                  src="./images/products/V_001/V_001_b.jpeg"
                  className="w-full h-full absolute object-cover"
                  alt=""
                />
              </div>
            </div>
          </a>

          <div className="flex my-6 ">
            <div className="flex-grow">
              <p className="text-md font-medium tracking-wide text-gray-700">
                Pebbled Leather Tote
              </p>
              <p className="  ">
                <span className=" font-medium text-gray-700 ordinal">
                  £79.<span className="text-xs">99</span>
                </span>
                <span className="ml-4 font-medium text-gray-400 line-through">
                  £99.<span className="text-xs">99</span>
                </span>
              </p>
            </div>
            <div className="flex-none">
              <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
