import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Registration from "../Pages/Registration & Login System/Registration/Registration";
import Login from "../Pages/Registration & Login System/Login/Login";
import DeshBord from "../Layout/DeshBord";
import ManageUsers from "../Pages/DeshBord/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/DeshBord/ManageClasses/ManageClasses";
import AddClass from "../Pages/DeshBord/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/DeshBord/Instructor/MyClasses/MyClasses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DeshBord></DeshBord>,
    children: [
      {
        path: "manage-users", // Update the path to be relative
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "add-a-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>
      },
    ],
  },
]);

export default router;
