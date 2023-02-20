import React from "react";
import Link from "next/link";
import { MdDashboard, MdEditNote } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsMoonFill } from "react-icons/bs";

const SideBarContent = () => {
  return (
    <div className="h-screen w-72 p-8 bg-[#036666] border-r-[1px] flex flex-col justify-between">
      <section className="flex flex-col  text-white font-light">
        <Link href="/">
          <div className="text-white p-3 rounded-lg inline-block">
            {/* <RxSketchLogo /> */}
            <span className="text-5xl">
              Dokata
            </span>
          </div>
        </Link>
        <div className="mt-10">
        <Link href="/">
          <div className="bg-[#CCF1DA] text-[#036666] font-semibold m-2 p-3 rounded-xl shadow-lg flex  items-center">
            <MdDashboard className="mr-2" />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link href="/projects">
          <div className="m-2 p-3 rounded-lg flex  items-center">
            <AiOutlineFundProjectionScreen className="mr-2" />
            <p>Projects</p>
          </div>
        </Link>

        <Link href="/tasks">
          <div className="m-2 p-3 rounded-lg flex  items-center">
            <BiTask className="mr-2" />
            <p>Tasks</p>
          </div>
        </Link>

        <Link href="/calendar">
          <div className="m-2 p-3 rounded-lg flex  items-center">
            <BsFillCalendarWeekFill className="mr-2" />
            <p>Calendar</p>
          </div>
        </Link>

        <Link href="/notes">
          <div className="m-2 p-3 rounded-lg flex  items-center">
            <MdEditNote className="mr-2" />
            <p>Notes</p>
          </div>
        </Link>

        <Link href="#">
          <div className="m-2 p-3 rounded-lg flex  items-center">
            <BsMoonFill className="mr-2" />
            <p className="mr-2">Light off</p>
            <FaToggleOn className="w-8 h-5 text-[#98E1B3]" />
          </div>
        </Link>
        </div>
      </section>
    </div>
  );
};

export default SideBarContent;
