import React from "react";
import RouterMain from "./components/router_main";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Shop from "./components/shop";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ProductView } from "./components/product_view";
import AboutUs from "./components/aboutus";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <Navbar />

      <Routes forceRefresh>
        <Route
          forceRefresh={true}
          path="shop/:productId"
          element={<ProductView tag="/shop/" />}
        />
        <Route exact path="/" element={<RouterMain />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/reload" component={null} key="reload" />
      </Routes>
      <div className=" bg-neutral bg-opacity-50 border-t w-full   mt-10  py-16">
        <Footer />
      </div>
    </section>
  );
}
