/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Tags from "../components/Tags";

import Pictures from "../components/Massonry";

const StockImages = () => {
  return (
    <div className="w-full bg-slate-800 h-full">
      <Navbar />
      <div name="hero" className="w-full h-full font-Acme">
        <div className="absolute">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div className="h-[25rem]">
              <img
                className="h-[25rem]"
                alt="img"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className="h-[25rem]">
              <img
                className="h-[25rem]"
                alt="img"
                src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000"
              />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className="h-[25rem]">
              <img
                className="h-[25rem]"
                alt="img"
                src="https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png"
              />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>
        <div className="relative w-full h-[25rem] bg-black/80 flex justify-center items-center scrollbar-hide">
          <div className="container mx-auto">
            <div className="relative top-[20%] p-4 text-white flex flex-col items-center">
              <p className="w-full my-5 text-gray-200 md:w-3/4 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                nemo, voluptas, quo libero explicabo dolor totam quam possimus,
                ducimus sed asperiores eum ad molestias nisi et illo dicta
                praesentium reprehenderit
              </p>
              <div className="flex flex-row justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  input-bordered w-full max-w-xs"
                />
                <button className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]">
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
        <Tags />
        <Pictures />


      </div>
    </div>
  );
};

export default StockImages;
