import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useSpring, animated } from "@react-spring/web";
import { Toaster, toast } from "react-hot-toast";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // Make Instructor handler
  const handlerMakeInstructor = (id) => {
    console.log(id);

    fetch(
      `https://power-play-academy-server-side-redowansajeeb.vercel.app/users/instructors/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // TODO: handle
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("New instructor added successfully");
        }
      });
  };

  // Make Admin handler
  const handlerAdminMake = (id) => {
    fetch(
      `https://power-play-academy-server-side-redowansajeeb.vercel.app/users/admin/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // TODO: handle-admin
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("New Admin added successfully");
        }
      });
  };

  const springs = useSpring({
    from: { x: -100 },
    to: { x: 100 },
  });

  return (
    <div className="">
      <animated.div
        style={{
          ...springs,
        }}
      >
        <h1 className="text-4xl text-center mb-4">Manage Users</h1>
      </animated.div>

      <div
        className="overflow-x-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-green-100 bg-opacity-20">
            <tr>
              <th>#</th>
              <th>Users</th>
              <th>Info</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`avatar  ${
                        user.role === "admin" ? "online" : "offline"
                      }`}
                    >
                      <div
                        className={`w-16 rounded-full ${
                          user.role === "admin"
                            ? "ring ring-success ring-offset-base-100 ring-offset-2"
                            : "ring ring-primary ring-offset-base-100 ring-offset-2"
                        } `}
                      >
                        <img
                          src={user?.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">
                        {user.gender ? user.gender : "look up photo"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                  <span className="badge badge-ghost badge-sm my-3">
                    {user.Address ? user.Address : "no address provided"}
                  </span>
                  <br />
                  <span className="badge">
                    {user.phoneNumber
                      ? user.phoneNumber
                      : "+88 User not accessible "}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handlerMakeInstructor(user._id)}
                    className="btn btn-outline"
                    disabled={user.role === "instructor"}
                  >
                    Make Instructor
                    <Toaster></Toaster>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handlerAdminMake(user._id)}
                    className="btn btn-outline btn-primary"
                    disabled={user.role === "admin"}
                  >
                    Make Admin
                    <Toaster></Toaster>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
