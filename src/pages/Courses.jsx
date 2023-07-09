import { Carousel } from "react-responsive-carousel";

const Courses = () => {
  return (
    <div name="hero" className="w-full h-full font-Acme">
      <div className="absolute">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              alt="img"
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              alt="img"
              src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              alt="img"
              src="https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="relative w-full h-[25rem] bg-gradient-to-r from-black flex ">
        <div className="container mx-auto ">
          <div className="relative top-[20%] p-4  text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:w-2/4">
              LEARN FROM THE BEST
            </h1>
            <p className="w-full my-5 text-gray-200 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              nemo, voluptas, quo libero explicabo dolor totam quam possimus,
              ducimus sed asperiores eum ad molestias nisi et illo dicta
              praesentium reprehenderit!
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container max-w-[85rem] p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
          >
            <iframe
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_nsV65jUPL8"
              title="YouTube video player"
            //   frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs text-gray-400">February 19, 2021</span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 21, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?2"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 22, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?3"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 23, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 24, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 25, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500"
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs text-gray-400">January 26, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                  neglegentur, ex has tantas percipit perfecto. At per tempor
                  albucius perfecto, ei probatus consulatu patrioque mea, ei
                  vocent delicata indoctum pri.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
