import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { AiOutlineMail } from 'react-icons/ai';

const Instructors = () => {
      const [axiosSecure] = useAxiosSecure();

      const { data: instructors = [], refetch } = useQuery(["AllInstructors"], {
        queryFn: async () => {
          const res = await axiosSecure.get("/classes/all/instructors");
          return res.data;
        },
      });

      console.log(instructors);
    return (
      <div>
        /all/instructors
        <div className="grid grid-cols-1 md:grid-cols-3">
          {instructors.map((instructor) => (
            <Card key={instructor._id} className="mt-6 w-96">
              <CardBody>
                <img
                  className="w-16 h-16 mb-4 rounded-lg"
                  src={instructor.instructorOPhoto}
                  alt=""
                />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {instructor?.instructorName}
                </Typography>
                <Typography className="flex items-center space-x-2">
                  <AiOutlineMail className="text-2xl"></AiOutlineMail>
                  {/* //TODO BG COLOR */}
                  <span className="text-gray-600 ">
                    {instructor.instructorEmail}
                  </span>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block border-blue-300">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    See Classes
                    <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
};

export default Instructors;