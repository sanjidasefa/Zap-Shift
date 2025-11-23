import React from 'react';
import parcel from '../../../assets/authImage.png'
import { useForm } from "react-hook-form";

const SignUp = () => {
   const {register, handleSubmit , formState:{errors}} = useForm()
    const onSubmitData = (data) =>{
      console.log('data' , data);
      
    }

    const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
  <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmitData, onError)}>
        <fieldset className="fieldset bg-primary border-secondary rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input {...register('email' , {required: true})} type="email" className="input" placeholder="Email" />
          {
            errors.email?.type ==='required' && <p className="text-red-600">Email not valid </p>
          }
          <label className="label">Password</label>
          <input {...register('password' , {required: true , minLength:8 , pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/ ,})} type="password" className="input" placeholder="Password" />
            {
            errors.password?.type ==='required' && <p className="text-red-600">Give a  not valid Password</p>
          }
           {
            errors.password?.type ==='minLength' && <p className="text-red-600">please Give at least 8 Character  </p>
           }
           {
            errors.password?.type ==='pattern' && <p className="text-red-600">please Give at least 8 Character and One UpperCase , One LowerCase , One Digit . </p>
           }
           
          <button type="submit" className="btn btn-neutral mt-4">Sign-Up</button>
        </fieldset>
      </form>
      <div>
        <img src={parcel} alt="" />
      </div>
    </div>
  );
};

export default SignUp;