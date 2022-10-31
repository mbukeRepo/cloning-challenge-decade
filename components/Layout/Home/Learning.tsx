import Image from "next/image";
import Link from "next/link";
import Button from "../../UI/Button";
const Learning = () => {
  return (
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
      <div className="max-w-4xl relative ">
        <div className="complete-course-gradient absolute -z-10 -translate-x-full translate-y-full bottom-0 left-0 w-[49rem] h-64 hidden md:block"></div>
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
  );
};

export default Learning;
