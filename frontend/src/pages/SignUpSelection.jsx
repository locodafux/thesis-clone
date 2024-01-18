import OnboardingNavbar from "../components/OnboardingNavbar";
import photo from "../assets/signSelectPhoto.png";
import { Link } from "react-router-dom";
const SignUpSelection = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex flex-col items-center">
        <OnboardingNavbar />

        <div className="mt-3 flex flex-col items-center  p-3  rounded-2xl overflow-hidden w-[425px] bg-[#1A222B]">
          <img className="block mb-2" src={photo} alt="photo" />
          <h1 className="text-white text-3xl font-bold text-center mb-1">
            APyro
          </h1>
          <span className="text-white text-lg font-semibold text-center mb-3">
            Attendance Pyro
          </span>

          <div className="w-[75%] mb-3">
            <span className="text-white  text-md">Select Sign Up</span>

            <Link to="/educatorsignup">
              <button className="bg-blue-500 active:bg-blue-600  text-lg text-white py-1 font-semibold w-[100%] rounded-lg my-3">
                Educator
              </button>
            </Link>
            <Link to="/studentsignup">
              <button className="bg-blue-500 active:bg-blue-600  text-lg text-white py-1 font-semibold w-[100%] rounded-lg mb-3">
                Student
              </button>
            </Link>
          </div>

          <span className="text-white text-md">Already have an Account?</span>
          <button className="font-bold text-blue-500 text-lg ">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default SignUpSelection;
