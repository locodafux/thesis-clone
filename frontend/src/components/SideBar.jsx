import logo from "../assets/logo.png";
import sideopen from "../assets/sidebar-open.png";
import sideclose from "../assets/sidebar-close.png";
import profilepic from "../assets/profilepic.png";
import dashboardpic from "../assets/dashboardpic.png";
import classroompic from "../assets/classroompic.png";
import analyticspic from "../assets/analyticspic.png";
import addpic from "../assets/addpic.png";
import logoutpic from "../assets/logout.png";
import joinpic from "../assets/joinpic.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { useState } from "react";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  function handleClick() {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }
  return (
    <>
      {sidebar ? (
        <div className="flex flex-col items-center w-[300px] h-[100%] bg-[#12161D] border-r-[1px] border-slate-500 ">
          <div className="flex items-center p-8 w-full mb-8">
            <Link to="/educatorclassroom">
              <img src={logo} className="w-[70px] h-[60px] mr-4" alt="" />
            </Link>
            <span className="text-xl text-white font-bold">APyro</span>
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
            <Link to="/educatordashboard">
              <li className="flex w-full items-center px-8 py-2 bg-[#1A222B]">
                <img
                  className="mr-2 w-[20px] h-[20px]"
                  src={dashboardpic}
                  alt=""
                />
                <span className="text-slate-400 font-bold text-lg">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="/educatorclassroom">
              <li className="flex w-full items-center px-8 py-2">
                <img
                  className="mr-2 w-[20px] h-[20px]"
                  src={classroompic}
                  alt=""
                />
                <span className="text-slate-400 font-bold text-lg">
                  Classroom
                </span>
              </li>
            </Link>

            <li className="flex w-full items-center px-8  py-2">
              <img
                className="mr-2 w-[20px] h-[20px]"
                src={analyticspic}
                alt=""
              />
              <span className="text-slate-400 font-bold text-lg">
                Analytics
              </span>
            </li>
            <Link to="/createclass">
              <li className="flex w-full items-center px-8  py-2">
                <img className="mr-2 w-[20px] h-[20px]" src={addpic} alt="" />
                <span className="text-slate-400 font-bold text-lg">
                  Create Class
                </span>
              </li>
            </Link>

            <Link to="/joinclass">
              <li className="flex w-full items-center px-8  py-2">
                <img className="mr-2 w-[20px] h-[20px]" src={joinpic} alt="" />
                <span className="text-slate-400 font-bold text-lg">
                  Join Class
                </span>
              </li>
            </Link>

            <li className="flex w-full items-center px-8 mb-8 mt-auto">
              <button onClick={logoutHandler}>
                <img
                  className="mr-2 w-[20px] h-[20px]"
                  src={logoutpic}
                  alt=""
                />
                <span className="text-slate-400 font-bold text-lg">Logout</span>
              </button>
            </li>

            <li className="flex w-full items-center px-8 mb-8 ">
              <img
                src={sidebar ? sideclose : sideopen}
                onClick={handleClick}
                className="ml-auto w-[32px] h-[32px]"
                alt=""
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center w-[110px] h-full bg-[#12161D] border-r-[1px] border-slate-500 ">
          <div className="flex items-center justify-center   my-4">
            <Link to="/educatorclassroom">
              <img src={logo} className="w-[36px] h-[32px]" alt="" />
            </Link>
          </div>

          <div className="flex flex-col items-center   mb-4">
            <img className=" w-[32px] h-[32px]" src={profilepic} alt="" />
            <span className="text-slate-500">Profile</span>
          </div>

          <ul className="list-none flex items-center flex-col w-full h-full">
            <Link to="/educatordashboard">
              <li className="flex flex-col items-center  py-2">
                <img className=" w-[32px] h-[32px]" src={dashboardpic} alt="" />
                <span className="text-slate-500">Dashboard</span>
              </li>
            </Link>

            <Link to="/educatorclassroom">
              <li className="flex flex-col items-center  py-2">
                <img className=" w-[32px] h-[32px]" src={classroompic} alt="" />
                <span className="text-slate-500">Classroom</span>
              </li>
            </Link>

            <li className="flex flex-col items-center  py-2">
              <img className="w-[32px] h-[32px]" src={analyticspic} alt="" />
              <span className="text-slate-500">Analytics</span>
            </li>

            <Link to="/createclass">
              <li className="flex flex-col items-center  py-2">
                <img className=" w-[32px] h-[32px]" src={addpic} alt="" />
                <span className="text-slate-500">Create Class</span>
              </li>
            </Link>

            <Link to="/joinclass">
              <li className="flex flex-col items-center  py-2">
                <img className=" w-[32px] h-[32px]" src={joinpic} alt="" />
                <span className="text-slate-500">Join Class</span>
              </li>
            </Link>
            <li
              className="flex flex-col items-center mb-8 mt-auto"
              onClick={logoutHandler}
            >
              <img className=" w-[32px] h-[32px]" src={logoutpic} alt="" />
              <span className="text-slate-500">Logout</span>
            </li>
            <li
              className="flex flex-col items-center mb-8 "
              onClick={handleClick}
            >
              <img
                src={sidebar ? sideclose : sideopen}
                className=" w-[32px] h-[32px]"
                alt=""
              />
              <span className="text-slate-500">Expand</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
