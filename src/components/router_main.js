import React from "react";
import Hero from "./hero";
import { Products } from "./products";
import About from "./about";
import Amazon from "./amazon";
import Section from "./section";

import Instagram from "./instagram";

export default function RouterMain() {
  return (
    <section>
      <Hero />
      <Section />
      <Products tag="/shop/" />
      <Amazon />
      <About />
      <Instagram />
    </section>
  );
}
