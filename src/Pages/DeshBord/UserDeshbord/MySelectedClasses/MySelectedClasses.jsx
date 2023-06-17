import React from "react";
import useSelect from "../../../../Hooks/useSelect";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [selectClass, refetch, error] = useSelect();

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if there is an error
  }

  console.log(selectClass);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="mb-8">
            <tr>
              <th>#</th>
              <th>Class Photo</th>
              <th>Class Name & price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(selectClass) && // Add a check to ensure selectClass is an array
              selectClass.map((siClass, idx) => (
                <tr key={siClass._id} className="hover">
                  <th>{idx + 1}</th>
                  <div className="w-32 rounded">
                    <img src={siClass.classImage} />
                  </div>
                  <td>
                    {siClass.className}
                    <br />
                    <span className="text-right">Price: $ {siClass.price}</span>
                  </td>
                  <td>
                    <Button variant="outlined">Delete</Button>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/payment?classId=${siClass.selectID
                      }&classData=${JSON.stringify(siClass)}`}
                    >
                      <Button className="text-md" color="green">
                        Pay Now 💾
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
