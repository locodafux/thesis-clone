import SideBar from "./components/SideBar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ children }) {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default App;
