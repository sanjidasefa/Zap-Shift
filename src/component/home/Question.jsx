import React from "react";

const Question = () => {
  return (
    <div>
      
      <div className="text-center">
        <h1 className="text-3xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-secondary my-8">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

       <div className="collapse collapse-arrow bg-gray-200 mt-3 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-secondary font-semibold">How does this posture corrector work?</div>
  <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
</div>
<div className="collapse collapse-arrow bg-gray-200 mt-3 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How can I track my parcel?</div>
  <div className="collapse-content text-sm"> After booking, you will receive a tracking ID. Enter it on our website tracking page to see the real-time status.</div>
</div>
<div className="collapse collapse-arrow bg-gray-200 mt-3 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Do you provide pickup from home?</div>
  <div className="collapse-content text-sm">  Yes, you can schedule doorstep pickup while placing your order—our rider will collect the parcel at your selected time.</div>
</div>
<div className="collapse collapse-arrow bg-gray-200 mt-3 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What s are restricted from delivery?</div>
  <div className="collapse-content text-sm">    Hazardous materials, illegal products, weapons, chemicals, and perishable food s are not accepted for delivery.</div>
</div>

    </div>
  );
};

export default Question;
