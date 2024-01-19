import SideBar from "./components/SideBar.jsx";

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
