import exportPic from "../assets/export-icon.png";
const ClassMain = () => {
  return (
    <>
      <div className="w-full h-full p-8 text-white">
        <div className="bg-[#1A222B] rounded-xl w-full  flex">
          <div className="flex w-1/2 h-full flex-col gap-2 p-8">
            <h1 className="text-3xl font-bold block mt-auto mb-4">
              ART APPRECIATION
            </h1>
            <span className="font-semibold text-xl">Class Code: 153561</span>
            <span className="font-semibold text-lg">
              I -ACSSC 3:00 PM - 5:30 PM MTH
            </span>
          </div>
          <div className="w-1/2 p-8 h-full flex">
            <div className="flex flex-col ml-auto mt-auto">
              <input
                className="mb-4 bg-green-700 active:bg-green-800  rounded-lg p-2 "
                type="file"
              />
              <div className="mb-2">
                <label htmlFor="check" className="mr-3">
                  Export as
                </label>
                <input className="mr-1" id="check" type="checkbox" />
                <span className="mr-4">XLS</span>
                <input className="mr-1" id="check" type="checkbox" />
                <span>XLSX</span>
              </div>
              <button className="bg-green-700 active:bg-green-800 w-full  text-xl text-white py-2 font-bold  rounded-lg mb-3 flex justify-center gap-3 items-center">
                Export
                <img src={exportPic} alt="" className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-8 ">
          <table className="table-fixed w-full text-center border-spacing-2 border border-slate-500 border-separate">
            <thead>
              <tr>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Name
                </th>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Student ID
                </th>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Attendance Start
                </th>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Attendance End
                </th>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Time in
                </th>
                <th className="border border-slate-600 bg-slate-500 p-2">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
              <tr>
                <td className="border border-slate-600 p-2">
                  Leonardo Timkang Jr.
                </td>
                <td className="border border-slate-600 p-2">k11614947</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">8:00AM</td>
                <td className="border border-slate-600 p-2">Online</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClassMain;
