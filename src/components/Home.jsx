//* Imports
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typed from "react-typed";

//* Home JSX
function Home() {
  return (
    <div className="h-screen">
      <div className="relative h-full">
        <img
          src="/images/qr-background.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative h-full bg-indigo-700 bg-opacity-75">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,32L240,160L480,128L720,192L960,288L1200,96L1440,32L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>

          <div className="relative flex items-center justify-center h-full px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:-mt-36 xl:flex-row">
              <div className="w-full max-w-xl mb-12 text-center lg:text-start xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="max-w-lg mb-6 font-sans text-5xl font-extrabold tracking-tight text-white sm:text-7xl sm:leading-none">
                  {"QR Scaner & Creator"}
                </h1>

                <Typed
                  strings={[
                    "Now You can Create or Scan Your QR Code in the Fastest Way and For Free.",
                    "Try our Service.",
                    "Thank You...",
                  ]}
                  typeSpeed={50}
                  backSpeed={60}
                  className="text-white"
                  loop
                >
                  <p className="inline max-w-xl mb-4 text-base text-gray-200 md:text-lg"></p>
                </Typed>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <motion.div
                  className="flex items-center justify-center gap-3 p-5 border-4 rounded-3xl"
                  variants={{
                    hidden: { opacity: 1, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.3,
                        duration: 0.4,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.button
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                      },
                    }}
                    className="p-5 duration-300 bg-white rounded-2xl hover:!scale-90 active:translate-y-2"
                  >
                    <Link to="/create">
                      <img
                        className="object-contain"
                        src="/images/create-qr.png"
                        alt=""
                      />
                    </Link>
                  </motion.button>
                  <motion.button
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                      },
                    }}
                    className="p-5 duration-300 bg-white rounded-2xl hover:!scale-90 active:translate-y-2"
                  >
                    <Link to="/scan">
                      {" "}
                      <img
                        className="object-contain scale-125"
                        src="/images/scan-qr.png"
                        alt=""
                      />
                    </Link>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
