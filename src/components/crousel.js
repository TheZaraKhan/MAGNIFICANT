import React from "react";
import SliderImage from "react-zoom-slider";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMzcxODE3MA&ixlib=rb-1.2.1&q=85",
    text: "img1",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
    text: "img2",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
    text: "img3",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-1-org.jpg",
    text: "img4",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-6-org.jpg",
    text: "img5",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-1-org.jpg",
    text: "img6",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-10-org.jpg",
    text: "img7",
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-12-org.jpg",
    text: "img8",
  },
];

export default function Crousel() {
  return (
    <div className="h-screen flex items-center">
      <h1>Hello CodeSandbox</h1>
      <SliderImage
        data={data}
        width="500px"
        showDescription={true}
        direction="right"
      />
    </div>
  );
}
