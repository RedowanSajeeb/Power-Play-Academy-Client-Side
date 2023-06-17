import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';

const MyEnrolledClasses = () => {
   const [axiosSecure] = useAxiosSecure();
 const {user} = useAuth()
  const { data: successfullyPaymentClass = [], refetch } = useQuery(
    ["successfullyPaymentClass"],
    {
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/successfully/${user.email}`);
        return res.data;
      },
    }
  );
  console.log(successfullyPaymentClass);

    return (
      <div>
        <div>
          <h1 className="text-4xl text-center mb-5 mt-5"> My Enrolled Classes </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Class Photo</th>
                  <th>Class Name</th>
                  <th>pay email</th>
                  <th>price</th>
                  <th>Status</th>
                  <th>Enrolled Date</th>
                </tr>
              </thead>
              <tbody>
                {successfullyPaymentClass.map((i, index) => (
                  <tr key={i._id}>
                    <th>{index + 1}</th>
                    <div className="w-28 rounded-xl">
                      <img src={i.classImage} />
                    </div>
                    <td>{i.className}</td>
                    <td>{i.email}</td>
                    <td className="text-right">$ {i.price}</td>
                    <td className="text-green-600">{i.status}</td>
                    <td>{i.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyEnrolledClasses;