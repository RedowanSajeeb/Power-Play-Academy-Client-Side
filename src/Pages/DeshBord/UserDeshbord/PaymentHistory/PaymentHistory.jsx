import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
 const {user} = useAuth()
  const { data: paymentHistoryData = [], refetch } = useQuery(
    ["AllClassesBYAdmin"],
    {
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`);
        return res.data;
      },
    }
  );
  console.log(paymentHistoryData);
  return (
    <div>
      <h1 className="text-4xl text-center"> Payment History </h1>
      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>transaction_id</th>
                <th>Pay Amount</th>
                <th>currency</th>
                <th>status</th>
                <th>Pay email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistoryData.map((i, index) => (
                <tr key={i._id}>
                  <th>{index + 1}</th>
                  <td>{i.transaction_id}</td>
                  <td className="text-right">$ {i.pay / 100}</td>
                  <td>{i.currency}</td>
                  <td className="text-green-600 font-bold">{i.status}</td>
                  <td>{i.email}</td>
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

export default PaymentHistory;
