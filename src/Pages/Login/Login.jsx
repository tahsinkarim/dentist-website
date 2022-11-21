import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const { signIn } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <div className='w-96 p-7 shadow-md rounded-xl'>
        <h1 className='font-medium text-center'>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label label-text font-semibold'>Email</label>
            <input
              type='text'
              className='input input-bordered w-full'
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className='text-xs text-red-600 font-medium' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label label-text font-semibold'>Password</label>
            <input
              type='password'
              className='input input-bordered w-full'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className='text-xs text-red-600 font-medium mt-1' role='alert'>
                {errors.password?.message}
              </p>
            )}
            <label className='label label-text font-semibold text-xs'>
              Forgot Password
            </label>
          </div>
          <input
            className='btn btn-accent w-full mt-4'
            value='Login'
            type='submit'
          />
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className='text-xs text-center py-2'>
          New to Dentist Portal?{" "}
          <Link to='/register' className='text-primary font-semibold'>
            Create new Account
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button className='btn btn-outline btn-accent w-full'>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
