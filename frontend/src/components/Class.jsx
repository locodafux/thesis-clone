import bin from "../assets/icons8-bin-32.png";
import pencil from "../assets/icons8-pencil-32.png";
import folderpic from "../assets/folder.png";
import { Link } from "react-router-dom";
const Class = () => {
  return (
    <>
      <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 h-[300px] overflow-hidden  rounded-xl">
        <div className=" p-4 w-full bg-[#222B33]">
          <Link to="/classmain">
            <span className="font-bold text-xl text-white block">
              Class name
            </span>
          </Link>
          <span className="font-semibold     text-lg text-slate-400 block">
            Section and schedule
          </span>
          <span className=" text-md text-slate-400 block">Professor name</span>
        </div>
        <div className="relative h-[200px] bg-[#1A222B]">
          <div className="absolute bottom-0 h-[100px] border-t-2 border-[#222B33] w-full flex items-center justify-between">
            <button className="text-md flex items-center border-2 p-2 rounded-lg text-slate-400 m-4 border-slate-400 active:bg-slate-400 active:text-black">
              <img className="mr-2" src={folderpic} alt="" /> Show Details
            </button>
            <div className="flex mx-4">
              <Link to="/editclass">
                <img className="w-[28px] h-[28px] mr-4" src={pencil} alt="" />
              </Link>
              <img className="w-[28px] h-[28px]" src={bin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
