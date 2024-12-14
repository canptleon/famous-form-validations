import React from "react";
import { Form, Field } from "react-final-form";

interface Props {
  id: number;
}

function ReactFinalForm(props: Props) {
  const onSubmit = (values: any) => {
    console.log("React Final Form Values:", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" component="input" placeholder="Email 3" />
          <Field name="password" component="input" placeholder="Password" type="password" />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}

export default ReactFinalForm;
