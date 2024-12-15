import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  id: number;
}

const FormikYupForm: React.FC<Props> = ({ id }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      gender: Yup.string()
        .oneOf(["male", "female", "other"], "Select a valid gender")
        .required("Gender is required"),
      phone: Yup.string()
        .matches(
          /^(\+90|0)?5\d{9}$/,
          "Enter a valid Turkish phone number"
        )
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      console.log("Formik + Yup Values:", values);
    },
  });

  return (
    <div className="flex justify-center items-center">
      <div className="w-full p-8 [background-size:1003px] [box-shadow:inset_0px_0px_13px_1px_#01010130] bg-center border-[3px] border-[solid] border-[white] [filter:drop-shadow(0px_0px_11px_white)] rounded-[20px] bg-[linear-gradient(to_right,_#d16ba5,_#ca74b5,_#c17dc2,_#b686ce,_#aa8fd8,_#9b9ce7,_#89a9f2,_#76b5fa,_#54c9ff,_#37dbff,_#3aecfe,_#5ffbf1)]">
        <h2 className="text-lg font-semibold mb-6 text-center !text-white">Registration Form (Formik + Yup)</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-white">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.gender ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formik.errors.gender && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.gender}</div>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="05XXXXXXXXX"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className={`mt-1 block w-full p-2 border ${
                formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.confirmPassword}
              </div>
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
};

export default FormikYupForm;
