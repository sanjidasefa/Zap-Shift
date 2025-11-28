import React from "react";
import parcel from '../../../assets/authImage.png'
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";

const LogIn = () => {
  const {register, handleSubmit , formState:{errors}} = useForm()
  const {signIn , google , } = useAuth()
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmitData = (data) =>{
    console.log('data' , data);
    signIn(data.email , data.password)
    .then(res => {
      console.log(res)
      navigate(location?.state || '/')
    })
    .catch(err => console.log(err))
  }
const handleGoogle = ()=>{
  google()
  .then(res => console.log(res))
    .catch(err => console.log(err))
}
const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <>
    <div className="flex justify-center  items-center">
      <div>
      <h1 className="text-3xl text-secondary  my-10 font-bold ">Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmitData, onError)}>
        <fieldset className=" fieldset bg-primary border-secondary rounded-box w-xs border p-4">
          <legend className="fieldset-legend font-bold text-lg ">Login</legend>

          <label className="label">Email</label>
          <input {...register('email' , {required: true})} type="email" className="input" placeholder="Email" />
          {
            errors.email?.type ==='required' && <p className="text-red-600">Email not valid </p>
          }
          <label className="label">Password</label>
          <input {...register('password' , {required: true , minLength:8 , pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/})} type="password" className="input" placeholder="Password" />
            {
            errors.password?.type ==='required' && <p className="text-red-600">Give a  not valid Password</p>
          }
           {
            errors.password?.type ==='minLength' && <p className="text-red-600">please Give at least 8 Character  </p>
           }
           {
            errors.password?.type ==='pattern' && <p className="text-red-600">please Give at least 8 Character and One UpperCase , One LowerCase , One Digit . </p>
           }
            <div className="underline text-blue-600"><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-secondary mt-4">Sign In</button>
        <p>Don't have an account so , please <Link to='/Resister' state={location.state} className='text-blue-600 underline'>SignUp </Link></p>
        </fieldset>

      </form>
         <h1 className="text-lg text-secondary mt-3 font-bold ">OR,</h1>
        <button onClick={handleGoogle} className="btn bg-secondary text-white border-primary mt-4  ">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
      <div>
        <img src={parcel} alt="" />
      </div>
    </div>
    </>
  );
};

export default LogIn;
