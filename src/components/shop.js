import React from "react";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

import { Products } from "./products";
import Amazon from "./amazon";
import Instagram from "./instagram";
export default function Shop() {
  return (
    <section id="" className=" ">
      <div className=" mt-32 mx-auto w-full">
        <Products tag="/shop/" />
        <Amazon />
        <Instagram />
      </div>
    </section>
  );
}
