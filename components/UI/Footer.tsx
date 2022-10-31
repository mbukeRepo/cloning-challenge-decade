import Image from "next/image";
const Footer = () => {
  return (
    <section className="py-24 flex flex-col gap-12 items-center text-center text-zinc-700 px-6">
      <p>
        Visit{" "}
        <span className="font-tartiary text-zinc-700">nearbalkans.org</span> and
        make sure to follow us on our social and community channels!
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
          NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro,
          North Macedonia, Serbia, and
          <br /> Slovenia
        </p>
      </div>
    </section>
  );
};

export default Footer;
