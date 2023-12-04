import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:justify-between px-2 sm:px-0">
      <Image
        src={"/Logo.svg"}
        alt="logo"
        width={200}
        height={200}
        className="w-24 h-8"
      />
      <div className="flex items-center sm:gap-5 justify-between w-full">
        <span className="text-white font-poppins text-base font-normal leading-5">
          Contact@00000000.tech
        </span>
        <div className="flex items-center gap-2">
          <Image
            src={"/telegram.svg"}
            alt="telegram"
            width={200}
            height={200}
            className="w-8 h-7"
          />
          <Image
            src={"/instagram.svg"}
            alt="instagram"
            width={200}
            height={200}
            className="w-8 h-7"
          />
          <Image
            src={"/twitter.svg"}
            alt="twitter"
            width={200}
            height={200}
            className="w-8 h-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
