import React from "react";
// import { projects } from "../data";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

export default function Instagram() {
  return (
    <section id="about" className=" text-center  my-32">
      <h1 className="text-4xl mb-12 text-gray-700 font-bold  text-center  ">
        Follow us on Instagram
      </h1>
      <a
        href="https://www.instagram.com/belasikaofficial/"
        className="text-sm text-gray-600 hover:text-gray-800"
      >
        @belasikaofficial
      </a>
      <div className="  w-5/6 mx-auto gap-16 mt-12 flex flex-wrap items-center">
        <InstagramFeed
          token="IGQVJYWXdKQlQ4UkJnWUo3eE5uRnBTVndlSEJBVlVfeHItbHFtMEZAQNllybUtUSUxYaXQ1VlVmQ2tWcy1WX1hNa1VxdE9ualhBaUhhSXdFTGhaWEVJd2YxZA1NfYUFQWXoxd2xTcG5VcFNhMC1TMmxRbwZDZD"
          counter="6"
        />
      </div>
    </section>
  );
}
