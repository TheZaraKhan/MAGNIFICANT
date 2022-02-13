import React from "react";
import { Link } from "react-router-dom";
// import { projects } from "../data";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function About() {
  return (
    <section id="about" className="  my-32">
      <h1 className="text-4xl  text-gray-700 font-medium  text-center font-Canela tracking-widest ">
        About Us
      </h1>
      <div className="lg:w-3/4 sm:w-full w-5/6 mx-auto gap-16 px-5 md:mt-24 mt-10 flex flex-wrap items-center">
        <div className="md:flex-1 flex-initial">
          <h1 className="text-4xl  text-gray-700 font-medium  font-waterfall tracking-wider">
            Our Philosophy
          </h1>
          <p className="text-gray-600 font-light tracking-wider mt-4 mb-3">
            Hand-crafted by experienced craftsmen, Our bags collection is
            designed to be classic and timeless, without any sacrifice on style
            or functionality. All of our totes are made of natural, high-quality
            leather and durable brass hardware. The minimalist stitch details
            highlight the beauty of the leather. Our rigorous manufacturing
            quality control standards are applied to every step to improve
            confidence in our products. Virsa's leather bags are suitable for
            any type of occasion, from work to leisure. Our bags serve you as a
            faithful and trusted lifelong companion. And we hope to give our
            customers the best user experience possible.
          </p>
          <Link
            to="/about"
            className="   text-gray-600 font-bold tracking-wider u-line hover:text-gray-700 relative  transition ease-in-out duration-500"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="md:flex-1 flex-initial">
          <img src="./images/site/office.png" alt="" />
        </div>
      </div>
    </section>
  );
}
