import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import SocialLoginShare from "../SocialLogin/SocialLoginShare";

const Registration = () => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" w-1/4 mx-auto mt-10 mb-10"
    >
      <Typography variant="h4" color="blue-gray">
        Registration
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <div>
            <Input type="password" label="Password" />
            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1 font-normal mt-2"
            >
              <InformationCircleIcon className="w-4 h-4 -mt-px" />
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </div>
          <Input type="password" size="lg" label="Confirm Password" />
          <Input size="lg" label="Photo URL" />
          <Input size="lg" label="(optional) Gender" />
          <Input type="number" size="lg" label="(optional) Phone Number" />
          <Input type="number" size="lg" label="(optional) Address" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>

        <SocialLoginShare></SocialLoginShare>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Registration;
