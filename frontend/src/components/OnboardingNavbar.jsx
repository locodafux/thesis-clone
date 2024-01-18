import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const OnboardingNavbar = () => {
  return (
    <div className="w-screen p-8">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="pl-3">
          <h1 className="font-bold text-xl text-white">APyro</h1>
          <span className="font-bold text-lg text-slate-500">
            Attendance Pyro
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingNavbar;
