import React from "react";

// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function Amazon() {
  return (
    <section id="amazon">
      <div className="w-full my-20 ">
        <div className=" bg-neutral2  bg-opacity-80 bg-contain bg-right bg-no-repeat ">
          <div className="flex  flex-wrap py-10">
            <div className="md:flex-1 flex items-center md:order-1 order-2">
              <img
                src="./images/site/amazon2.png"
                alt=""
                className=" md:w-5/6 float-right mx-auto  w-full "
              />
            </div>
            <div className="flex-1 flex items-center py-16 order-1 md:order-2">
              <div className="md:w-2/4 md:ml-20 mx-auto w-5/6 ">
                <h2 className="text-4xl tracking-wide  font-Canela  text-gray-700">
                  Amazon Store
                </h2>
                <h3 className="mt-4 tracking-wide font-light text-gray-600">
                  For Secure Purchase, Fast Delivery, and Easy Returns. Buy our
                  Leather Totes from our Amazon store.
                  <br />
                  <span className="text-4xl  text-gray-700 font-medium  font-waterfall  ">
                    {" "}
                    Hassel Free Shopping.
                  </span>
                </h3>
                <div className="mt-10">
                  <button className="px-6 relative text-gray-700 tracking-wide  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Visit Our Amazon Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
