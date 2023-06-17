import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import {
  AiFillFileAdd,
  AiFillHome,
  AiOutlineAppstoreAdd,
  AiOutlineHistory,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { RiSecurePaymentFill } from "react-icons/ri";

const DeshBord = () => {
  const { user, logOutUser } = useAuth();
  // console.log(user);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // console.log(isInstructor);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const checkUserRole = (user, isAdmin, isInstructor) =>
    user && !isAdmin && !isInstructor;
  const isUser = checkUserRole(user, isAdmin, isInstructor);
  // console.log(isUser);
  const handelSignOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
        //TODO
        toast.success("hey log out successfully!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* //TODO: DeshBord Home page */}

        <div>
          <div
            animate={{ opacity: 500 }}
            className="md:mt-28 ms-60 switch-handle"
          >
            <Outlet></Outlet>
          </div>

          <Card className="fixed top-4 border-r-8 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h4" color="blue-gray">
                <h1 className="Playball">PowerAcademy Deshbord</h1>
                {/* //TODO */}

                <div className="flex w-full space-x-2 mt-3">
                  <Avatar
                    src={user?.photoURL}
                    alt="avatar"
                    variant="rounded"
                    withBorder={true}
                    color="green"
                    className="p-0.5"
                  />
                  <h1 className="mt-3 w-full ">{user?.displayName}</h1>
                </div>
              </Typography>
            </div>
            {isAdmin && (
              <List className="border-b-2 p-3">
                <Link to={"/dashboard/manage-classes"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <AiOutlineVideoCamera></AiOutlineVideoCamera>
                    </motion.div>
                    Manage Classes
                  </ListItem>
                </Link>
                <Link to={"/dashboard/manage-users"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <FaUsersCog></FaUsersCog>
                    </motion.div>
                    Manage Users
                  </ListItem>
                </Link>
                <ListItem>
                  <motion.div
                    className="me-3 text-2xl"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <ListItemPrefix>
                      <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                  </motion.div>
                  Inbox
                  <ListItemSuffix>
                    <Chip
                      value="14"
                      size="sm"
                      variant="ghost"
                      color="blue-gray"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
              </List>
            )}
            {isInstructor && (
              <List className="border-b-2 p-3">
                <Link to={"/dashboard/add-a-class"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <AiFillFileAdd></AiFillFileAdd>
                    </motion.div>
                    Add a Class
                  </ListItem>
                </Link>
                <Link to={"/dashboard/my-classes"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
                    </motion.div>
                    My Classes
                  </ListItem>
                </Link>
                <ListItem>
                  <motion.div
                    className="me-3 text-2xl"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <ListItemPrefix>
                      <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                  </motion.div>
                  Inbox
                  <ListItemSuffix>
                    <Chip
                      value="14"
                      size="sm"
                      variant="ghost"
                      color="blue-gray"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
              </List>
            )}
            {isUser && (
              <List className="border-b-2 p-3">
                <Link to={"/dashboard/my-selected-classes"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                      </ListItemPrefix>
                    </motion.div>
                    My Selected Classes
                  </ListItem>
                </Link>
                <Link to={"/dashboard/my-e-classes"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                    </motion.div>
                    My Enrolled Classes
                  </ListItem>
                </Link>

                <Link to={"/dashboard/paymenth-history"}>
                  <ListItem>
                    <motion.div
                      className="me-3 text-xl"
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <RiSecurePaymentFill></RiSecurePaymentFill>
                      <ListItemPrefix></ListItemPrefix>
                    </motion.div>
                    My Payment History <AiOutlineHistory></AiOutlineHistory>
                  </ListItem>
                </Link>
              </List>
            )}
            <List>
              <Link to={"/"}>
                <ListItem>
                  <motion.div
                    className="me-3 text-2xl"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <AiFillHome className="me-3 text-2xl"></AiFillHome>
                  </motion.div>
                  Home
                </ListItem>
              </Link>
              <ListItem disabled>
                <motion.div
                  className="me-3 text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                </motion.div>
                Profile
              </ListItem>
              <ListItem onClick={handleThemeSwitch}>
                <motion.div
                  className="me-3 text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <MdOutlineDarkMode className="me-3 text-2xl"></MdOutlineDarkMode>
                </motion.div>
                Dark
              </ListItem>
              <ListItem onClick={handelSignOut}>
                <motion.div
                  className="me-3 text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                </motion.div>
                Log Out
                <Toaster />
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DeshBord;
