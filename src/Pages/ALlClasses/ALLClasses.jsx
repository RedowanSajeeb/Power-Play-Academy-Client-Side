import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ALLClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classesALL = [], refetch } = useQuery(["AllClasses"], {
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/all");
      return res.data;
    },
  });

  console.log(classesALL);

  return (
    <div>
      ------classes
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {classesALL.map((classA) => (
          <Card key={classA._id} className="mt-6 w-96 ">
            {/* glass //TODO */}
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                className="w-full h-full"
                src={classA.classImage}
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody
              className={`${
                parseFloat(classA.availableSeats) <= 0 ? " text-xl  text-red-600" : ""
              }`}
              style={{
                backgroundImage: `${
                  parseFloat(classA.availableSeats) <= 0
                    ? `url('https://www.shutterstock.com/image-vector/not-available-watermark-stamp-text-260nw-522778633.jpg')`
                    : ""
                }`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgrounOpacity: "20%", 
                
              }}
            >
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {classA.className}
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Instructor: {classA.instructorName}
              </Typography>
              <h4 className="">Available seats: {classA.availableSeats}</h4>
              <h4>Price: $ {classA.price}</h4>
            </CardBody>

            <CardFooter className="pt-0 ">
              <Button
                disabled={parseFloat(classA.availableSeats) <= 0}
                className="w-full bg-green-700"
              >
                Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ALLClasses;
