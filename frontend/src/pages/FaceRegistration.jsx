import OnboardingNavbar from "../components/OnboardingNavbar";
import Modal from "../components/Modal";
const FaceRegistration = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex flex-col items-center">
        <OnboardingNavbar />
        <Modal />
        <h1 className="text-white text-3xl font-bold text-center">
          Face Registration
        </h1>

        <div className="w-1/3 h-4 my-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[20%]"></div>
        </div>
        <span className="text-white text-2xl font-bold mb-4">
          Please blink your eye
        </span>

        <div className=" flex flex-col  p-10  rounded-2xl overflow-hidden min-w-[500px] w-1/3 bg-[#1A222B] justify-center items-center">
          <div className="w-[400px] h-[400px] rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default FaceRegistration;
