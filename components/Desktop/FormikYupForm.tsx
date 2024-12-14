import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  id: number;
}

function FormikYupForm(props: Props) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Too Short!").required("Required"),
    }),
    onSubmit: values => {
      console.log("Formik + Yup Values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email 1"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <div>{formik.errors.email}</div>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <div>{formik.errors.password}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikYupForm;
