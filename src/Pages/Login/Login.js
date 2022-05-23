import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  if (user) {
    navigate("/");
  }
  if (error) {
    signInError = <span>{error.message}</span>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-full bg-base-100  p-6 m-auto border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md'>
        <div className='card-body '>
          <h2 className=''>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Type Your Email'
                className='input input-bordered w-full max-w-xs'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please Enter Your Email",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provied a valid email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className='label'>
                {errors.email?.type === "required" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Type Your Email'
                className='input input-bordered w-full max-w-xs'
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please Type Your Passeword",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 charecter lenght ", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className='label'>
                {errors.password?.type === "required" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className='label-text-alt text-red-600'>
                    {errors?.password?.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className='btn input-bordered btn-primary w-full max-w-xs '
              type='submit'
              value='Log In'
            />
          </form>

          <p class='mt-8 text-lg font-light text-center text-gray-700'>
            {" "}
            Don't have an account?{" "}
            <Link
              to='/singup'
              class='font-medium text-purple-600 hover:underline'
            >
              Sign up
            </Link>
          </p>
          <div className='divider'>OR</div>
          {/* <button
        onClick={() => signInWithGoogle()}
        className='btn btn-outline'
      >
        Button
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
