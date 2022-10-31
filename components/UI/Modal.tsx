import Image from "next/image";
import React from "react";
const Modal = (props: any) => {
  return (
    <React.Fragment>
      <div
        ref={props.overlay}
        className="w-screen  h-screen bg-black bg-opacity-20 scale-0 fixed top-0 left-0"
      ></div>
      <div
        ref={props.modal}
        className="flex  w-screen h-screen   fixed top-0 z-40 scale-0   justify-center items-center"
      >
        <div className="w-96 relative z-50 h-96 bg-white rounded-3xl mt-24">
          <div className="px-6 py-5 border-b border-gray-300 flex justify-between">
            <p>Choose language</p>
            <p onClick={props.closeModal}>
              <Image
                src="/icons/close.svg"
                alt="Close"
                height={20}
                width={20}
              />
            </p>
          </div>
          <div className="flex flex-col gap-5 px-6 py-12">
            <div className="flex justify-between border border-gray-200 p-3 rounded-lg items-center ">
              <div className="flex gap-7  items-center">
                <div>
                  <Image
                    src="/logos/map1.svg"
                    width={21}
                    height={13}
                    alt="map 1"
                  />
                </div>
                <p>Bulgaria</p>
              </div>
              <div className="bg-gray-200 flex items-center justify-center rounded-full h-[1.6rem] w-[1.6rem] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between border border-gray-200 p-3 rounded-lg items-center ">
              <div className="flex gap-7  items-center">
                <div>
                  <Image
                    src="/logos/map1.svg"
                    width={21}
                    height={13}
                    alt="map 1"
                  />
                </div>
                <p>Bulgaria</p>
              </div>
              <div className="bg-gray-200 flex items-center justify-center rounded-full h-[1.6rem] w-[1.6rem] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between border border-gray-200 p-3 rounded-lg items-center ">
              <div className="flex gap-7  items-center">
                <div>
                  <Image
                    src="/logos/map1.svg"
                    width={21}
                    height={13}
                    alt="map 1"
                  />
                </div>
                <p>Bulgaria</p>
              </div>
              <div className="bg-gray-200 flex items-center justify-center rounded-full h-[1.6rem] w-[1.6rem] text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Modal;
