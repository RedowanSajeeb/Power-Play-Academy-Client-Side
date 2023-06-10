import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  //make Instructor handler
  const  handlerMakeInstructor = (id) =>{
    console.log(id);

     fetch(`http://localhost:4000/users/instructors/${id}`, {
       method: "PATCH",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         //TODO: handle

         //  if (data.modifiedCount) {
         // //    refetch();
         //    Swal.fire({
         //      position: "top-center",
         //      icon: "success",
         //      title: `${user.name} is an now authenticated!`,
         //      showConfirmButton: false,
         //      timer: 1500,
         //    });
         //  }
       });
  }
// handlerAdminMake

const handlerAdminMake = (id) => {

    fetch(`http://localhost:4000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //TODO: handle-admin

        //  if (data.modifiedCount) {
        // //    refetch();
        //    Swal.fire({
        //      position: "top-center",
        //      icon: "success",
        //      title: `${user.name} is an now authenticated!`,
        //      showConfirmButton: false,
        //      timer: 1500,
        //    });
        //  }
      });

};

  return (
    <div className="">
      <div className="overflow-x-auto">
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
                        user.role == "admin"
                          ? "online"
                          : "offline" && user.role == "instructor"
                          ? "online"
                          : ""
                      }`}
                    >
                      <div
                        className={`w-16 rounded-full ${
                          user.role == "admin"
                            ? " ring  ring-success ring-offset-base-100 ring-offset-2"
                            : "ring ring-primary ring-offset-base-100 ring-offset-2" &&
                              user.role == "instructor"
                            ? "ring ring-primary ring-offset-base-100 ring-offset-2"
                            : ""
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
                  >
                    Make Instructor
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handlerAdminMake(user._id)}
                    className="btn btn-outline btn-primary"
                  >
                    Make Admin
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
