import React from "react";

export default function ComingUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", name, email }),
    })
      .then(() => alert("Thanks for Subscribing!"))
      .catch((error) =>
        alert("please enter your name and correct email to subscribe.")
      );
    e.preventDefault();
  }

  return (
    <section>
      <div>
        <div class="min-h-screen py-32 px-4 lg:px-0 lg:py-0 flex items-center h-full w-full bg-gray-100 ">
          <div class="lg:w-3/4 mx-auto container ">
            <h1 class="  tracking-wide font-light text-gray-700  lg:text-5xl text-3xl">
              VIRSA COLLECTIONS
              <span className="tracking-widest ml-3 text-gray-400 text-xl ">
                | COMING SOON
              </span>
            </h1>

            <p class="text-gray-600 mt-6 font-light   text-lg">
              We are an independent crafting studio creating minimalist
              high-quality Leather bags. Our goal is to provide you with a
              carefree user experience and give you a bag you can use every day
              for any occasion. This is why we are putting so much care into
              every inch and stitch of the manufacturing process. We believe
              that keeping the lines clean and simple results in a product that
              is elegant, classy, and sophisticated. Virsa's leather collections
              are suitable for any type of occasion, from work to leisure. Our
              bags will serve you as a faithful and trusted lifelong companion.
            </p>
            <div className="lg:w-1/2 mt-6">
              <div className=" grid col-span-1 gap-3">
                <form
                  name="newsletter"
                  netlify
                  onSubmit={handleSubmit}
                  method="post"
                >
                  <label className=" text-xl font-semibold text-gray-700">
                    Subscribe to our Newsletter
                  </label>
                  <p class="text-gray-600 mt-1 font-light  ">
                    The pre launch at VIRSA Collections is going start soon.
                    Subscribe to our Newsletter To stay update about the new
                    year collection and special discounts for our early
                    customers.
                  </p>
                  <div className=" flex mt-4 mb-3 px-2 border-2 border-gray-500">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="py-2 flex-grow  text-gray-700 bg-neutral bg-opacity-20  focus:outline-none text-sm  "
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=" flex mt-3 mb-3 px-2 border-2 border-gray-500">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="py-2 flex-grow  text-gray-700 bg-neutral bg-opacity-20  focus:outline-none text-sm  "
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 mt-4 relative text-gray-700 text-sm w-32 py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div>
              <p className="text-xl mt-10  font-semibold text-gray-700">
                Follow us on Socials
              </p>
              <div className="mt-3 ">
                <div className="grid gap-4 grid-cols-4 w-max ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/virsa.collections_/"
                  >
                    <svg
                      className="svg mx-auto my-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
                      <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />{" "}
                    </svg>
                  </a>

                  <a
                    target="_blank "
                    rel="noreferrer"
                    href="https://www.pinterest.co.uk/virsacollectionsofficial/"
                  >
                    <svg
                      className="svg mx-auto mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      height="30px"
                      viewBox="0 0 26 26"
                    >
                      <g id="Layer_1">
                        <g>
                          <path d="M12,21c-4.963,0-9-4.037-9-9s4.037-9,9-9s9,4.037,9,9S16.963,21,12,21z M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7    s7-3.141,7-7S15.859,5,12,5z" />
                        </g>
                        <g>
                          <path d="M12.335,8c-2.468,0-3.712,1.77-3.712,3.244c0,0.895,0.338,1.688,1.063,1.984c0.119,0.049,0.226,0.002,0.261-0.129    c0.023-0.092,0.08-0.322,0.105-0.418c0.035-0.129,0.021-0.175-0.074-0.289c-0.209-0.246-0.344-0.566-0.344-1.019    c0-1.312,0.982-2.487,2.558-2.487c1.396,0,2.161,0.853,2.161,1.99c0,1.498-0.662,2.762-1.646,2.762    c-0.543,0-0.95-0.449-0.82-1.001c0.156-0.658,0.459-1.368,0.459-1.843c0-0.426-0.229-0.779-0.7-0.779    c-0.556,0-1.002,0.574-1.002,1.344c0,0.49,0.166,0.822,0.166,0.822s-0.569,2.408-0.669,2.83c-0.198,0.84-0.029,1.87-0.015,1.974    c0.008,0.062,0.087,0.077,0.123,0.03c0.052-0.067,0.713-0.885,0.938-1.7c0.064-0.23,0.366-1.427,0.366-1.427    c0.18,0.344,0.707,0.646,1.268,0.646c1.67,0,2.803-1.521,2.803-3.56C15.623,9.436,14.318,8,12.335,8z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
