import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center w-[100%]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="flex   w-[100%] justify-around">
        <li className="text-2xl text-[#FFFFFF]">Policies</li>
        <li className="text-2xl text-[#FFFFFF]">Contact Us</li>
        <li className="text-2xl text-[#FFFFFF]">Documentation</li>
        <li className="text-2xl text-[#FFFFFF]">About us</li>
      </ul>
    </div>
  );
};

export default Navbar;
