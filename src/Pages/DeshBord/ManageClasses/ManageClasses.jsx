import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineMail } from "react-icons/ai";
import { Chip } from "@material-tailwind/react";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: admiNclassesALL = [], refetch } = useQuery(["AllClassesBYAdmin"], {
      queryFn: async () => {
        const res = await axiosSecure.get("/classes/all");
        return res.data;
      },
    });
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {admiNclassesALL.map((adminClasses, index) => (
                  <tr key={adminClasses._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="w-24 rounded-xl">
                        <img src={adminClasses.classImage} />
                      </div>
                    </td>
                    <td>{adminClasses.className}</td>
                    <td>
                      {adminClasses.instructorName}
                      <br />
                      <span>
                        {" "}
                        <AiOutlineMail></AiOutlineMail>{" "}
                        {adminClasses.instructorEmail}
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
                        </div>
                      </td>
                      <td>
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