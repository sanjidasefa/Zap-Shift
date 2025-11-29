import React from "react";

const About = () => {
  return (
    <div className="p-10 ">
      <div className="bg-white rounded-2xl p-10 lg:p-20">
        <h1 className="text-2xl md:text-4xl font-bold text-secondary ">
          About Us
        </h1>
        <p className="text-gray-500 my-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Story"
          />
          <div className="tab-content bg-primary border-secondary p-5">
            <p className="mb-2">
              A group of young innovators saw how people struggled with late
              deliveries, poor tracking, and unreliable service. That’s when we
              decided to build a courier company that is fast, smart, and
              customer-focused.
            </p>
            <p className="mb-2 text-white ">
              From day one, our vision has been clear: Fast Delivery. Real-Time
              Tracking. Customer-First Service.
            </p>
            <p className="mb-2">
              What began with a small team is now a nationwide delivery network
              trusted by thousands. Whether it’s a personal gift or a
              time-sensitive business package, we make sure it reaches its
              destination — on time, every time.
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Mission"
            defaultChecked
          />
          <div className="tab-content bg-primary p-4">
            <h1 className="font-bold text-2xl text-white">
              Our mission is simple yet powerful:
            </h1>
            <ul className="ml-10 my-2 list-disc">
              <li>Handling thousands of deliveries every day</li>

              <li>Maintaining a 95% on-time delivery rate</li>

              <li>Expanding a strong last-mile delivery network nationwide</li>

              <li>Partnering with 500+ businesses who rely on us daily</li>

              <li>
                Becoming a top-rated service for fast support and reliable
                solutions
              </li>
            </ul>
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Success"
          />
          <div className="tab-content bg-primary p-4">
            <h1 className="font-bold text-2xl text-white">
              Our success is built on the trust of our customers:
            </h1>
            <ul className="ml-10 my-2 list-disc">
              <li> Handling thousands of deliveries every day</li>

              <li>Maintaining a 95% on-time delivery rate</li>

              <li>Expanding a strong last-mile delivery network nationwide</li>

              <li>
                Becoming a top-rated service for fast support and reliable
                solutions
              </li>
            </ul>
            <p className="font-semibold">
              For us, success means one thing — customer satisfaction.
            </p>
          </div>
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Team & Others"
          />
          <div className="tab-content bg-primary p-4">
            <h1 className="font-bold text-2xl text-white">Our Values:</h1>
            <ul className="ml-10 my-2 list-disc">
              <li>Trust: Every parcel matters to us.</li>
              <li>Speed: Timely delivery is our highest priority.</li>
              <li>Transparency: Real-time updates keep customers informed.</li>
              <li>Innovation: We use technology to simplify logistics.</li>
              <li>Care: Every customer, every shipment — equally important.</li>
            </ul>
            <h1 className="font-bold text-2xl text-white">Our Team :</h1>
            <h1>Our success is built on the trust of our customers:</h1>

            <ul className="ml-10 my-2 list-disc">
              <li>Dedicated and skilled Delivery Heroes</li>
              <li>Friendly and responsive Customer Support Agents</li>
              <li>
                {" "}
                A smart Technology Team managing tracking and route optimization
              </li>
              <li>
                An experienced Operations Team ensuring quality and efficiency
              </li>
            </ul>
            <p className="font-semibold">
              Together, we work with a single goal — to deliver your package
              safely and on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
