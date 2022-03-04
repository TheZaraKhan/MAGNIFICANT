import React from "react";

// import Slide from "react-reveal/Slide";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <section className=" ">
      <div className="sm:h-screen py-32 sm:py-16 flex items-center relative bg-head bg-cover bg-top bg-no-repeat">
        <div className="absolute   bg-black h-full w-full top-0 opacity-20"></div>
        <div className=" sm:ml-32 sm:mx-0 mx-3 z-10 text-center md:text-left ">
          <p className=" sm:text-xl mb-2  text-gray-100 font-light sm:uppercase">
            Women's &nbsp;handmade &nbsp;Leather &nbsp;Bags
          </p>
          <h1 className="  md:text-6xl text-4xl  break-normal text-gray-100 font-medium  tracking-wide my-4  font-Canela leading-relaxed ">
            Exquisite Leather Collection <br /> marked by{" "}
            <br className="md:hidden block" /> flawless craftsmanship
          </h1>
          <a className=" mt-4 " href="#shop">
            <button className="px-6 relative   py-2  border-2  bg-gray-100  text-gray-700   transform  hover:-translate-y-1 text-center transition ease-in-out duration-500">
              View Collection
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
