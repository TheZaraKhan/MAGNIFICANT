import React from "react";

// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";
import { products } from "../data";

import { Link } from "react-router-dom";

export const Products = (props) => {
  return (
    <section id="shop" className=" ">
      <h1 className="text-4xl mb-10 text-gray-700 font-bold text-center ">
        Shop the new Collection
      </h1>
      <div className="lg:w-3/4  mx-auto w-full px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-32 gap-y-16">
          {/* ------------------------    product start from here    -------------------------     */}
          {products.map((product) => (
            <div key={product.link} className=" ">
              <Link to={props.tag + product.link}>
                <div className=" switch transition duration-500 ease-in-out">
                  <div className="my-box div_a transition duration-500 ease-in-out ">
                    <img
                      src={product.display_images[0].image}
                      className="w-full h-full absolute object-cover"
                      alt={product.display_images[0].alt}
                    />
                  </div>
                  <div className="div_hover my-box w-full h-full transition duration-500 ease-in-out">
                    <img
                      src={product.display_images[1].image}
                      className="w-full h-full absolute object-cover"
                      alt={product.display_images[0].alt}
                    />
                  </div>
                </div>
              </Link>

              <div className="flex my-6 ">
                <div className="flex-grow">
                  <p className="text-md font-medium tracking-wide text-gray-700">
                    {product.name} - {product.color}
                  </p>
                  <p className="  ">
                    <span className=" font-medium text-gray-700 ordinal">
                      — £{product.disc_price}.
                      <span className="text-xs">99</span>
                    </span>
                    <span className="ml-4 font-medium text-gray-400 line-through">
                      £{product.price}.<span className="text-xs">99</span>
                    </span>
                  </p>
                </div>
                <div className="flex-none">
                  <a href={product.buy_now} target="_blank" rel="noreferrer">
                    <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                      Buy Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/*  -----------------------     product ends here    -------------------- */}
        </div>
      </div>
    </section>
  );
};
