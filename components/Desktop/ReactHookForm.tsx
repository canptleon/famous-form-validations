import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  id: number;
}

function ReactHookForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("React Hook Form Values:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email is required" })} placeholder="Email 4" />
      {errors.email?.message && <div>{errors.email.message as string}</div>}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Password must be at least 6 characters" },
        })}
        placeholder="Password"
      />
      {errors.password?.message && <div>{errors.password.message as string}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookForm;
