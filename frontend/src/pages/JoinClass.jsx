import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
const JoinClass = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="min-w-[500px] bg-[#1A222B] rounded-xl p-8 flex sm:justify-center">
          <div className="lg:w-3/4 xl:w=3/4 sm:w-3/4 text-center">
            <h1 className="text-white text-2xl font-bold mb-1">Join Class</h1>
            <p className="text-slate-500 font-semibold text-lg mb-4">
              Enter the code your teacher shared
            </p>
            <div className="relative mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="className"
              >
                Class code
              </label>
              <input
                id="className"
                className="bg-[#212529] border-2 border-slate-500 w-full h-[50px] px-2 pt-3 text-white   rounded-md"
                type="text"
              />
            </div>
            <Link to="/educatordashboard" className="w-[75%]">
              <button className="bg-green-700 active:bg-green-800 w-full  text-xl text-white py-2 font-bold  rounded-lg mb-3">
                Create class
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinClass;
