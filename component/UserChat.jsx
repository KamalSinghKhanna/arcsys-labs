import Image from "next/image";

const UserChat = ({ user, onSelect, isSelected }) => {
  const handleDivClick = () => {
    onSelect(user);
  };

  return (
    // <div className="flex flex-col gap-5 border-b-2 border-[#3F3F3F] pb-8">
    <div
      className={`flex w-full h-14 border-1 items-center gap-3 rounded-full px-2 cursor-pointer ${
        isSelected ? "bg-[#7F8781]" : "bg-transparent"
      }`}
      onClick={handleDivClick}
    >
      <Image
        src={"/user.svg"}
        alt="msg"
        width={2000}
        height={2000}
        className="w-12 h-14"
      />
      <div className="flex flex-col">
        <span className="text-white font-open-sans text-base font-semibold leading-6">
          {user.name}
        </span>
        <span className="text-[#c8cac9] font-poppins text-sm font-normal leading-6">
          {user.description}
        </span>
      </div>
    </div>
    // </div>
  );
};

export default UserChat;
