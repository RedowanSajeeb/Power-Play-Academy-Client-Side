import { Button } from "@material-tailwind/react";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const SocialLoginShare = () => {
  const { googleSignIN } = useAuth();

  const handlerGoogle = () => {
    googleSignIN()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Button
        onClick={handlerGoogle}
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 w-80"
      >
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 w-80"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default SocialLoginShare;
