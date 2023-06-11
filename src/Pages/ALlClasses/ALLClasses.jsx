import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ALLClasses = () => {
     const [axiosSecure] = useAxiosSecure();

     const { data: classesALL = [], refetch } = useQuery(
       ["AllClasses"],
       {
         queryFn: async () => {
           const res = await axiosSecure.get("classes/all");
           return res.data;
         },
       }
     );

     console.log(classesALL);

    return (
        <div>
           
        </div>
    );
};

export default ALLClasses;