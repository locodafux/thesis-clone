import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./pages/Hero.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignUpSelection from "./pages/SignUpSelection.jsx";
import EducatorSignUp from "./pages/educatorSignUp.jsx";
import StudentSignUp from "./pages/StudentSignUp.jsx";
import FaceRegistration from "./pages/FaceRegistration.jsx";
import EducatorClassroom from "./pages/EducatorClassroom.jsx";
import CreateClass from "./pages/CreateClass.jsx";
import JoinClass from "./pages/JoinClass.jsx";
import App from "./App.jsx";

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
    path: "/educatorclassroom",
    element: (
      <App>
        <EducatorClassroom />
      </App>
    ),
  },
  {
    path: "/createclass",
    element: (
      <App>
        <CreateClass />
      </App>
    ),
  },
  {
    path: "/joinclass",
    element: (
      <App>
        <JoinClass />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
