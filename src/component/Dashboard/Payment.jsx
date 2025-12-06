import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUserSecure from "../../hooks/useUserSecure";
import { Link, useParams } from "react-router";
import loadingImg from "../../assets/running.gif";

const Payment = () => {
  const { parcelId } = useParams();
  const userSecure = useUserSecure();
  // const {user} = useAuth()
  const { data: parcel = {}, isLoading } = useQuery({
    queryKey: ["payments", parcelId],
    queryFn: async () => {
      const result = await userSecure.get(`/SendPercels/${parcelId}`);
      console.log(result.data);
      window.location.href = result.data.url;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost : parcel.cost,
      parcelName : parcel.PercelName,
      parcelId : parcel._id,
      senderEmail : parcel.senderEmail,
    }
  const result = await userSecure.post('/create-checkout-session', paymentInfo)
  console.log(result.data)
  return result.data
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto flex justify-center items-center py-20">
        <img src={loadingImg} alt="" className="w-xs" />
        <h1 className="text-2xl text-center my-3 ">Loding...</h1>
      </div>
    );
  }

  if (!parcel) {
    return <p>Percel not found</p>;
  }

  return (
    <>
      <div className="mockup-window bg-primary border-3 border-secondary">
        <div className=" p-10 ">
          <h1 className="text-2xl font-bold text-secondary">
            Percel Name : {parcel.PercelName}
          </h1>
          <h1 className="text-xl text-secondary my-3 font-semibold">
            Sender Name : {parcel.senderName}
          </h1>
          <h1 className="text-xl text-secondary my-3 font-semibold">
            Sender Email : {parcel.senderEmail}
          </h1>
          <h1 className="text-xl text-secondary my-3 font-semibold">
            Total Cost : {parcel?.cost}
          </h1>
          <h1 className="text-xl text-secondary my-3 font-semibold">
            Created At : {parcel.createdAt}
          </h1>
          <h1 className="text-xl text-secondary my-3 font-semibold">
            Sender Phone-Number : {parcel.senderPhoneNum}
          </h1>
       
            <button onClick={handlePayment} className="btn btn-secondary">
              {" "}
              Pay amount{" "}
            </button>
       
        </div>
      </div>
    </>
  );
};

export default Payment;
