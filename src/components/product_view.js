import React from "react";
import { products } from "../data";
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SliderImage from "react-zoom-slider";
// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";
import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

// function reloadPage() {
//   // eslint-disable-next-line no-restricted-globals
//   location.reload(false);
// }

//

export const ProductView = (props) => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.link === productId);
  // const history = useNavigate();
  // history("/reload");
  const Reloadpage = () => {
    useEffect(() => {
      window.location.reload();
    }, []);
  };

  return (
    <section id="" className="lg:pt-32 p-3">
      <div className="lg:w-4/5  mx-auto w-full">
        <div className="  grid gap-10 lg:grid-cols-2 grid-cols-1">
          <div className=" lg:col-span-1">
            {/* <SliderImage
              data={product.product_images}
              width="auto"
              showDescription={false}
              direction="right"
            /> */}

            <div className="App mb-20 img-container">
              <Carousel
                data={product.product_images}
                time={2000}
                width="500px"
                height="500px"
                radius="0px"
                slideNumber={false}
                captionPosition="bottom"
                automatic={false}
                showNavBtn={true}
                dots={false}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="white"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="80px"
                style={{
                  textAlign: "center",
                  maxWidth: "500px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
          <div className="   lg:col-span-1">
            <div className="mb-20 mt-8 ">
              <h1 className="  font-bold text-2xl text-gray-700 ">
                {product.name}
              </h1>
              <p className=" text-lg font-mono text-gray-600 mt-5">
                <span className=" font-medium text-gray-700 ordinal">
                  — £{product.disc_price}.<span className="text-xs">99</span>
                </span>
                <span className="ml-4 font-medium text-gray-400 line-through">
                  £{product.price}.<span className="text-xs">99</span>
                </span>
              </p>
              <p className=" text-lg text-gray-600 mt-5">{product.color}</p>
              <div className="flex gap-3 mt-5">
                {product.color_code.map((y) => (
                  <Link
                    onClick={Reloadpage}
                    key={product.color_code}
                    to={props.tag + y.link}
                  >
                    <div
                      key={y.code}
                      className="w-8 h-8 rounded-full  cursor-pointer border-2 border-white "
                      style={{
                        backgroundColor: y.code,
                        outline: y.outline,
                      }}
                    ></div>
                  </Link>
                ))}
              </div>
              <div className=" text-gray-600">
                <h3 className=" mt-6 font-bold">Details:</h3>
                <ul className="list-disc ml-4 text-sm">
                  {product.bullets.map((x) => (
                    <li className="text-gray-600 py-1" key={x.bullet}>
                      {x.bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" text-gray-600">
                <h3 className=" mt-6 font-bold">Dimentions:</h3>

                <table className="w-max text-sm table-fixed mt-3  ">
                  <tbody>
                    <tr className="  border-b border-gray-200">
                      <td className="border-r py-1 px-4 border-gray-200">
                        Height
                      </td>
                      <td className=" py-1 px-4">{product.size.height}"</td>
                    </tr>
                    <tr className=" border-b border-gray-200">
                      <td className="border-r py-1 px-4 border-gray-200">
                        Length
                      </td>
                      <td className=" py-1 px-4">
                        top - {product.size.width.top}" , base -
                        {product.size.width.base}"
                      </td>
                    </tr>
                    <tr className=" border-b border-gray-200">
                      <td className="border-r py-1 px-4 border-gray-200">
                        Width
                      </td>
                      <td className=" py-1 px-4"> {product.size.depth}"</td>
                    </tr>
                    <tr className=" ">
                      <td className="border-r py-1 px-4 border-gray-200">
                        Weight
                      </td>
                      <td className=" py-1 px-4">
                        {" "}
                        {product.weight.lbs} lbs or {product.weight.kg} kg
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className=" text-gray-600">
                <h3 className=" mt-6  font-bold">Care:</h3>
                <ul className="list-disc ml-4 text-sm">
                  <li className="py-1">
                    Wipe Clean with Damp cloth and air dry only in a shaded
                    place.
                  </li>
                  <li className="py-1">
                    Store it stuffed and upright, in a dust bag to keep its
                    shape.
                  </li>

                  <li className="py-1">
                    It is important you never use other products like repellent
                    spray, shoe cream or suede spray on our leather as this
                    might damage it.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <a href={product.buy_now} target="_blank" rel="noreferrer">
                  <button className="px-6 relative  py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="   lg:col-span-2">
            <div className="mb-16 ">
              <h1 className=" text-4xl font-bold text-gray-700 text-center ">
                Features
              </h1>

              <div className="flex w-full gap-32  flex-wrap items-center">
                <div className="lg:order-2 lg:flex-1 flex-initial">
                  <img
                    src={product.features[0].img}
                    alt={product.features[0].alt}
                  />
                </div>
                <div className=" lg:order-1 lg:flex-1 flex-initial flex items-center">
                  <p className="text-2xl  font-extralight text-gray-500">
                    {product.features[0].desc}
                  </p>
                </div>
              </div>

              <div className="flex w-full gap-32  flex-wrap items-center">
                <div className="lg:flex-1 flex-initial">
                  <img
                    src={product.features[1].img}
                    alt={product.features[1].alt}
                  />
                </div>
                <div className="lg:flex-1 flex-initial  flex items-center">
                  <p className="text-2xl  font-light text-gray-500">
                    {product.features[1].desc}
                  </p>
                </div>
              </div>

              <div className="flex w-full gap-32  flex-wrap items-center">
                <div className="lg:order-2 lg:flex-1 flex-initial">
                  <img
                    src={product.features[2].img}
                    alt={product.features[2].alt}
                  />
                </div>
                <div className=" lg:order-1 lg:flex-1 flex-initial  flex items-center">
                  <p className="text-2xl  font-light text-gray-500">
                    {product.features[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="   lg:col-span-2">
            <div className=" ">
              <h1 className="text-4xl  font-bold  text-gray-700 text-center">
                You may also Like
              </h1>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24 mt-16">
                {products
                  .filter(
                    (other_products) => other_products.link !== product.link
                  )
                  .map((filteredProducts) => (
                    <div className=" ">
                      <Link
                        onClick={Reloadpage}
                        to={props.tag + filteredProducts.link}
                      >
                        <img
                          src={filteredProducts.display_images[0].image}
                          className="w-full  "
                          alt={filteredProducts.display_images[0].alt}
                        />
                      </Link>
                      <p className="text-sm  mt-6 text-center font-bold  text-gray-800">
                        {filteredProducts.name} - {filteredProducts.color}
                      </p>
                      <div className="flex m-4  text-center ">
                        <div className="flex-grow  flex items-center">
                          <p className="  ">
                            <span className=" font-medium font-mono  text-gray-700 ordinal">
                              — £{filteredProducts.disc_price}.
                              <span className="text-xs">99</span>
                            </span>
                            <span className="ml-4 font-medium font-mono   text-gray-400 line-through">
                              £{filteredProducts.price}.
                              <span className="text-xs">99</span>
                            </span>
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="px-4 relative text-sm  py-1 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
