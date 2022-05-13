import React from "react";

// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

// import { Products } from "./products";

export default function AboutUs() {
  return (
    <section id="" className=" md:mt-44 mt-32 mb-32">
      <div className="lg:w-2/4 md:w-3/4  w-5/6 sm:px-0 mt-20 px-2 mx-auto">
        <img src="./images/site/about1.jpg" className="w-full " alt="" />
        <h1 className="text-3xl font-Canela  mt-20 text-gray-700   text-center tracking-wide  ">
          Designed with Simplicity yet Elegance
        </h1>
        <p className="text-gray-600 text-sm font-light tracking-wider mt-10 ">
          Our goal is to provide you with a carefree user experience and give
          you a bag you can use every day for any occasion. This is why we put
          so much care into every inch and stitch of the manufacturing process.
          We believe that keeping the lines clean and simple results in a
          product that is elegant, classy, and sophisticated. Belasika's leather
          goods are suitable for any type of occasion, from work to leisure. Our
          bags serve you as a faithful and trusted lifelong companion.
        </p>
      </div>

      <div className="lg:w-2/4 md:w-3/4  w-5/6 sm:px-0 mt-20 px-2 mx-auto">
        <img src="./images/site/about2.jpg" className="w-full " alt="" />
        <h1 className="text-3xl font-Canela   mt-20 text-gray-700   text-center tracking-wide ">
          Creating Timeless Peices
        </h1>

        <p className="text-gray-600 font-light tracking-wider mt-10 ">
          Our collections of bags are designed to be classic and timeless,
          without any sacrifice on style nor functionality. appearance of the
          bags is kept as simple and uncomplicated as possible, both because the
          company focuses on what users need and because it believes that the
          fine grain of the leather itself should take center stage. The result
          is a minimalist aesthetic style. <br />
          A natural, soft, and aromatic leather that acquires a unique character
          all its own with use. An attribute that goes beyond pricing is
          quality. Customers can expect to use these bags for a very long time.
          <br />
        </p>
      </div>
      <div className="w-full mt-20 "></div>
      <div className="lg:w-2/4 md:w-3/4  w-5/6  px-2 mx-auto">
        {" "}
        <img src="./images/site/about3.jpeg" className="w-full " alt="" />
        <h1 className="text-3xl font-Canela mt-20 text-gray-700   text-center tracking-wide ">
          Our Leather{" "}
          <p className="text-2xl   mt-5 text-gray-700   text-center tracking-wide font-light">
            Full Grain - Vegetable tanned
          </p>
        </h1>
        <p className="text-gray-600 font-light tracking-wider mt-10 ">
          Consistent quality is our key commitment. We only use 'full grain'
          leather which is considered the finest quality of the cow hide in the
          market. Our goods are made from the very top layer of the grain, where
          the fibers are the strongest. This makes the hide very durable while
          still maintaining its natural features.
          <br /> Vegetable-tanned leather absorbs the traces of our living, it
          matures, gets softer and darker depending on your lifestyle. ike with
          people, signs of time give a bag its unique character, each wrinkle
          and each scar tells you a story!
        </p>
        {/* <div className="mt-8">
          <button className="px-6 relative text-gray-700 tracking-wide  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
            Visit Our Amazon Store
          </button>
        </div> */}
      </div>
    </section>
  );
}
