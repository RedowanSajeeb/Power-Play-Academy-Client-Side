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
import ALLClasses from "../Pages/ALlClasses/ALLClasses";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Payment/Payment";



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
      {
        path: "/classes",
        element: <ALLClasses></ALLClasses>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DeshBord></DeshBord>
      </PrivateRoute>
    ),
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
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element : <Payment></Payment>
      },
    ],
  },
]);

export default router;
