import { Input } from "@material-tailwind/react";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="p-14 rounded-lg border-2">
        <div className="flex space-x-5">
          <div className="flex flex-col w-72 gap-6">
            <Input color="teal" label="Class name" />
            <Input color="teal" label="Available seats" />
            <Input color="teal" label="Price" />
          </div>
          <div className="flex flex-col w-72 gap-6">
            <Input
              readOnly
              defaultValue={user?.displayName}
              color="teal"
              label="Instructor name"
            />
            <Input
              defaultValue={user?.email}
              color="teal"
              label="Instructor email"
              readOnly
            />
            <Input
              type="number"
              color="teal"
              label="Instructor telephone (optional)"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <label className="label flex justify-center">
            <span className="text-2xl">Pick a Class Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn  btn-neutral w-full mt-10">Add</button>
      </div>
    </div>
  );
};

export default AddClass;
