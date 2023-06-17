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
import MySelectedClasses from "../Pages/DeshBord/UserDeshbord/MySelectedClasses/MySelectedClasses";
import AdminRout from "./AdminRout";
import PaymentHistory from "../Pages/DeshBord/UserDeshbord/PaymentHistory/PaymentHistory";
import MyEnrolledClasses from "../Pages/DeshBord/UserDeshbord/MyEnrolledClasses/MyEnrolledClasses";
import WelcomeHome from "../Pages/DeshBord/WelcomeHome";



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
        path: "/dashboard", // Update the path to be relative
        element: <WelcomeHome></WelcomeHome>,
      },
      {
        path: "manage-users", // Update the path to be relative
        element: (
          <AdminRout>
            <ManageUsers></ManageUsers>
          </AdminRout>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRout>
            <ManageClasses></ManageClasses>
          </AdminRout>
        ),
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
        element: <Payment></Payment>,
      },
      {
        path: "my-selected-classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "paymenth-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "my-e-classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);

export default router;
