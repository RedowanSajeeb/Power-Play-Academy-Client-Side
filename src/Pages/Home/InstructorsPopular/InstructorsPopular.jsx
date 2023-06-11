import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorsPopular = () => {

     const [axiosSecure] = useAxiosSecure();

     const { data: popularInstructor = [], refetch } = useQuery(["popularInstructor"],
       {
         queryFn: async () => {
           const res = await axiosSecure.get("/users/popular/instructor");
           return res.data;
         },
       }
     );

     console.log(popularInstructor);

    return (
        <div>
            
        </div>
    );
};

export default InstructorsPopular;