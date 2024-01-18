import logo from "../assets/logo.png";
import sideopen from "../assets/sidebar-open.png";
import sideclose from "../assets/sidebar-close.png";
import profilepic from "../assets/profilepic.png";
import dashboardpic from "../assets/dashboardpic.png";
import classroompic from "../assets/classroompic.png";
import analyticspic from "../assets/analyticspic.png";
import addpic from "../assets/add.png";
import logoutpic from "../assets/logout.png";

import { useState } from "react";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(true);

  function handleClick() {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center w-[300px] h-full bg-[#12161D] border-r-[1px] border-slate-500 ">
        <div className="flex items-center p-8 w-full mb-4">
          <img src={logo} className="w-[60px] h-[50px] mr-4" alt="" />
          <span className="text-xl text-white font-bold">APyro</span>

          <img
            src={sidebar ? sideclose : sideopen}
            onClick={handleClick}
            className="ml-auto w-[32px] h-[32px]"
            alt=""
          />
        </div>

        <div className="flex p-4 w-[80%] bg-[#1A222B] rounded-lg mb-8">
          <img className="mr-2 w-[50px] h-[50px]" src={profilepic} alt="" />
          <div>
            <span className="font-semibold text-white text-lg block">
              Juan Carlos
            </span>
            <span className="text-slate-500 text-md">Educator</span>
          </div>
        </div>

        <ul className="list-none flex flex-col w-full h-full">
          <li className="flex w-full items-center px-8 py-2 bg-[#1A222B]">
            <img className="mr-2 w-[20px] h-[20px]" src={dashboardpic} alt="" />
            <span className="text-slate-400 font-bold text-lg">Dashboard</span>
          </li>

          <li className="flex w-full items-center px-8 py-2">
            <img className="mr-2 w-[20px] h-[20px]" src={classroompic} alt="" />
            <span className="text-slate-400 font-bold text-lg">Classroom</span>
          </li>

          <li className="flex w-full items-center px-8  py-2">
            <img className="mr-2 w-[20px] h-[20px]" src={analyticspic} alt="" />
            <span className="text-slate-400 font-bold text-lg">Analytics</span>
          </li>

          <li className="flex w-full items-center px-8  py-2">
            <img className="mr-2 w-[20px] h-[20px]" src={addpic} alt="" />
            <span className="text-slate-400 font-bold text-lg">Add Class</span>
          </li>
          <li className="flex w-full items-center px-8 mb-8 mt-auto">
            <img className="mr-2 w-[20px] h-[20px]" src={logoutpic} alt="" />
            <span className="text-slate-400 font-bold text-lg">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
