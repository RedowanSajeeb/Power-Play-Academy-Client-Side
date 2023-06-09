import { Button } from "@material-tailwind/react";

import {ArrowPathIcon,} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Error = () => {
    return (
      <div>
        <img
          className=" w-1/2 mx-auto"
          src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
          alt=""
        />

        <Link to={"/"}>
          
          <Button
            variant="outlined"
            className="flex justify-center w-full items-center gap-3"
          >
            back To Home Bro
            <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    );
};

export default Error;