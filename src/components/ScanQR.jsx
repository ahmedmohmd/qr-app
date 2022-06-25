import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Link } from "react-router-dom";

function ScanQR() {
  const [data, setData] = useState("No result");
  const [copy, setCopy] = useState("Copy");

  return (
    <div class="relative text-gray-600 body-font min-h-screen">
      <div class="lg:pt-26 h-full container mx-auto flex px-5 pt-16 lg:flex-row flex-col gap-12 lg:gap-10 items-center lg:items-start">
        <div class="order-2 lg:order-1 lg:flex-grow md:w-2/3  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <Link
              to="/"
              className="relative flex items-center justify-center order-2 w-24 h-24 p-5 duration-500 rounded-full lg:order-1 hover:bg-orange-100"
            >
              <img src="/images/home-icon.png" alt="" />
            </Link>

            <div className="relative order-1 lg:order-2">
              <textarea
                id="message"
                readOnly={true}
                value={data}
                rows="10"
                cols="40"
                class="font-itim text-semibold outline-none resize-none block p-2.5 w-full text-xl lg:text-2xl text-slate-500  bg-gray-50 rounded-xl border-4 border-gray-300  focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
              <button
                onFocus={() => setCopy("Copied!")}
                onBlur={() => setCopy("Copy")}
                onClick={() => {
                  window.navigator.clipboard.writeText(data);
                }}
                className={
                  "absolute px-4 py-2 rounded-xl right-5 bottom-5 " +
                  (copy === "Copied!"
                    ? "bg-violet-700 text-white"
                    : "bg-slate-400 text-slate-700")
                }
              >
                {copy}
              </button>
            </div>
          </div>
          <div class="flex justify-center"></div>
        </div>

        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-1 lg:order-2 flex flex-col gap-12 lg:gap-10 justify-center items-center">
          <div className="relative w-full h-full p-6 lg:p-8 bg-slate-200 rounded-3xl">
            <span className="absolute w-1/2 bg-violet-500 -z-10 rounded-3xl -top-3 -right-3 lg:-top-5 lg:-right-5 h-1/2"></span>
            <span className="absolute w-1/2 bg-violet-500 -z-10 rounded-3xl -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 h-1/2"></span>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              className="!w-full !h- full rounded-2xl bg-slate-700"
              constraints={{ facingMode: "user" }}
            />
          </div>
          <div class="lg:hidden w-1/3 h-2 bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4c4dd1"
            fill-opacity="1"
            d="M0,96L240,224L480,160L720,96L960,160L1200,64L1440,160L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ScanQR;
