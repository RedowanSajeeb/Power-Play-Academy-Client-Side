import React, { useState, useEffect } from "react";
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
import useAuth from "../../Hooks/useAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const ALLClasses = () => {
  const [rolechak, setRolechak] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: classesALL = [], refetch } = useQuery(["AllClasses"], {
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/all");
      return res.data;
    },
  });

  const { user } = useAuth();
  const { data: role = [] } = useQuery(["AllRole"], {
    queryFn: async () => {
      const res = await axiosSecure.get("/classes/role/instructor");
      return res.data;
    },
  });

  useEffect(() => {
    const foundRole = role.find((rl) => rl.email === user?.email);
    if (foundRole) {
      setRolechak(true);
    }
  }, [role, user]);

  // console.log(rolechak);

 
const handlerSelect = (SelectItm) => {
  console.log(SelectItm);
  const  { availableSeats, _id, classImage, className, price } = SelectItm
  const selectClasses = {
    availableSeats,
    selectID: _id,
    classImage,
    className,
    price,
    email: user?.email,
  };

  if (user && user.email) {
    fetch("https://power-play-academy-server-side-redowansajeeb.vercel.app/select/classes", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(selectClasses),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your selected class was successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  } else {
    Swal.fire({
      title: "You are not allowed",
      text: "You cannot add this item at first login and try again",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: { from: location } });
      }
    });
  }
};


  return (
    <div className="mt-10 mb-20">
      <h1 className="text-center text-4xl mt-10 mb-10">All Class</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {classesALL.map((classA) => (
          <Card
            key={classA._id}
            className="mt-6 w-96 hover:scale-90 duration-700 "
          >
            {/* glass //TODO */}
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                className="w-full h-full hover:scale-125 duration-1000"
                src={classA.classImage}
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody
              className={`${
                parseFloat(classA.availableSeats) <= 0
                  ? " text-lg  text-gray-700"
                  : ""
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
                backgroundOpacity: "20%",
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
                onClick={() => handlerSelect(classA)}
                disabled={
                  rolechak == true || parseFloat(classA.availableSeats) <= 0
                }
                className={`w-full ${
                  parseFloat(classA.availableSeats) <= 0
                    ? "bg-green-500"
                    : "bg-green-700"
                }`}
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
