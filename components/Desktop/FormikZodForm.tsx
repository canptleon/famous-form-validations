import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Props {
  id: number;
}

const FormikZodForm: React.FC<Props> = ({ id }) => {
  const validationSchema = z
    .object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      gender: z.enum(["male", "female", "other"], {
        required_error: "Please select a valid gender",
      }),
      phone: z
        .string()
        .regex(/^(\+90|0)?5\d{9}$/, "Enter a valid Turkish phone number"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] p-8 [background-size:1003px] [box-shadow:inset_0px_0px_13px_1px_#01010130] bg-center border-[3px] border-[solid] border-[white] [filter:drop-shadow(0px_0px_11px_white)] rounded-[20px] bg-[linear-gradient(to_right,_#5ffbf1,_#00e8ff,_#00d2ff,_#2cb8ff,_#7b9aff,_#8991f9,_#9687f2,_#a27de9,_#868ceb,_#7197e7,_#679fde,_#6ba5d1)]">
        <h2 className="text-xl font-semibold mb-6 text-center text-white">
          Registration Form (Formik + Zod)
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            gender: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={(values) => {
            alert("Form submitted successfully!");
            console.log("Formik + Zod Values:", values);
          }}
        >
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-white"
              >
                Gender
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                type="text"
                placeholder="05XXXXXXXXX"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white"
              >
                Confirm Password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikZodForm;
