import OnboardingNavbar from "../components/OnboardingNavbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const EducatorSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [university, setUniversity] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/educatorclassroom");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          firstName,
          lastName,
          email,
          contactNumber,
          university,
          idNumber,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/educatorclassroom");
      } catch (err) {
        console.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <div className=" bg-[#12161D] flex flex-col items-center">
        <OnboardingNavbar />
        <div className=" flex flex-col  p-5  rounded-2xl overflow-hidden w-[425px] bg-[#1A222B]">
          <h1 className="text-white text-2xl font-bold  mb-1">Sign Up</h1>
          <span className="text-white text-sm mb-5">
            Enter your following details to create an account:
          </span>
          <form onSubmit={submitHandler} action="">
            <div className="w-[100%] flex ">
              <div className="relative w-1/2 mb-4 mr-3">
                <label
                  className="absolute top-1 left-2 text-slate-500 text-sm"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="relative w-1/2 mb-4">
                <label
                  className="absolute top-1 left-2 text-slate-500 text-sm"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="relative w-[100%] mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative w-[100%] mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="contactNumber"
              >
                Contact Number
              </label>
              <input
                id="contactNumber"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            <div className="relative w-[100%] mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="university"
              >
                University/Organization
              </label>
              <input
                id="university"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>

            <div className="relative w-[100%] mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="idNumber"
              >
                ID Number
              </label>
              <input
                id="idNumber"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>

            <div className="w-[100%] flex ">
              <div className="relative w-1/2 mb-4 mr-3">
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="relative w-1/2 mb-4">
                <label
                  className="absolute top-1 left-2 text-slate-500 text-sm"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-[100%] justify-between mb-3">
              <div className="flex">
                <input type="checkbox" className="w-[18px]" />
                <span className=" ml-3 mr-1 text-white">
                  I agree with APyro
                </span>
                <button className="text-blue-500">terms and condition</button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 active:bg-blue-600  text-xl text-white py-2 font-bold w-[100%] rounded-lg mb-3"
            >
              Register
            </button>
          </form>
          <div className="flex w-[100%] justify-center mb-3">
            <div className="flex">
              <span className=" mr-1 text-white">Already have an account?</span>
              <Link to="/login">
                <button className="text-blue-500">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducatorSignUp;
