import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>        
        </div>
    );
};

export default Main;