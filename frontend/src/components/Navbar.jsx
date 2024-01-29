import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center w-[100%] ">
      <Link to="/">
        <img src={logo} className="w-[60px] h-[50px]" alt="" />
      </Link>
      <ul className="flex   w-[100%] justify-around">
        <li className="text-xl text-[#FFFFFF]">Policies</li>
        <li className="text-xl text-[#FFFFFF]">Contact Us</li>
        <li className="text-xl text-[#FFFFFF]">Documentation</li>
        <li className="text-xl text-[#FFFFFF]">About us</li>
      </ul>
    </div>
  );
};

export default Navbar;
