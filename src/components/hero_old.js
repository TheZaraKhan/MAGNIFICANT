import React from "react";

// import Slide from "react-reveal/Slide";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <section className=" ">
      <div
        className=" carousel   relative container mx-auto"
        style={{ maxWidth: "1600px" }}
      >
        <div
          id="carousel"
          className="carousel-inner relative overflow-hidden w-full"
        >
          {/*Slide 1*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked="checked"
          />
          <div
            className="carousel-item absolute bg-neutral bg-opacity-80 opacity-0"
            style={{ height: "100vh" }}
          >
            <div className="block  bg-pebbled h-full w-full mx-auto flex pt-6 lg:pt-0 lg:items-center bg-contain bg-no-repeat bg-right-bottom">
              <div className="content md:w-1/2 xl:mx-32 md:mx-10 mx-auto w-full px-6">
                {/*  add any content in this box  */}

                <p className="text-gray-500 my-6 ">Exquisite Collection</p>
                <h1 className="text-5xl my-6  tracking-wide  font-Canela  text-gray-700">
                  Pebbled Leather Tote
                </h1>
                <h3 className="my-6 text-xl font-light text-gray-600">
                  {/* Buy from our timeless collection for the modern woman. */}
                  Made from the Full-Grained Veg Tanned Cow Leather. This
                  Pebbled Chocolate brown Leather Tote is marked by flawless
                  craftsmanship.
                </h3>
                <p className="text-xl my-6  gap-10">
                  ———
                  <span className="ml-6 font-bold text-gray-700 ordinal">
                    £79.<span className="text-xs">99</span>
                  </span>
                  <span className="ml-4 font-bold text-gray-400 line-through">
                    £99.<span className="text-xs">99</span>
                  </span>
                </p>
                <div className="">
                  <button className="px-6 relative text-gray-700  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Buy Now
                  </button>
                  <button className="mx-6 pt-2 pb-1 text-gray-700  relative u-line  text-center transition ease-in-out duration-500">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Slide 2*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{ height: "100vh" }}
          >
            <div className="block bg-hero2 h-full w-full mx-auto flex pt-6 lg:pt-0 lg:items-center bg-cover bg-right">
              <div className="content w-1/2 mx-32">
                {/*  add any content in this box  */}

                <p className="text-gray-500 my-6 ">Exquisite Collection</p>
                <h1 className="text-5xl my-6  text-gray-600">System Tote</h1>
                <h3 className="my-6 text-xl font-light text-gray-600">
                  {/* Buy from our timeless collection for the modern woman. */}
                  A timeless and refined companion crafted from supple,
                  luxurious Italian pebbled leather, our System Tote is designed
                  to carry you effortlessly from workdays to weekends, from the
                  office desk to the dinner table.
                </h3>
                <p className="text-xl my-6  gap-10">
                  ———
                  <span className="ml-6 font-bold text-gray-700 ordinal">
                    £79.<span className="text-xs">99</span>
                  </span>
                  <span className="ml-4 font-bold text-gray-400 line-through">
                    £99.<span className="text-xs">99</span>
                  </span>
                </p>
                <div className="">
                  <button className="px-6 relative text-gray-700  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Buy Now
                  </button>
                  <button className="mx-6 pt-2 pb-1 text-gray-700  relative u-line  text-center transition ease-in-out duration-500">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Slide 3*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "100vh" }}
          >
            <div className="block bg-hero3 h-full w-full mx-auto flex pt-6 lg:pt-0 lg:items-center bg-cover bg-center">
              <div className="content w-1/2 mx-32">
                {/*  add any content in this box  */}

                <p className="text-gray-500 my-6 ">Exquisite Collection</p>
                <h1 className="text-5xl my-6  text-gray-600">
                  Structured Leather Zipper Tote
                </h1>
                <h3 className="my-6 text-xl font-light text-gray-600">
                  {/* Buy from our timeless collection for the modern woman. */}
                  Spacious, lightweight, and versatile, our Tall Structured
                  Leather Zipper Tote is crafted with a top zipper for extra
                  security.
                </h3>
                <p className="text-xl my-6  gap-10">
                  ———
                  <span className="ml-6 font-bold text-gray-700 ordinal">
                    £79.<span className="text-xs">99</span>
                  </span>
                  <span className="ml-4 font-bold text-gray-400 line-through">
                    £99.<span className="text-xs">99</span>
                  </span>
                </p>
                <div className="">
                  <button className="px-6 relative text-gray-700  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Buy Now
                  </button>
                  <button className="mx-6 pt-2 pb-1 text-gray-700  relative u-line  text-center transition ease-in-out duration-500">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* slide indicators */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
