import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./pages/Hero.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpSelection from "./pages/SignUpSelection.jsx";
import EducatorSignUp from "./pages/educatorSignUp.jsx";
import StudentSignUp from "./pages/StudentSignUp.jsx";
import FaceRegistration from "./pages/FaceRegistration.jsx";
import EducatorDashboard from "./pages/EducatorDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signupselection",
    element: <SignUpSelection />,
  },
  {
    path: "/educatorsignup",
    element: <EducatorSignUp />,
  },
  {
    path: "/studentsignup",
    element: <StudentSignUp />,
  },
  {
    path: "/faceregistration",
    element: <FaceRegistration />,
  },
  {
    path: "/educatordashboard",
    element: <EducatorDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
