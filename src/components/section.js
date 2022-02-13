import React from "react";
// import { projects } from "../data";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function Section() {
  return (
    <section className="my-32 md:my-10">
      <div className="  flex w-4/5 flex-wrap items-center mx-auto">
        <div className="flex-auto">
          <h1 className="text-4xl  text-gray-700 font-medium  max-w-xs md:max-w-sm font-Canela tracking-wide ">
            Bringing Fashion <br /> back to it's origins
          </h1>
          <p className="text-gray-600 font-light tracking-wider max-w-xs md:max-w-sm mt-4 mb-3">
            Free from hypes and unnecessary markups, focused on quality and
            design with comfort and usability.
          </p>
        </div>
        <div className=" flex-grow ">
          <img src="./images/site/section.png" className=" " alt="" />
        </div>
      </div>
    </section>
  );
}