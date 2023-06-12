import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineMail } from "react-icons/ai";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: admiNclassesALL = [], refetch } = useQuery(
    ["AllClassesBYAdmin"],
    {
      queryFn: async () => {
        const res = await axiosSecure.get("/classes/all");
        return res.data;
      },
    }
  );
  // console.log(admiNclassesALL);

  const [open, setOpen] = React.useState(false);
  const [feedbackText, setFeedbackText] = React.useState("");

  const handleOpen = () => {
    setOpen(!open);
    setFeedbackText(" ");
  };

  // handlerApproved;

  const handlerApproved = (id) => {
    console.log(id);

     fetch(`http://localhost:4000/class/approved/${id}`, {
       method: "PATCH",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         //TODO: handle-admin
         if (data.modifiedCount > 0) {
           refetch();
         }
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

  // handlerDenyd;

  const handlerDenyd = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/class/denied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //TODO: handle-admin
        if (data.modifiedCount > 0) {
          refetch();
        }
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

  console.log(admiNclassesALL); 
  return (
    <div>
      classes
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {admiNclassesALL.map((adminClasses, index) => (
                <tr key={adminClasses._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="w-24 rounded-xl">
                      <img src={adminClasses.classImage} alt="Class" />
                    </div>
                  </td>
                  <td>{adminClasses.className}</td>
                  <td>
                    {adminClasses.instructorName}
                    <br />
                    <span>
                      {" "}
                      <AiOutlineMail /> {adminClasses.instructorEmail}
                    </span>
                  </td>
                  <div className="flex flex-col justify-center items-center">
                    <td>
                      <div className="stats shadow">
                        <div className="stat flex flex-col justify-center items-center">
                          <div className="stat-title">Available seats</div>
                          <div className="stat-value">{0}</div>
                          <div className="stat-desc text-xl">
                            Price:$ {adminClasses.price}
                          </div>
                        </div>
                        <Chip
                          variant="ghost"
                          color="blue"
                          size="sm"
                          value={adminClasses.Status ? adminClasses.Status : "pending"}
                          icon={
                            <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />
                          }
                        />
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2 mr-0">
                        <Button
                          onClick={() => handlerApproved(adminClasses._id)}
                          color="green"
                        >
                          Approve
                        </Button>
                        <Button
                          onClick={() => handlerDenyd(adminClasses._id)}
                          color="red"
                        >
                          {" "}
                          Deny
                        </Button>

                        <>
                          <Button onClick={handleOpen}>feedback</Button>
                          <Dialog open={open} handler={handleOpen}>
                            <div className="flex items-center justify-between">
                              {/* //TODO  */}
                              <DialogHeader> send feedback to @</DialogHeader>
                              <XMarkIcon
                                className="mr-3 h-5 w-5"
                                onClick={handleOpen}
                              />
                            </div>
                            <DialogBody divider>
                              <div className="grid gap-6">
                                <Textarea
                                  label="send feedback"
                                  value={feedbackText}
                                  onChange={(e) =>
                                    setFeedbackText(e.target.value)
                                  }
                                />
                              </div>
                            </DialogBody>
                            <DialogFooter className="space-x-2">
                              <Button
                                variant="outlined"
                                color="red"
                                onClick={handleOpen}
                              >
                                close
                              </Button>
                              <Button
                                variant="gradient"
                                color="green"
                                onClick={() => console.log(feedbackText)}
                              >
                                send feedback
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </>
                      </div>
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
