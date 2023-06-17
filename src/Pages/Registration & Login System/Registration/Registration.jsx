import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLoginShare from "../SocialLogin/SocialLoginShare";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";

const Registration = () => {
  const { createUser, userProfileUpdate } = useAuth();

  const [confomError, setConfomError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setConfomError("");
    if (data.password !== data.confirmPassword) {
      return setConfomError(
        "Password And confirmation password are not matching"
      );
    } else {
      createUser(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          if (user) {
            console.log(data);
            userProfileUpdate(data.name, data.photoUrl, data.phoneNumber)
              .then(() => {
                const userProfileInfoServerAdded = {
                  name: data.name,
                  email: data.email,
                  phoneNumber: data.phoneNumber,
                  photoUrl: data.photoUrl,
                  gender: data.gender,
                  Address: data.address,
                };

                fetch("https://power-play-academy-server-side-redowansajeeb.vercel.app/users", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(userProfileInfoServerAdded),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                     
                       toast.success('Your account has been created successfully')
                      navigate(from, { replace: true });
                    }
                  });

                
              })
              .catch((error) => {
                // An error occurred
                // ...
                toast.error(error.message)
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //TODO: error show korta hobe!
          console.log(errorCode, errorMessage);
           toast.error(errorMessage,errorCode);
        });
    }
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            {...register("name", { required: true })}
            size="lg"
            label="Name*"
          />
          {errors.name && (
            <span className="text-red-600">Name field is required</span>
          )}
          <Input
            {...register("email", { required: true })}
            size="lg"
            label="Email"
          />
          {errors.email && (
            <span className="text-red-600">email field is required</span>
          )}
          <div>
            <Input
              {...register("password", {
                required: true,
                minLength: 7,
                maxLength: 50,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              type="password"
              label="Password"
            />

            {errors.password?.type === "required" && (
              <span className="text-red-600 mt-4">
                Password field is required
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">password Must be 7 Length</p>
            )}

            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1 font-normal mt-2"
            >
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 flex justify-center items-center mx-2  mt-1">
                  <InformationCircleIcon className="w-4 h-full -mt-px" /> Use at
                  least one uppercase, one lowercase, one special case letter
                  and one phoneNumber.
                </p>
              )}
            </Typography>
          </div>
          <Input
            {...register("confirmPassword", { required: true })}
            type="password"
            size="lg"
            label="Confirm Password"
          />
          {errors.confirmPassword && (
            <span className="text-red-600">
              Confirm Password field is required
            </span>
          )}

          {<span className="text-red-600">{confomError}</span>}

          <Input
            {...register("photoUrl", { required: true })}
            size="lg"
            label="Photo URL"
          />
          {errors.photoUrl && (
            <span className="text-red-600">photoUrl field is required</span>
          )}

          <Input
            {...register("gender")}
            type="tel"
            size="lg"
            label="(optional) Gender"
          />
          <Input
            {...register("phoneNumber")}
            type="tel"
            size="lg"
            label="(optional) Phone Number"
          />
          <Input
            {...register("address")}
            type="tel"
            size="lg"
            label="(optional) Address"
          />
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
          <input fullWidth className="w-full" type="submit" value="Submit" />
          <Toaster></Toaster>
        </Button>
        <h1 className="text-3xl text-center mt-8 mb-4">or Contact with</h1>
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
