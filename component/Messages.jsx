import Image from "next/image";

const Messages = ({ message }) => {
  return (
    <div className="flex flex-col px-2 sm:px-7 mt-10 gap-10 md:gap-2">
      <div className="flex flex-col self-end gap-1 md:gap-4">
        <div className="flex self-end items-center gap-1.5 md:gap-2">
          <span className="flex items-center justify-center gap-1 md:gap-2 text-black font-poppins text-sm font-normal sm:leading-7 leading-6 p-2 md:p-2.5 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl bg-[#F3AE9F] max-w-[15rem] sm:max-w-full">
            {message}
          </span>
          <Image
            src={"/user2.svg"}
            alt="msg"
            width={2000}
            height={2000}
            className="w-10 h-10"
          />
        </div>

        <span className="flex mr-12 items-center justify-center gap-1 md:gap-2 text-black font-poppins text-sm font-normal sm:leading-7 leading-6 p-2 md:p-2.5 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl bg-[#F3AE9F] max-w-[15rem] sm:max-w-full">
          Yes, my order according to application. Thank you
        </span>
      </div>
      <div className="flex flex-col self-start gap-1 md:gap-4">
        <div className="flex self-start items-center gap-1.5 md:gap-2">
          <Image
            src={"/user.svg"}
            alt="msg"
            width={2000}
            height={2000}
            className="w-10 h-10"
          />
          <span className="flex items-center justify-center gap-1 md:gap-2 text-white font-poppins text-sm font-normal sm:leading-7 leading-6 p-2 md:p-2.5 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl bg-[#2F2F2F] max-w-[15rem] sm:max-w-full">
            {message}
          </span>
        </div>

        <span className="flex ml-12 items-center justify-center gap-1 md:gap-2 text-white font-poppins text-sm font-normal sm:leading-7 leading-6 p-2 md:p-2.5 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-xl bg-[#2F2F2F] max-w-[15rem] sm:max-w-full">
          Yes, my order according to application. Thank you
        </span>
      </div>
    </div>
  );
};

export default Messages;
