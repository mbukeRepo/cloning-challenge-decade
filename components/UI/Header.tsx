import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Header = (props: any) => {
  return (
    <div className=" z-20 fixed top-0 bg-white left-0 w-full">
      <div className="relative max-w-6xl w-full flex mx-auto">
        <div className="py-6 bg-white w-full   px-2 sm:px-4 md:px-12 lg:px-[7rem] flex justify-between">
          <div className="flex  items-center">
            <Link
              href={"/decade"}
              className="flex items-center gap-1 border-r border-gray-300 mx-[0.6rem]  px-[0.6rem]"
            >
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
            </Link>
            <Link href={"/near"} className="block lg:hidden">
              <Image
                src="/logos/near-mobile.svg"
                alt="Near mobile"
                width={29}
                height={29}
              />
            </Link>
            <Link href={"/near"} className="hidden lg:block">
              <Image
                src="/logos/near-desktop.svg"
                alt="Near desktop"
                width={119}
                height={38}
              />
            </Link>
          </div>
          <div className="flex gap-8 items-center">
            <div
              onClick={props.showModal}
              className="text-primary hidden lg:block"
            >
              Start The Course
            </div>
            <Link href={"/wallet"}>
              <Button>Create wallet</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
