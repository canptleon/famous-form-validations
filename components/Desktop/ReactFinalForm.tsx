import React from "react";
import { Form, Field } from "react-final-form";

interface Props {
  id: number;
}

const validate = (values: any) => {
  const errors: any = {};
  
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^(\+90|0)?5\d{9}$/.test(values.phone)) {
    errors.phone = "Enter a valid Turkish phone number";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

const ReactFinalForm: React.FC<Props> = ({ id }) => {
  const onSubmit = (values: any) => {
    alert("Form submitted successfully!");
    console.log("React Final Form Values:", values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Registration Form (React Final Form)
        </h2>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Field
                  name="name"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Field
                  name="email"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <Field
                  name="gender"
                  component="select"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <Field
                  name="gender"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Field
                  name="phone"
                  component="input"
                  type="text"
                  placeholder="05XXXXXXXXX"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Field
                  name="phone"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Field
                  name="password"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  component="input"
                  type="password"
                  placeholder="Re-enter your password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Field
                  name="confirmPassword"
                  render={({ meta }) =>
                    meta.error && meta.touched && (
                      <div className="text-red-500 text-sm mt-1">
                        {meta.error}
                      </div>
                    )
                  }
                />
              </div>

              <button
                type="submit"
                disabled={submitting || pristine}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default ReactFinalForm;
