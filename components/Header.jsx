import React from "react";
import { IoMdSettings } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Header = ({dashboardText}) => {
  return (
    <header className="flex justify-between p-5 rounded-xl items-center bg-white shadow-md text-green-900 font-bold">
      <h2>{dashboardText}</h2>
      <section className="flex items-center space-x-2">
        <div className="bg-[#DFF6E8] text-[#005C5D] p-2 rounded-2xl inline-block">
          <IoMdSettings />
        </div>
        <div className="bg-[#005C5D] text-[#DFF6E8] p-4 rounded-3xl inline-block">
        <RxAvatar />
        </div>
        
      </section>
    </header>
  );
};

export default Header;
