import SideBar from "../components/SideBar";
import Class from "../components/Class";
const EducatorClassroom = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-4 gap-4 px-8 pt-24">
        <Class />
        <Class />
        <Class />
        <Class />
      </div>
    </>
  );
};

export default EducatorClassroom;
