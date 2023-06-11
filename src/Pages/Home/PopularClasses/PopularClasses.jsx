import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: popularClasses = [], refetch } = useQuery(["popularClasses"], {
    queryFn: async () => {
      const res = await axiosSecure.get("/users/popular-class");
      return res.data;
    },
  });

  // console.log(popularClasses);

  return (
    <div className="mb-10 mt-10">
      <h1>PopularClasses</h1>
      {/* //TODO: text  */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10  md:mx-4">
        {popularClasses.map((top6Class) => (
          <div key={top6Class._id}>
            <Card
              shadow={false}
              className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full  rounded-none overflow-hidden  transition duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: `url(${top6Class.classImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  {top6Class.className}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  Instructor by
                </Typography>
                {top6Class?.instructorOPhoto ? (
                  <Avatar
                    size="xl"
                    variant="circular"
                    alt="candice wu"
                    className="border-2 border-white"
                    src={top6Class?.instructorOPhoto}
                  />
                ) : (
                  <Avatar
                    size="xl"
                    variant="circular"
                    alt="candice wu"
                    className="border-2 border-white"
                    src="https://lh3.googleusercontent.com/a/AAcHTtdK22NspB0B1hToSPFcFq_AG7z-ilwkz8hhSj09dQ=s96-c"
                  />
                )}
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
