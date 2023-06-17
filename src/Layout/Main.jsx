import { Outlet } from "react-router-dom";

import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { motion, useScroll } from "framer-motion";
const Main = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
