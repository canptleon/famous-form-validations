import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  id: number;
}

function ReactHookForm(props: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert("Form submitted successfully!");
    console.log("React Hook Form Values:", data);
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center">
      <div className="w-full p-8 [background-size:1003px] [box-shadow:inset_0px_0px_13px_1px_#01010130] bg-center border-[3px] border-[solid] border-[white] [filter:drop-shadow(0px_0px_11px_white)] rounded-[20px] bg-[linear-gradient(to_right,_#6ba5d1,_#71a1dc,_#829be3,_#9a92e5,_#b587e0,_#b779d7,_#ba69cd,_#bd58c1,_#a644b8,_#8e30b0,_#731ba8,_#5503a1)]">
        <h2 className="text-lg font-semibold mb-6 text-center !text-white">
          Registration Form (React Hook Form)
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
              })}
              id="name"
              placeholder="Enter your name"
              className={`mt-1 block w-full p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{String(errors.name.message)}</div>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              placeholder="Enter your email"
              className={`mt-1 block w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{String(errors.email.message)}</div>}
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-white">
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              id="gender"
              className={`mt-1 block w-full p-2 border ${
                errors.gender ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <div className="text-red-500 text-sm mt-1">{String(errors.gender.message)}</div>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: "Enter a valid Turkish phone number",
                },
              })}
              id="phone"
              placeholder="05XXXXXXXXX"
              className={`mt-1 block w-full p-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.phone && <div className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</div>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`mt-1 block w-full p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{String(errors.password.message)}</div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords must match",
              })}
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              className={`mt-1 block w-full p-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">{String(errors.confirmPassword.message)}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReactHookForm;
