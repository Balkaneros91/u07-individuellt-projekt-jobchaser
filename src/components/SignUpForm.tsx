"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-4 border rounded-lg bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div>
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1">E-mail:</label>
        <input
          type="email"
          {...register("email", { required: "E-mail is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "At least 6 characters" } })}
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Confirm Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password confirmation is required", minLength: { value: 6, message: "At least 6 characters" } })}
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default SignUpForm;
