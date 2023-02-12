import React from "react";
import Link from "next/link";
import { MdDashboard, MdEditNote } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsMoonFill } from "react-icons/bs";

const SideBarContent = () => {
  return (
    <div className="fixed h-screen bg-[#036666] border-r-[1px] flex flex-col justify-between">
      <section className="flex flex-col items-center text-white font-light">
        <Link href="/">
          <div className="text-white p-3 rounded-lg inline-block">
            {/* <RxSketchLogo /> */}Dakota logo
          </div>
        </Link>

        <Link href="/">
          <div className="bg-[#CCF1DA] text-[#036666] font-semibold m-2 p-3 rounded-xl shadow-lg flex justify-between items-center">
            <MdDashboard className="mr-2" />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link href="/projects">
          <div className="m-2 p-3 rounded-lg flex justify-between items-center">
            <AiOutlineFundProjectionScreen className="mr-2" />
            <p>Projects</p>
          </div>
        </Link>

        <Link href="/tasks">
          <div className="m-2 p-3 rounded-lg flex justify-between items-center">
            <BiTask className="mr-2" />
            <p>Tasks</p>
          </div>
        </Link>

        <Link href="/calendar">
          <div className="m-2 p-3 rounded-lg flex justify-between items-center">
            <BsFillCalendarWeekFill className="mr-2" />
            <p>Calendar</p>
          </div>
        </Link>

        <Link href="/notes">
          <div className="m-2 p-3 rounded-lg flex justify-between items-center">
            <MdEditNote className="mr-2" />
            <p>Notes</p>
          </div>
        </Link>

        <Link href="#">
          <div className="m-2 p-3 rounded-lg flex justify-between items-center">
            <BsMoonFill className="mr-2" />
            <p className="mr-2">Light off</p>
            <FaToggleOn className="w-8 h-5 text-[#98E1B3]" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default SideBarContent;
