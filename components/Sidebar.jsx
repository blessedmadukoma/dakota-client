import React from "react";
import SideBarContent from "./SideBarContent";

const Sidebar = ({ children }) => {
  return (
    <section>
      <aside className="flex">
        <SideBarContent />
      </aside>
      <main className="ml-40">{children}</main>
    </section>
  );
};

export default Sidebar;
