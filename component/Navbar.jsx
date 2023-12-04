import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="hidden sm:flex justify-between items-center ">
        <div className="flex items-center text-white gap-4 md:gap-9">
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-24 h-10"
          />
          <Image
            src={"/line.svg"}
            alt="side"
            width={200}
            height={200}
            className="w-2 h-8"
          />
          <div className="flex items-center gap-2">
            <Image
              src={"/home.svg"}
              alt="home"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span className="text-red-400">Explore</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/create.svg"}
              alt="create"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span>Create</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/edit.svg"}
              alt="edit"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span>Edit</span>
          </div>
        </div>
        <button className="w-28 md:w-44 h-10 rounded-full bg-[#F3AE9F]">
          <span className="text-[#050505] text-lg">Login</span>
        </button>
      </div>

      {/* mobile */}
      <div className="sm:hidden flex justify-between items-center px-2">
        <div className="flex items-center text-white gap-4 md:gap-9">
          <Image
            src={"/Logo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-20 h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="w-28 h-10 rounded-full bg-[#F3AE9F]">
            <span className="text-[#050505] text-lg">Login</span>
          </button>
          {!showMenu ? (
            <Image
              src={"/menu.svg"}
              alt="menu"
              width={200}
              height={200}
              className="w-7 h-7"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <Image
              src={"/cancel.svg"}
              alt="menu"
              width={200}
              height={200}
              className="w-7 h-7"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="flex items-center justify-end gap-6 text-white px-2">
          <div className="flex items-center gap-1">
            <Image
              src={"/home.svg"}
              alt="home"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span className="text-red-400">Explore</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/create.svg"}
              alt="create"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span>Create</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={"/edit.svg"}
              alt="edit"
              width={200}
              height={200}
              className="w-6 h-6"
            />
            <span>Edit</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
