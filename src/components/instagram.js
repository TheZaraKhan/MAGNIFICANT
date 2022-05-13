import React from "react";
// import { projects } from "../data";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

export default function Instagram() {
  return (
    <section id="about" className="  my-32">
      <h1 className="text-4xl  text-gray-700 font-bold  text-center  ">
        Follow us on Instagram
      </h1>
      <div className="  w-5/6 mx-auto gap-16 md:mt-24 mt-10 flex flex-wrap items-center">
        <InstagramFeed
          token="IGQVJYNDZAidHFEUWVfREtLQlJBNGJNYjZAHQzZA3ZAE1Lb1VPTmtQbjk5b2tyVVpLaHI2S2lXWUk3S1E1VHBFb2VISUVHN2lpZAjY4b1ZAONEg3aGppcHVjRkN1eDAweG51eUtfZA0RkNFQ1R3F1MnItN0hwMgZDZD"
          counter="6"
        />
      </div>
    </section>
  );
}
