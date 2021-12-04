import React from "react";
// import { projects } from "../data";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function Amazon() {
  return (
    <section id="amazon">
      <div className="w-full my-20">
        <div className=" bg-nude bg-opacity-80 bg-contain bg-right bg-no-repeat ">
          <div className="flex">
            <div className="flex-1 flex items-center pl-32 ">
              <div className="">
                <h2 className="text-4xl tracking-widest text-gray-700">
                  Amazon Store
                </h2>
                <h3 className="my-6 tracking-wide font-light text-gray-600">
                  For Secure Purchase, Fast Delivery, and Easy Returns. Buy our
                  Leather Totes from our Amazon store. Hassel Free Shopping.
                </h3>
                <div className="">
                  <button className="px-6 relative text-gray-700 tracking-wide  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Visit Our Amazon Store
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src="./images/site/store-link.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
