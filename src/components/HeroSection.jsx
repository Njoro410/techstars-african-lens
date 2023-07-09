/* eslint-disable no-unused-vars */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import art from "../assets/landingpage/art.jpg";
import game from "../assets/landingpage/game.jpg";
import savana from "../assets/landingpage/savana.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-screen z-10">
      <div className="absolute">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div className="h-screen">
            <img className="h-screen" alt="img" src={art} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className="h-screen">
            <img className="h-screen" alt="img" src={game} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className="h-screen">
            <img className="h-screen" alt="img" src={savana} />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
      <div className="relative w-full h-screen bg-gradient-to-r from-black flex ">
        <section className="md:mt-12 lg:mt-24">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="relative top-[20%] p-4  text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-2/4 mt-16 md:mt-4">
                <span className="text-yellow-400">Discover</span> and{" "}
                <span className="text-yellow-400">Celebrate</span> the Richness
                of <span className="text-yellow-400">African Artistry</span>
              </h1>
              <p className="w-full my-5 text-gray-200 md:w-3/4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                nemo, voluptas, quo libero explicabo dolor totam quam possimus,
                ducimus sed asperiores eum ad molestias nisi et illo dicta
                praesentium reprehenderit! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ipsam nemo, voluptas, quo libero
                explicabo dolor totam quam possimus, ducimus sed asperiores eum
                ad molestias nisi et illo dicta praesentium reprehenderit!
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  to={"/images"}
                  href="#"
                  rel="noopener noreferrer"
                  className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]"
                >
                  Browse Creative Art
                </Link>
                <Link
                  to={"/courses"}
                  href="#"
                  rel="noopener noreferrer"
                  className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]"
                >
                  Learn from the best
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="assets/svg/Business_SVG.svg"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
