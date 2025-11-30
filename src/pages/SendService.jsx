import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useUserSecure from '../hooks/useUserSecure';

const SendService = () => {
  const loadData = useLoaderData()
  const {user} = useAuth()
  const secureInfo = useUserSecure()
 // console.log(loadData)
  const duplicateRegion = loadData.map(c=> c.region)
  const region = [...new Set(duplicateRegion)]
  
  const {register, handleSubmit ,control, formState:{errors}} = useForm()
  const senderDistrictShow = useWatch({control , name:'senderRegion'})
  const recieverDistrictShow = useWatch({control , name:'receiverRegion'})
  
  const regionByDistrict = (regions) =>{
    const districts = loadData.filter(r => r.region === regions)
    const district = districts.map(c=> c.district)
    return district;
  }
 const handleFrom = (data) => {
 console.log(data)
 const isDocument = data.percelType === 'document';
 const isSameDistrict = data.senderDisrict === data.receiverDisrict ; 
 const isWeight = data.percelWeight
 let cost = 0 ;
 if(isDocument){
   cost = isSameDistrict ? 60 : 80 ;
 }
 else{
  if(isWeight < 3){
    cost = isSameDistrict ? 110 : 150; 
  }
  else{
    const minPercelCharge =  isSameDistrict ? 110 : 150 ;
    const percelExtraWeight = isWeight - 3 ;
    const MaxPercelCharge = isSameDistrict ? percelExtraWeight *40 : percelExtraWeight*40 + 40 ;
    cost = minPercelCharge + MaxPercelCharge;
  }
 }
 console.log(cost)
 data.cost = cost ;
 data.createdAt = new Date().toLocaleDateString()
  Swal.fire({
  title: "Are you sure?",
  text: `Your Total Cost :  ${cost} tk`,
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#CAEB66",
  cancelButtonColor: "#03373D",
  confirmButtonText: "Send Percel"
}).then((result) => {
  if (result.isConfirmed) {
    secureInfo.post('/SendPercels' , data)
    .then(res =>{
      console.log(res.data)
    })
    Swal.fire({
      title: "Approved",
      text: "your selected percel send.",
      icon: "success"
    });
  }
});

 }
  return (
    <div className="w-11/12 mx-auto py-6 md:p-20">
      <div className="bg-white rounded-2xl p-10 md:p-20">
      <h1 className="text-2xl md:text-4xl font-bold text-secondary ">
        Send A Parcel 
      </h1>
      <p className="text-gray-400 my-5">Enter Your Parcel Details</p>
      <div>
        <div className='divider divider-vertical divider-start'></div>
        <form onSubmit={handleSubmit(handleFrom)} className='' >
         <div className=''>
       <div className='my-4'>
         <input type="radio" value='document' {...register('percelType' , {required: true})} className="radio radio-info  mr-1.5" defaultChecked />
        <label htmlFor="" className='mr-6 text-sm text-secondary  font-semibold'>Document</label>
        <input type="radio" value='non-Document' {...register('percelType' , {required: true})} className="radio  radio-info mr-1.5" />
        <label htmlFor="" className='mr-6 text-sm text-secondary  font-semibold'>Non-Document</label>
         {
            errors.percelType?.type ==='required' && <p className="text-red-600">Please Select your Percel Type</p>
          }
          
       </div>
         <div className='flex gap-8'>
          <div className='w-full'>
               <h1 className='text-sm text-secondary font-semibold mb-2'>Parcel Name : </h1>
         
            <input type="text"  {...register('PercelName' , {required: true})} placeholder="Percel Name" className="input input-primary  " />
         {
            errors.PercelName?.type ==='required' && <p className="text-red-600">Please Enter Percel Name</p>
          }
          </div>
          <div className='w-full'>
            <h1 className='text-sm text-secondary font-semibold mb-2'>Parcel Weight (KG) : </h1>
            <input type="number"  {...register('percelWeight' )} placeholder="Percel Weight (kg)" className="input input-primary" />

          </div>
         </div>
          <div className='divider divider-vertical divider-start'></div>
          <div className='flex gap-8'>
            {/* sender Details */}
         <div className='w-full'>
           <h1 className='font-bold text-lg text-secondary mb-3'>Sender Details</h1>
          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Sender Name :</label>
           <input type="text" defaultValue={user.displayName} {...register('senderName' , {required: true})} placeholder="Sender Name" className="input input-primary  " />
          {
            errors.SenderName?.type ==='required' && <p className="text-red-600">Plese Enter Sender Name</p>
          }

        <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Sender Email :</label>
           <input type="email" defaultValue={user.email}  {...register('senderEmail' , {required: true})} placeholder="Sender Email" className="input input-primary  " />
          {
            errors.SenderEmail?.type ==='required' && <p className="text-red-600">Plese Enter Sender Email</p>
          }

          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Sender Region :</label>
           <select {...register('senderRegion' , {required: true})} defaultValue="Sender Region" className="select appearance-none">
         <option disabled={true}>Pick a Region</option>
               {
                region.map((item, i) => <option key={i} value={item}>{item}</option>)
               }
           </select>
          {
            errors.senderRegion?.type ==='required' && <p className="text-red-600">Please Pick Your Region</p>
          }
        
          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Sender District : </label>
           <select {...register('senderDisrict' , {required: true})} defaultValue="Sender Region" className="select appearance-none">
         <option disabled={true}>Pick a District</option>
               {
                regionByDistrict(senderDistrictShow).map((item, i) => <option key={i} value={item}>{item}</option>)
               }
           </select>
          {
            errors.senderDisrict?.type ==='required' && <p className="text-red-600">Please Pick Your District</p>
          }

          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Sender Phone No :</label>
           <input type="number"  {...register('senderPhoneNum' , {required: true})} placeholder="Sender Phone No " className="input input-primary  " />
          {
            errors.senderPhoneNum?.type ==='required' && <p className="text-red-600">PLease Enter Your Phone Number</p>
          }

          <fieldset className="fieldset">
          <legend className="fieldset-legend  text-sm text-secondary font-semibold ">Pickup Instruction : </legend>
          <textarea {...register('senderInstraction')} className="textarea h-24" placeholder="Pickup Instruction"></textarea>
          <div className="label">Optional</div>
          </fieldset>

         </div>
          {/* Reciever Details */}
         <div className='w-full'>
          
            <h1 className='font-bold text-lg text-secondary mb-3'>Receiver Details</h1>
         
          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Receiver Name :</label>
           <input type="text"  {...register('receiverName' , {required: true})} placeholder="Receiver Name" className="input input-primary  " />
          {
            errors.receiverName?.type ==='required' && <p className="text-red-600">Plese Enter Receiver Name</p>
          }

           <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>receiver Email :</label>
           <input type="email"  {...register('receiverEmail' , {required: true})} placeholder="receiver Email" className="input input-primary  " />
          {
            errors.receiverEmail?.type ==='required' && <p className="text-red-600">Plese Enter receiver Email</p>
          }

          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Receiver Region :</label>
           <select {...register('receiverRegion' , {required: true})} defaultValue="Receiver Region" className="select appearance-none">
         <option disabled={true}>Pick a Region</option>
              {
                region.map((item, i) => <option key={i} value={item}>{item}</option>)
               }
           </select>
          {
            errors.receiverRegion?.type ==='required' && <p className="text-red-600">Please Pick Receiver Region</p>
          }

          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Receiver District : </label>
           <select   {...register('receiverDisrict' , {required: true})} defaultValue="Sender Region" className="select appearance-none">
         <option disabled={true}>Pick a District</option>
               {
                regionByDistrict(recieverDistrictShow).map((item, i) => <option key={i} value={item}>{item}</option>)
               }
           </select>
          {
            errors.receiverDisrict?.type ==='required' && <p className="text-red-600">Please Pick Receiver District</p>
          }

          <label htmlFor="" className='block text-sm text-secondary font-semibold mb-2'>Receiver Phone No :</label>
           <input type="number"  {...register('receiverPhoneNum' , {required: true})} placeholder="Receiver Phone No " className="input input-primary  " />
          {
            errors.receiverPhoneNum?.type ==='required' && <p className="text-red-600">PLease Enter Your Phone Number</p>
          }

          <fieldset className="fieldset">
  <legend className="fieldset-legend  text-sm text-secondary font-semibold ">Pickup Instruction : </legend>
  <textarea {...register('receiverInstraction')} className="textarea h-24" placeholder="Pickup Instruction"></textarea>
  <div className="label">Optional</div>
</fieldset>

         </div>
          </div>

         </div>
         <button type="submit" className='className="btn bg-secondary text-white border-3 border-primary mt-4 px-6 rounded-2xl'>Send</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SendService;