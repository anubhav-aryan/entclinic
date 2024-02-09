import React from "react";
import Image from "next/image";
const Appointment = () => {
  return (
    <div className="flex mobile:items-center font-poppins w-full tablet:items-start" id="appointment">
      <div className="w-full">
        <div className=" font-bold text-4xl mb-10">
          Make Appointment
        </div>
        <div className="--form w-[80%] mx-auto flex flex-col justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          />
          <input
            type="date"
            name=""
            id=""
            placeholder="Appointment Date"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          />
          <input
            type="time"
            name=""
            id=""
            placeholder="Appointment Time"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
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
          className=" tablet:px-6 tablet:py-4 mobile:px-3 mobile:py-2 bg-[#24bee0] text-xl font-medium rounded-full text-white flex gap-4 items-center mx-auto"
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
