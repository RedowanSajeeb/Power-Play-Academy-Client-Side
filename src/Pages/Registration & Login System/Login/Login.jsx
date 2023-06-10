import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SocialLoginShare from "../SocialLogin/SocialLoginShare";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {
  const {loginUserEmail} =useAuth()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    loginUserEmail(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //TODO: SUCCESS message tost
        console.log(user);
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        //TODO: Error message should be something other than error 
      });
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className=" w-1/4 mx-auto mt-10 mb-10"
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            {...register("email", { required: true })}
            size="lg"
            label="Email"
          />
          {errors.email && (
            <span className="text-red-600">Name field is required</span>
          )}
          <Input
            {...register("password", { required: true })}
            type="password"
            size="lg"
            label="Password"
          />
          {errors.password && (
            <span className="text-red-600">email field is required</span>
          )}
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
          <input fullWidth className="w-full" type="submit" value="Login" />
        </Button>

        <SocialLoginShare></SocialLoginShare>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/registration"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Login;
