import React from "react";

// import Slide from "react-reveal/Slide";
// import Zoom from "react-reveal/Zoom";

export default function Footer() {
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
      body: encode({ "form-name": "newsletter", email }),
    })
      .then(() => alert("We have received your Email. Thanks for subscribing!"))
      .catch((error) => alert(error));
    e.preventDefault();
  }

  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 w-3/4  mx-auto ">
      <div className="md:order-3  order-1  grid col-span-1 gap-3">
        <label
          htmlFor="newsletter"
          className=" text-xl font-semibold text-gray-700"
        >
          Subscribe to our Newsletter
        </label>

        <form netlify name="newsletter" onSubmit={handleSubmit} method="POST">
          {" "}
          <div className=" flex  border-b-2 border-gray-500">
            {" "}
            <input
              id="email"
              
              name="email"
              type="email"
              className="py-2 flex-grow  text-gray-700 bg-neutral bg-opacity-20  focus:outline-none text-sm  "
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="float-right">
              <i className="fas fa-arrow-right  text-gray-700 hover:scale-125  transform cursor-pinter transition ease-in-out duration-500" />
            </button>
          </div>{" "}
        </form>
        {/* <button className="px-6 mt-2 relative text-gray-700 text-sm w-32 py-2 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 text-center transition ease-in-out duration-500">
          Submit
        </button> */}
      </div>

      <div className="md:order-2 order-2 mt-6 md:mt-0 ">
        <p className="text-xl   font-semibold text-gray-700">Follow us at</p>
        <div className="mt-3 ">
          <div className="grid gap-4 grid-cols-3 w-max  ">
            <a
              href="https://www.facebook.com/belasikaofficial/"
              target="_blank"
            >
              <svg
                className="svg mx-auto my-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
              </svg>
            </a>

            {/* <a href="">
              <svg
                className="svg mx-auto my-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />{" "}
              </svg>
            </a> */}

            <a
              href="https://www.instagram.com/belasikaofficial"
              target="_blank"
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
              href="https://www.pinterest.co.uk/belasikaofficial"
              target="_blank"
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
      <div className="md:order-1 order-3 mt-3 md:mt-0 ">
        <p className=" text-xl font-semibold text-gray-700">Contact us</p>
        <p className="text-gray-700 mt-3 ">For Inquiries, reach out to us at</p>
        <a
          className="underline antialiased  hover:text-gray-500  transition duration-500 ease-in-out"
          href="mailto:info@belasika.com"
        >
          info@belasika.com
        </a>
      </div>
    </div>
  );
}
