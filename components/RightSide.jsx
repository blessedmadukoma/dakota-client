import React from "react";
import { BsFillClockFill } from "react-icons/bs";

const RightSide = () => {
  return (
    <section className="flex flex-col  h-full w-full">
      <section className="bg-green-700 rounded-xl mb-7 p-5 drop-shadow-md space-x-4 items-center text-white">
        <div className="flex space-x-4">
          <BsFillClockFill className="text-white self-start mt-1" />
          <div>
            <p className="font-normal text-md tracking-wide">
              Call Azure Client
            </p>
            <span className="text-orange-400 mr-4 text-sm tracking-wide">
              Today, 2 P.M
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-4 drop-shadow-md space-x-4 text-green-700">
        <section className="flex justify-evenly space-x-2">
          <div className="flex flex-col text-center bg-gray-100 p-3 rounded-xl">
            <span className="text-xl font-normal">1</span>
            <span className="text-sm font-medium tracking-wide">Mon</span>
          </div>

          <div className="flex flex-col text-center bg-gray-100 p-3 rounded-xl">
            <span className="text-xl font-normal">2</span>
            <span className="text-sm font-medium tracking-wide">Tue</span>
          </div>

          <div className="flex flex-col text-center bg-green-700 p-3 rounded-xl text-white">
            <span className="text-xl font-normal">3</span>
            <span className="text-sm font-medium tracking-wide">Wed</span>
          </div>

          <div className="flex flex-col text-center bg-gray-100 p-3 rounded-xl">
            <span className="text-xl font-normal">4</span>
            <span className="text-sm font-medium tracking-wide">Thu</span>
          </div>

          <div className="flex flex-col text-center bg-gray-100 p-3 rounded-xl">
            <span className="text-xl font-normal">5</span>
            <span className="text-sm font-medium tracking-wide">Fri</span>
          </div>
        </section>

        <section className="mt-12 space-y-10">
          <div>
            <span className="text-md font-medium tracking-wide">08 am</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>
          
          <div>
            <span className="text-md font-medium tracking-wide">09 am</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>

          <div>
            <span className="text-md font-medium tracking-wide">10 am</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>

          <div>
            <span className="text-md font-medium tracking-wide">11 am</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>

          <div>
            <span className="text-md font-medium tracking-wide">12 pm</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>

          <div className="pb-6">
            <span className="text-md font-medium tracking-wide">01 pm</span>
            <hr className="border-dashed border-green-200 tracking-widest" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default RightSide;
