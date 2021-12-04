import React from "react";

import Hero from "./components/hero";

import Navbar from "./components/navbar";

import Products from "./components/products";
import About from "./components/about";
import Amazon from "./components/amazon";
import Footer from "./components/footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Amazon />
      <About />
      <div className=" bg-neutral bg-opacity-50 border-t w-full   mt-10  md:py-16">
        <Footer />
      </div>
    </main>
  );
}
