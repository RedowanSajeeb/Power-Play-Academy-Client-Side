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
import HadingText from "../../../Components/HadingText";
import { motion } from "framer-motion";
const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: popularClasses = [], refetch } = useQuery(["popularClasses"], {
    queryFn: async () => {
      const res = await axiosSecure.get("/users/popular-class");
      return res.data;
    },
  });

  // console.log(popularClasses);
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2, 3].map((index) => (
        <motion.li key={index} className="item" variants={item} />
      ))}
      <div className="mb-10 mt-10 ms-3 me-3 overflow-x-hidden">
        {/* <HadingText firstText={"Top 6 Popular Classes"}></HadingText> */}
        <div>
          <h1 className="text-center text-4xl md:text-5xl mb-5 sora">
            Popular Classes
          </h1>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10  md:mx-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
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
                  className="absolute inset-0 m-0 h-full  rounded-none overflow-hidden  hover:scale-90 duration-700"
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
                  <div
                    variant="h5"
                    color="white"
                    className="mb-6 font-medium  text-white"
                  >
                    Enrolled:{" "}
                    {top6Class.enrolledStudents
                      ? top6Class.enrolledStudents
                      : 0}
                  </div>
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
    </motion.ul>
  );
};

export default PopularClasses;
