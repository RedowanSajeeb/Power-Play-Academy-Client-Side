import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    link: "/edit-profile",
  },

  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    link: "/inbox",
  },
  {
    label: "Login",
    icon: LifebuoyIcon,
    link: "/login ",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const renderProfileMenuItem = ({ label, icon: Icon, link }) => {
    return (
      <MenuItem
        key={label}
        onClick={closeMenu}
        className="flex items-center gap-2 rounded"
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
        <Typography as={Link} to={link} variant="small" className="font-normal">
          {label}
        </Typography>
      </MenuItem>
    );
  };

  const { user, logOutUser } = useAuth();

  const handelSignOut = () => {
    logOutUser()
      .then(() => {
        // Sign-out successful.
        //TODO
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {user?.photoURL ? (
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src={user.photoURL}
            />
          ) : (
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            />
          )}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {renderProfileMenuItem(profileMenuItems[0])}
        {renderProfileMenuItem(profileMenuItems[1])}
        {renderProfileMenuItem(profileMenuItems[2])}
        {renderProfileMenuItem(profileMenuItems[3])}
        <button
          onClick={handelSignOut}
          className="w-full hover:bg-red-500/10 bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          {renderProfileMenuItem(profileMenuItems[4])}
        </button>
      </MenuList>
    </Menu>
  );
}
// nav list menu

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />

      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex text-base  items-center gap-2 lg:rounded-full">
          Home
        </MenuItem>
      </Typography>
      <Typography
        as={Link}
        to="/about"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex text-base  items-center gap-2 lg:rounded-full">
          About
        </MenuItem>
      </Typography>
      <Typography
        as={Link}
        to="/classes"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex text-base  items-center gap-2 lg:rounded-full">
          Classes
        </MenuItem>
      </Typography>
      <Typography
        as={Link}
        to="/dashboard"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem className="flex text-base  items-center gap-2 lg:rounded-full">
          Dashboard
        </MenuItem>
      </Typography>
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 mb-5">
      <div className="relative mx-auto max-w-screen-xl flex items-center text-blue-gray-900">
        <Typography
          as={Link}
          to="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 text-2xl"
        >
          Power Play Academy
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
