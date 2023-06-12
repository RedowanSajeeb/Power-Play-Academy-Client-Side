import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {classesALL.map((classA) => (
          <div key={classA._id} className="card h-[500px] glass p-5">
            <figure>
              <img className=" w-full" src={classA.classImage} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ALLClasses;
