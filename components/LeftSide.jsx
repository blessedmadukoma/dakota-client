import React from "react";

function LeftSide() {
  return (
    <section className="flex flex-col w-full h-full">
      <section className="bg-white rounded-xl mb-7 p-4 drop-shadow-md">
        <p className="text-green-800 font-bold pb-4">It's a new day Loy</p>
        <p className="text-sm text-gray-400 pb-8">
          Today is a new day, remember that you are one of the smartest coders
          on earth and only you can stop you. So gear up, let's get started
          today.
        </p>
        <p className="text-sm font-normal text-gray-500">See your progress</p>
        <div className="w-full bg-gray-200 h-1 my-2">
          <div className="bg-green-500 h-1 w-11/12"></div>
        </div>
        <p className="text-xs font-normal text-gray-400 float-right">
          Your progress in the last month
        </p>
      </section>

      <section className="bg-white rounded-xl mb-7 p-4 drop-shadow-md">
        <p className="text-sm font-semibold text-gray-500 pb-6">
          Projects in progress
        </p>

        <section className="flex justify-between">
          <div>1</div>
          <section className="text-xs font-normal text-gray-500 space-y-4">
            <section className="flex justify-between">
              <div className="flex space-x-2 mr-4">
                <input type="radio" className="" checked />
                <p>Completed</p>
              </div>
              <p className="text-green-800 font-bold">90%</p>
            </section>

            <section className="flex justify-between">
              <div className="flex space-x-2 mr-4">
                <input type="radio" className="" checked />
                <p>In Progress</p>
              </div>
              <p className="text-green-800 font-bold">50%</p>
            </section>

            <section className="flex justify-between">
              <div className="flex space-x-2 mr-4">
                <input type="radio" className="" checked />
                <p>Unread Documentation</p>
              </div>
              <p className="text-green-800 font-bold">30%</p>
            </section>
          </section>
        </section>
      </section>

      <section className="bg-white rounded-xl p-2 drop-shadow-md">
        <section className="flex bg-green-50 rounded-lg items-center p-2">
          <p className="text-green-800 font-bold w-1/2">Projects</p>
          <p className="text-green-800 font-bold w-2/2">Todo</p>
        </section>
        <div className="flex justify-between rounded-lg items-center p-2 text-sm font-medium">
          <p className="text-gray-500">Homly landing page</p>
          <p className="text-gray-500">Footer and documen...</p>
        </div>
        <div className="flex justify-between rounded-lg items-center p-2 text-sm font-medium">
          <p className="text-gray-500">Homly landing page</p>
          <p className="text-gray-500">Footer and documen...</p>
        </div>
        <div className="flex justify-between rounded-lg items-center p-2 text-sm font-medium">
          <p className="text-gray-500">Homly landing page</p>
          <p className="text-gray-500">Footer and documen...</p>
        </div>
        <div className="flex justify-between rounded-lg items-center p-2 text-sm font-medium">
          <p className="text-gray-500">Homly landing page</p>
          <p className="text-gray-500">Footer and documen...</p>
        </div>
      </section>
    </section>
  );
}

export default LeftSide;
