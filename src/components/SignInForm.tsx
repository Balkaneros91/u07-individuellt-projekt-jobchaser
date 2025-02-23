"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-4 border rounded-lg bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <div>
        <label className="block mb-1">E-post:</label>
        <input
          type="email"
          {...register("email", { required: "E-post är obligatorisk", pattern: { value: /^\S+@\S+$/i, message: "Ogiltig e-post" } })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Lösenord:</label>
        <input
          type="password"
          {...register("password", { required: "Lösenord krävs", minLength: { value: 6, message: "Minst 6 tecken" } })}
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded">Logga in</button>
    </form>
  );
};

export default SignInForm;
