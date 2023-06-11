import { Input } from "@material-tailwind/react";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const { user } = useAuth();

   const {
     register,
     handleSubmit,
  
     formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-14 rounded-lg border-2"
      >
        <div className="flex space-x-5">
          <div className="flex flex-col w-72 gap-6">
            <Input color="teal" label="Class name" {...register("className")} />
            <Input
              color="teal"
              type="number"
              label="Available seats"
              {...register("availableSeats")}
            />
            <Input type="number" color="teal" label="Price" {...register("price")} />
          </div>
          <div className="flex flex-col w-72 gap-6">
            <Input
              readOnly
              value={user?.displayName}
              color="teal"
              label="Instructor name"
              {...register("instructorName")}
            />
            <Input
              value={user?.email}
              color="teal"
              label="Instructor email"
              readOnly
              {...register("instructorEmail")}
            />
            <Input
              type="number"
              color="teal"
              label="Instructor PhoneNumber (optional)"
              {...register("instructorPhoneNumber")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <label className="label flex justify-center">
            <span className="text-2xl">Pick a Class Image</span>
          </label>
          <input
            {...register("classImage")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn  btn-neutral w-full mt-10"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddClass;
