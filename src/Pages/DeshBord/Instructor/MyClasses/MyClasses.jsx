import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { Chip, IconButton, Tooltip } from "@material-tailwind/react";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: classes = [], refetch } = useQuery({
    enabled: !loading,
    queryKey: ["isInstructorClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/instructor/class/${user.email}`
      );

      // console.log("this is Instructor");
      return res.data;
    },
  });

  console.log(classes);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th>Class name</th>
            <th>Available seats</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem, indx) => (
            <tr key={classItem.id}>
              <th>{indx + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar w-28">
                    <div className="rounded">
                      <img className="rounded-md" src={classItem.classImage} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{classItem.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {classItem.className}
                <br />
              </td>
              <td>
                <h1 className="text-center">{classItem.availableSeats}</h1>
              </td>
              <th>
                <h1 className="text-right ">$ {classItem.price}</h1>
              </th>
              <div className="flex flex-col justify-center">
                <th>
                  <div className="flex gap-2">
                    <Chip
                      variant="ghost"
                      color="blue"
                      size="sm"
                      value="pending"
                      icon={
                        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />
                      }
                    />
                    <Chip
                      variant="ghost"
                      color="green"
                      size="sm"
                      value="approved"
                      icon={
                        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />
                      }
                    />
                    <Chip
                      variant="ghost"
                      color="red"
                      size="sm"
                      value="denied"
                      icon={
                        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900" />
                      }
                    />
                  </div>
                </th>
                <th>
                  <div className="stats shadow">
                    <div className="stat flex flex-col justify-center items-center">
                      <div className="stat-title">Total Enrolled</div>
                      <div className="stat-value">{0}</div>
                      {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                  </div>
                </th>
                <th>
                  <div>
                    <Chip variant="gradient" value="chip gradient" />
                    <Chip
                      className="mt-2"
                      variant="outlined"
                      value="chip outlined"
                    />
                  </div>
                </th>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
