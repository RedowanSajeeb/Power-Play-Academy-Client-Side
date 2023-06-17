import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const InstructorsPopular = () => {

     const [axiosSecure] = useAxiosSecure();

     const { data: popularInstructor = [], refetch } = useQuery(["popularInstructor"],
       {
         queryFn: async () => {
           const res = await axiosSecure.get("/users/popular/instructor");
           return res.data;
         },
       }
     );

     console.log(popularInstructor);

    return (
      <div className="md:mt-32 mb-10">
        <div>
          <h1 className="text-center text-4xl md:text-5xl mb-10 md:mt sora  ">
            Popular Instructor
          </h1>
        </div>
        {/* -----//TODO------ */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-x-10 max-w-6xl mx-auto">
          {popularInstructor.map((instructor) => (
            <div
              key={instructor._id}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card className="w-96 hover:scale-90 duration-700 ">
                <CardHeader floated={false} className="h-80">
                  <img
                    className="w-full hover:scale-125 duration-1000 "
                    src={instructor.instructorOPhoto}
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {instructor.instructorName}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      {/* //todo */}
                      <AiFillFacebook className="text-gray-900 text-4xl"></AiFillFacebook>
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <AiFillTwitterCircle className="text-gray-900 text-4xl"></AiFillTwitterCircle>
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      {/* //todo */}
                      <AiOutlineInstagram className="text-gray-900 text-4xl"></AiOutlineInstagram>
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default InstructorsPopular;