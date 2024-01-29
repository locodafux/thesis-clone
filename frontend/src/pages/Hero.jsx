import Navbar from "../components/Navbar";
import heroPhoto from "../assets/hero-photo.png";
import { Link } from "react-router-dom";
Navbar;

const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] p-20">
        <Navbar />
        <div className="w-[100%] flex justify-center py-20">
          <div className="w-[70%] flex">
            <div className=" flex flex-col items-center md:w-3/2  sm:w-[100%] text-center blg ">
              <h1 className="pt-10  text-white text-5xl font-bold block">
                Welcome to
                <span className="block text-[#39A7FF] text-5xl font-bold">
                  APyro
                </span>
              </h1>

              <div className="w-1/2 my-10">
                <span className="text-xl text-white w-[50%] ">
                  "Empowering HyFlex Learning: Modern Attendance Management for
                  Hybrid Education."
                </span>
              </div>

              <div className="w-[50%] md:flex justify-center   ">
                <Link to="/login">
                  <button className="font-bold h-[45px] md:mr-3 sm:mb-3 lg:mb-0 xl:mb-0 text-white  bg-blue-500 active:bg-blue-600  hover:bg-blue-900 rounded-md w-[145px]">
                    Login
                  </button>{" "}
                </Link>

                <Link to="/signupselection">
                  <button className="font-bold h-[45px] text-white  border-2 hover:bg-blue-500 border-blue-500 active:bg-blue-600  rounded-md w-[145px]">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-1/2 sm-hidden md:hidden lg:hidden xl:block w-full">
              <img src={heroPhoto} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
