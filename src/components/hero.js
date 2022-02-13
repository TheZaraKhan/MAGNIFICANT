import React from "react";

// import Slide from "react-reveal/Slide";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <section className=" ">
      <div className="h-screen flex items-center relative bg-head bg-cover bg-top bg-no-repeat">
        <div className="absolute   bg-black h-screen w-full top-0 opacity-20"></div>
        <div className=" ml-32 z-10 ">
          <p className=" text-xl text-gray-100 font-light uppercase">
            Women's &nbsp;handmade &nbsp;Leather &nbsp;Bags
          </p>
          <h1 className=" text-6xl break-normal text-gray-100 font-medium  my-4  font-Canela leading-relaxed ">
            Exquisite Leather Collection <br /> marked by flawless craftsmanship
          </h1>
          <a className=" " href="#shop">
            <button className="px-6 relative text-gray-100  py-2 border-gray-100 border-2 hover:bg-gray-100 hover:text-gray-700 text-center transition ease-in-out duration-500">
              View Collection
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
