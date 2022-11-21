import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleLogin = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        const profile = {
          displayName: data.name,
        };
        updateUser(profile)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
      <div className='w-96 p-7 shadow-md rounded-xl'>
        <h1 className='font-medium text-center'>Sing Up</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label label-text font-semibold'>Name</label>
            <input
              type='text'
              className='input input-bordered w-full'
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className='text-xs text-red-600 font-medium' role='alert'>
                {errors.name?.message}
              </p>
            )}
          </div>
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
            value='Sign Up'
            type='submit'
          />
        </form>
        <p className='text-xs text-center py-2'>
          Already have an account?{" "}
          <Link to='/login' className='text-primary font-semibold'>
            Log in
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

export default Register;
