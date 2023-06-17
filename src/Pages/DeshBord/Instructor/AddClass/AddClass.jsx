import { Input } from "@material-tailwind/react";
import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Toaster, toast } from "react-hot-toast";
const img_hostingApi_Token = import.meta.env.VITE_imgHostingAPI;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const imgHostingAPI = `https://api.imgbb.com/1/upload?key=${img_hostingApi_Token}`;
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.classImage[0]);

    fetch(imgHostingAPI, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const classImgUrl = result?.data?.display_url;
          const addClassInfo = data;

          addClassInfo.price = parseFloat(addClassInfo.price);
          addClassInfo.availableSeats = parseFloat(addClassInfo.availableSeats);
          addClassInfo.classImage = classImgUrl;
          addClassInfo.instructorOPhoto = user?.photoURL;
          
          axiosSecure
            .post("/users/instructor/class", addClassInfo)
            .then((data) => {
              console.log("add new class", data.data);
              if (data.data.acknowledged) {
                reset();
                  toast.success('class added successfully')
                //TODO add new tost               
              }
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1 className="sora text-4xl mb-5">
        Fill out the form below to add a new class
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-14 rounded-lg border-2"
      >
        <div className="flex space-x-5">
          <div className="flex flex-col w-72 gap-6">
            <Input
              color="teal"
              label="Class name"
              {...register("className", { required: true })}
            />
            {errors.className && (
              <span className=" text-red-500">Name field is required</span>
            )}
            <Input
              color="teal"
              type="number"
              label="Available seats"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <span className=" text-red-500">
                Available Seats field is required
              </span>
            )}
            <Input
              type="number"
              color="teal"
              label="Price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className=" text-red-500">Price field is required</span>
            )}
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
            {...register("classImage", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors.classImage && (
            <span className=" text-red-500">Image field is required</span>
          )}
        </div>
        <input
          className="btn  btn-neutral w-full mt-10"
          type="submit"
          value="Add"
        />
        <Toaster></Toaster>
      </form>
    </div>
  );
};

export default AddClass;
