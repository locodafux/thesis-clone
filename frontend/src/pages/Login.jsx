import OnboardingNavbar from "../components/OnboardingNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import loginPhoto from "../assets/login.png";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/educatorclassroom");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/educatorclassroom");
    } catch (err) {
      console.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex flex-col items-center">
        <OnboardingNavbar />
        <div className="mt-3 flex  rounded-2xl overflow-hidden ">
          <div className="sm:hidden lg:block ">
            <img className="w-[450px] h-[500px]" src={loginPhoto} alt="" />
          </div>
          <div className="w-[450px] py-5 bg-[#1A222B] flex flex-col justify-center sm:items-center ">
            <h1 className="text-3xl text-white font-bold">
              Log in your account
            </h1>
            <span className=" block text-lg text-white font-bold mb-5">
              Welcome back!
            </span>
            <form onSubmit={submitHandler} className="w-[75%]">
              <div className="relative  mb-4">
                <label
                  className="absolute top-1 left-2 text-slate-500 text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="relative mb-4">
                <label
                  className="absolute top-1 left-2 text-slate-500 text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              {/* <div className="flex w-full justify-between mb-3">
                <div className="flex">
                  <input type="checkbox" className="w-[18px]" />
                  <span className=" ml-3 text-white">Remember me</span>
                </div>
                <button className="text-blue-500">Forgot Password?</button>
              </div> */}

              <input
                type="submit"
                className="bg-blue-500 active:bg-blue-600 w-full  text-xl text-white py-2 font-bold  rounded-lg mb-3"
                value="Log in"
              />
            </form>
            <div className="flex text-md w-[75%] justify-center">
              <span className="text-white mr-2">Dont have an Account? </span>
              <span className="text-blue-500">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
