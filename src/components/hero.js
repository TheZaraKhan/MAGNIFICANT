import React from "react";

// import Slide from "react-reveal/Slide";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <section className=" ">
      <div className="min-h-screen py-32 sm:py-16 flex items-center  relative  bg-gradient-to-b from-beige via-beige  to-white">
        <div className="flex items-center w-full flex-wrap">
          <div className="md:flex-1 flex-initial w-full">
            <div className=" md:pl-24 sm:mt-44 lg:mt-0  relative sm:mx-0 mx-3 z-10 text-center md:text-left ">
              <p className=" sm:text-xl mb-2  text-gray-700 font-light   sm:tracking-wide ">
                Women's Handmade Leather Bags
              </p>
              <h1
                className="  lg:text-6xl md:text-5xl text-4xl    text-gray-700 font-medium  tracking-wide my-4  font-Canela leading-loose "
                style={{ "line-height": "1.2" }}
              >
                Exquisite Leather Collection <br /> marked by{" "}
                <br className="md:hidden block" /> flawless craftsmanship
              </h1>
              <a className=" mt-4 " href="#shop">
                <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                  View Collection
                </button>
              </a>
            </div>
          </div>
          <div className="md:flex-1 flex-initial">
            <div className="w-full ">
              <img
                src="./images/site/header2.png"
                class=" mx-auto md:pr-6"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
