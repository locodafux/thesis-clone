import SideBar from "../components/SideBar";
import Class from "../components/Class";
const EducatorDashboard = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex">
        <SideBar />
        <div className="w-full h-full grid grid-cols-4 gap-4 px-8 pt-24">
          <Class />
          <Class />
          <Class />
          <Class />
        </div>
      </div>
    </>
  );
};

export default EducatorDashboard;
