import Image from "next/image";
import UserChat from "./UserChat";
const Sidebar = ({
  users,
  onUserSelect,
  isChatPageVisible,
  selectedUser,
  setSelectedUser,
}) => {
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    onUserSelect(user);
  };
  return (
    <div
      className={`bg-[#181818] rounded-lg h-full p-4 sm:p-10 gap-8 ${
        isChatPageVisible ? "hidden md:flex flex-col" : "flex flex-col"
      }`}
    >
      <span className="text-white leading-6 font-poppins text-capitalize text-xl sm:text-2xl font-normal">
        ALL YOUR CHATS
      </span>
      <div className="flex flex-col gap-5">
        <button className="flex items-center justify-center p-2 gap-2 h-10 sm:h-12 flex-shrink-0 rounded-xl bg-[#F3AE9F]">
          <Image
            src={"/msg.svg"}
            alt="msg"
            width={200}
            height={200}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="text-[#050505] leading-4 text-capitalize font-open-sans text-sm sm:text-md font-semibold">
            Chat Images: ON
          </span>
        </button>
        <span className="text-white font-poppins text-base font-normal leading-5">
          When a bot sends you images, you will be charged one secondary image
        </span>
      </div>
      <div className="flex flex-col gap-5 border-b-2 border-[#3F3F3F] pb-8 h-full overflow-y-scroll">
        {users.map((user) => (
          <UserChat
            key={user.id}
            user={user}
            onSelect={handleUserSelect}
            isSelected={user.id === selectedUser?.id}
          />
        ))}
      </div>
      <div className="flex gap-4 cursor-pointer">
        <Image
          src={"/add.svg"}
          alt="msg"
          width={2000}
          height={2000}
          className="w-8 h-7"
        />
        <span className="text-white font-poppins text-xl font-normal leading-6">
          Create new bot
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
