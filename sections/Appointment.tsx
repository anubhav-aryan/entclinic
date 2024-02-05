import React from "react";
import Image from "next/image";
const Appointment = () => {
  return (
    <div className="w-wrapper mx-auto h-[70vh] flex items-center font-poppins ">
      <div className="w-full">
        <div className="--heading font-bold text-4xl mb-10 text-center">
          Make Appointment
        </div>
        <div className="--form w-[70%] mx-auto flex flex-wrap justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <input
            type="date"
            name=""
            id=""
            placeholder="Appointment Date"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <input
            type="time"
            name=""
            id=""
            placeholder="Appointment Time"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] w-[48%] mb-6"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Describe what you’re looking for..."
            className="w-full h-32 bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          ></textarea>
        </div>
        <button
          type="button"
          className=" px-6 py-4 bg-[#24bee0] text-xl font-medium rounded-full text-white flex gap-4 items-center mx-auto"
        >
          <p>Send</p>
          <Image
            src="/send.png"
            alt=""
            width={30}
            height={30}
            className="w-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Appointment;
