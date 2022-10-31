import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Button from "../components/UI/Button";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/UI/Footer";
import Learning from "../components/Layout/Home/Learning";
import Modal from "../components/UI/Modal";
import Header from "../components/UI/Header";
export default function Home() {
  const overlay: any = useRef();
  const modal: any = useRef();

  const toLearningClick = () => {
    document.querySelector("#learning")?.scrollIntoView({ behavior: "smooth" });
  };
  const showModal = () => {
    if (overlay) {
      overlay.current.classList.add("scale-100");
      overlay.current.classList.remove("scale-0");
    }
    if (modal) {
      modal.current.classList.add("scale-100");
      modal.current.classList.remove("scale-0");
    }

    console.log("hello world", modal, overlay);
  };
  const closeModal = () => {
    if (modal) {
      modal.current.classList.remove("scale-100");
      modal.current.classList.add("scale-0");
    }
    if (overlay) {
      overlay.current.classList.remove("scale-100");
      overlay.current.classList.add("scale-0");
    }
  };
  return (
    <div className="container mx-auto relative min-h-screen  overflow-hidden ">
      <Head>
        <title>NEAR dev 101</title>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <link
          rel="icon"
          href="https://dacade-nearbalkans.netlify.app/fav-icons/favicon-32x32.png"
        />
      </Head>
      <Modal
        closeModal={closeModal}
        showModal={showModal}
        modal={modal}
        overlay={overlay}
      />
      <Header showModal={showModal} />
      <div className="relative min-h-screen 2xl:min-h-fit flex items-center overflow-hidden justify-center">
        <div className="">
          <div className="hero-background absolute lg:hidden -top-24 opacity-40 w-64 left-0 h-64"></div>
          <div className="hero-background absolute lg:hidden -top-24 opacity-40 w-48 right-0 h-64"></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-24 pt-32 text-center  container mx-auto px-6">
          <div className="flex flex-col items-center gap-5 lg:gap-12 lg:w-[56.875rem]">
            <h1 className="text-xl flex lg:text-[4.5rem] font-medium text-zinc-700 font-secondary  flex-col lg:flex-row text-[2rem] gap-6">
              <span>
                <span>Get </span>
                <span className="hero-gradient-text">NEAR</span>
              </span>
              <span>Certified!</span>
            </h1>
            <p className="paragraph-text-color lg:text-[1.375rem]">
              We, in NEAR Balkans, know how important it is to have regional and
              local support. Now you can become NEAR certified in a regional
              language of preference and connect with our team to support your
              further growth within the NEAR ecosystem.
            </p>
          </div>
          <div>
            <button onClick={toLearningClick}>
              <Image
                src="/icons/down-arrow.svg"
                alt="down-arrow icon"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>
      <Learning />
      <Footer />
    </div>
  );
}
