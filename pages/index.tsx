import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Button from "../components/UI/Button";
export default function Home() {
  const toLearningClick = () => {
    document.querySelector("#learning")?.scrollIntoView({ behavior: "smooth" });
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
      <div className=" z-20 fixed top-0 left-0 w-full">
        <div className="relative max-w-6xl w-full flex mx-auto">
          <div className="py-6 bg-white w-full   px-2 sm:px-4 md:px-12 lg:px-[7rem] flex justify-between">
            <div className="flex  items-center">
              <div className="flex items-center gap-1 border-r border-gray-300 mx-[0.6rem]  px-[0.6rem]">
                <div className="w-[2.4375rem]  px-[0.30rem]">
                  <Image
                    src="/logos/logo-mobile.svg"
                    alt="logo for mobile screens"
                    width={39}
                    height={30}
                  />
                </div>
                <p className="font-tartiary hidden md:block text-primary">
                  Decade
                </p>
              </div>
              <div className="block lg:hidden">
                <Image
                  src="/logos/near-mobile.svg"
                  alt="Near mobile"
                  width={29}
                  height={29}
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/logos/near-desktop.svg"
                  alt="Near desktop"
                  width={119}
                  height={38}
                />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <Link href={"#"} className="text-primary hidden lg:block">
                Start The Course
              </Link>
              <Link href={"#"}>
                <Button>Create wallet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
      <div
        id="learning"
        className="min-h-screen pt-24  flex flex-col  items-center"
      >
        <h2 className="text-zinc-700 text-center mb-12 md:mb-36 md:text-5xl font-secondary text-3xl">
          Making your NEAR
          <br /> learning easy.
        </h2>
        <div className="max-w-4xl relative">
          <div className="w-64 h-64 absolute hidden md:block -top-20 -right-10 open-wallet-gradient"></div>
          <div className="flex flex-col md:flex-row-reverse gap-4 items-center px-[1.375rem]">
            <div className="bg-white relative z-10 lg:w-[25rem]">
              <Image
                src="/images/near.png"
                alt="Near blockchain logo"
                width={296}
                height={296}
              />
            </div>
            <div className="flex mb-12 flex-col text-center md:text-start items-center md:items-start  gap-4">
              <h4 className="font-secondary text-zinc-700  text-xl">
                Open NEAR wallet
              </h4>
              <p className="paragraph-text-color text-sm md:  w-3/5 lg:text-lg">
                <span>Opening a NEAR wallet is the first step and</span>
                <span> essential part of joining the NEAR community</span>
                <span> as well as starting this course.</span>
              </p>
              <Link href={"#"}>
                <Button variant="primary">Create wallet</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/arrow1.svg"
            height={163}
            width={132}
            alt="arrow ..."
          />
        </div>
        <div className="max-w-4xl relative">
          <div className="flex flex-col md:flex-row items-center md:w-[58rem] gap-3 md:gap-[14rem]  px-[1.375rem]">
            <div className="w-[14rem]">
              <Image
                alt="complete course ..."
                src="/images/course.svg"
                width={180}
                height={180}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h4 className="font-secondary md:text-3xl text-zinc-700  text-xl">
                Complete the course
              </h4>
              <p className="paragraph-text-color">
                In three simple modules, learn:
              </p>
              <div className="flex flex-col gap-5 items-center md:items-start">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="w-5 h-5">
                    <Image
                      src="/images/course-1.png"
                      width={128}
                      height={128}
                      alt="course 1..."
                    />
                  </div>
                  <p className="paragraph-text-color text-sm">
                    Essential NEAR concepts
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="w-5 h-5">
                    <Image
                      src="/images/course-2.png"
                      width={128}
                      height={128}
                      alt="course 1..."
                    />
                  </div>
                  <p className="paragraph-text-color text-sm">
                    How to write smart contracts on NEAR
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="w-5 h-5">
                    <Image
                      src="/images/course-3.png"
                      width={128}
                      height={128}
                      alt="course 1..."
                    />
                  </div>
                  <p className="paragraph-text-color text-sm">
                    How to build dapps on the NEAR blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/arrow2.svg"
            alt="arrow 2"
            width={163}
            height={129}
          />
        </div>
        <div className="flex flex-col gap-16 items-center px-[1.375rem]">
          <div className="flex flex-col gap-4 items-center">
            <h4
              className="font-secondary mt-12
             text-zinc-700 md:text-3xl  text-xl"
            >
              Claim NEAR certificate
            </h4>
            <p className="paragraph-text-color w-3/5 text-center">
              Upon course completion, receive the NEAR dev 101 certificate as an
              NFT on your NEAR wallet.
            </p>
          </div>
          <div>
            <Image
              src="/images/certificate.png"
              width={644}
              height={362}
              alt="NFT certificate"
            />
          </div>
        </div>
        <div className="min-w-[30rem]  overflow-hidden relative">
          <div className="near-development-gradient w-[60rem] absolute bottom-0 hidden md:block right-0 -z-10  h-32"></div>
          <div className="flex flex-col pt-36 md:gap-[14rem] gap-4 md:flex-row-reverse items-center px-[1.375rem]">
            <div className="md:w-[23rem]">
              <Image
                src="/images/near-grey.png"
                alt="Near blockchain logo"
                width={180}
                height={180}
                className="w-full"
              />
            </div>
            <div className="flex flex-col md:items-start items-center gap-4">
              <h4 className="font-secondary text-zinc-700  text-xl">
                NEAR Development 101
              </h4>
              <Link href={"#"}>
                <Button variant="secondary">Start The Course</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-24 flex flex-col gap-12 items-center text-center text-zinc-700 px-6">
        <p>
          Visit{" "}
          <span className="font-tartiary text-zinc-700">nearbalkans.org</span>{" "}
          and make sure to follow us on our social and community channels!
        </p>
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-row gap-16 items-center  max-w-2xl md:justify-center md:mx-auto">
            <div className="hidden w-64 md:block md:border-r-2 pr-16  md:border-gray-300 ">
              <Image
                src="/logos/near-desktop.svg"
                width={119}
                height={38}
                alt="near desktop"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-7 gap-8 md:gap-1 items-center justify-center w-full">
              <div>
                <Image
                  src="/icons/twitter.svg"
                  width={29}
                  height={24}
                  alt="twitter icon"
                />
              </div>
              <div>
                <Image
                  width={28}
                  height={22}
                  src="/icons/discord.svg"
                  alt="discord icon"
                />
              </div>
              <div>
                <Image
                  width={28}
                  height={22}
                  src="/icons/telegram.svg"
                  alt="telegram icon"
                />
              </div>
              <div>
                <Image
                  width={15}
                  height={28}
                  src="/icons/facebook.svg"
                  alt="facebook icon"
                />
              </div>
              <div>
                <Image
                  width={25}
                  height={24}
                  src="/icons/linkedin.svg"
                  alt="linked IN icon"
                />
              </div>
              <div>
                <Image
                  width={28}
                  height={28}
                  src="/icons/instagram.svg"
                  alt="instagram icon"
                />
              </div>
              <div>
                <Image
                  width={32}
                  height={18}
                  src="/icons/medium.svg"
                  alt="instagram icon"
                />
              </div>
            </div>
          </div>

          <ul className="flex flex-col md:flex-row gap-4">
            <li>NEAR Balkans 2022</li>
            <li>info@nearbalkans.org</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <p>
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and
            <br /> Slovenia
          </p>
        </div>
      </section>
    </div>
  );
}
