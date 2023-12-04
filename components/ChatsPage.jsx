import Image from "next/image";
import Messages from "./Messages";
const ChatsPage = ({
  selectedUser,
  chats,
  isChatPageVisible,
  onBackButtonClick,
}) => {
  const handleBackButtonClick = () => {
    onBackButtonClick();
  };
  return (
    <>
      <div className="w-full bg-[#181818] rounded-xl md:flex flex-col justify-between hidden">
        <div className="bg-[#2F2F2F] w-full flex justify-between px-7 py-2 rounded-b-none rounded-lg">
          <div className="flex items-center gap-3">
            <Image
              src={"/user.svg"}
              alt="user"
              width={200}
              height={200}
              className="w-10 h-10 cursor-pointer"
            />
            <span className="text-white font-open-sans text-sm font-semibold leading-5">
              {selectedUser.name}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src={"/back.svg"}
                alt="back"
                width={200}
                height={200}
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-white leading-trim-both font-poppins text-base font-normal leading-3">
                Back
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/delete.svg"}
                alt="delete"
                width={200}
                height={200}
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-white leading-trim-both text-capitalize font-poppins text-base font-normal leading-3">
                Delete
              </span>
            </div>
          </div>
        </div>
        <div className="h-full overflow-y-scroll mb-4">
          {selectedUser && (
            <div>
              {chats &&
                chats.map((chat) => (
                  <div key={chat.id}>
                    <Messages message={chat.text} />
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="flex px-8 mb-4 w-full gap-3">
          <input
            type="text"
            placeholder="Message..."
            className="flex bg-[#2F2F2F] placeholder:text-[#7F8781] pl-5 rounded-full w-[95%] text-white outline-none"
          />
          <Image
            src={"/chat.svg"}
            alt="chat"
            width={200}
            height={200}
            className="w-12 h-12 cursor-pointer"
          />
        </div>
      </div>

      {/* mobile */}
      {isChatPageVisible && (
        <div className="w-full bg-[#181818] rounded-xl md:hidden block">
          <div className="bg-[#2F2F2F] w-full flex justify-between px-3 py-2 rounded-b-none rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src={"/user.svg"}
                alt="user"
                width={200}
                height={200}
                className="w-9 h-9 cursor-pointer"
              />
              <span className="text-white font-open-sans text-sm font-semibold leading-5">
                Caressa Jessalin
              </span>
            </div>
            <div
              className="flex items-center gap-4"
              onClick={handleBackButtonClick}
            >
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/back.svg"}
                  alt="back"
                  width={200}
                  height={200}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="text-white leading-trim-both font-poppins text-sm font-normal leading-3">
                  Back
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/delete.svg"}
                  alt="delete"
                  width={200}
                  height={200}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="text-white leading-trim-both font-poppins text-sm font-normal leading-3">
                  Delete
                </span>
              </div>
            </div>
          </div>
          <div className="h-[60vh] overflow-y-scroll mb-4">
            {selectedUser && (
              <div>
                {chats &&
                  chats.map((chat) => (
                    <div key={chat.id}>
                      <Messages message={chat.text} />
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex px-2 pb-6 w-full gap-3">
            <input
              type="text"
              placeholder="Message..."
              className="flex bg-[#2F2F2F] placeholder:text-[#7F8781] pl-5 rounded-full w-[95%] text-white outline-none"
            />
            <Image
              src={"/chat.svg"}
              alt="chat"
              width={200}
              height={200}
              className="w-12 h-12 cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatsPage;
