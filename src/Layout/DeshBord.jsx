
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const DeshBord = () => {
    const isAdmin = true
    const {user} = useAuth()
    return (
      <>
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* //TODO: DeshBord Home page */}
          <div className="">
            <div className="md:mt-28 ms-60">
              <Outlet></Outlet>
            </div>
            <Card className="fixed top-4 border-r-8 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
              <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                  PowerAcademy Deshbord
                </Typography>
              </div>
              {isAdmin && (
                <List className="border-b-2 p-3">
                  <Link to={"/dashboard/manage-classes"}>
                    <ListItem>
                      <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Manage Classes
                    </ListItem>
                  </Link>
                  <Link to={"/dashboard/manage-users"}>
                    <ListItem>
                      <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Manage Users
                    </ListItem>
                  </Link>
                  <ListItem>
                    <ListItemPrefix>
                      <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
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
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </List>
              )}
              <List>
                <Link to={"/"}>
                  <ListItem>
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </Link>
                <ListItem>
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Settings
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </>
    );
};

export default DeshBord;