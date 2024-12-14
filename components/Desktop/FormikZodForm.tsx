import React from "react";
import { Formik, Field, Form } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Props {
  id: number;
}

function FormikZodForm(props: Props) {
  const validationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={values => {
        console.log("Formik + Zod Values:", values);
      }}>
      {() => (
        <Form>
          <Field name="email" type="email" placeholder="Email 2" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikZodForm;
