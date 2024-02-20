import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isDateValid, setIsDateValid] = useState(true);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [timeError, setTimeError] = useState("");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const validateDay = (e: any) => {
    const selectedDate = e.target.value;
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      const day = newDate.getDay();
      const year = newDate.getFullYear();
      const date = newDate.getDate();
      const month = newDate.getMonth();
      const currentDate = new Date();
      if (year < currentDate.getFullYear() || month < currentDate.getMonth()) {
        setIsDateValid(false);
        return;
      }
      if (month === currentDate.getMonth() && date < currentDate.getDate()) {
        setIsDateValid(false);
        return;
      }
      if (day === 0) {
        setIsDateValid(false);
        return;
      } else {
        setSelectedDay(day);
        setSelectedDate(date);
        setIsDateValid(true);
      }
    }
  };
  const validateTime = (e: any) => {
    const selectedTime = e.target.value;
    console.log(typeof selectedTime);
    const hour = parseInt(selectedTime.slice(0, 2));
    const min = parseInt(selectedTime.slice(3, 5));
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMin = currentTime.getMinutes();
    // console.log(currentHour, currentMin);
    // if (selectedDate && selectedDate === currentTime.getDate()) {
    //   if (hour < currentHour) {
    //     setIsTimeValid(false);
    //     setTimeError("Please selected a valid time for today.");
    //     return;
    //   } else if (hour >= currentHour && min < currentMin) {
    //     setIsTimeValid(false);
    //     setTimeError("Please selected a valid time for today.");
    //   }
    // }
    if (!selectedDay || selectedDay === 0) {
      setIsTimeValid(false);
      setTimeError("Appointment can't be scheduled on Sunday");
      return;
    }
    if (
      selectedDay === 1 ||
      selectedDay === 2 ||
      selectedDay === 5 ||
      selectedDay === 6
    ) {
      if (!((hour >= 10 && hour <= 13) || (hour >= 16 && hour <= 20))) {
        setIsTimeValid(false);
        setTimeError("Select a time between 10AM-1PM or 4PM-8PM");
        return;
      } else if ((hour === 20 || hour === 13) && min > 0) {
        setIsTimeValid(false);
        setTimeError("Select a time between 10AM-1PM or 4PM-8PM");
        return;
      }
    } else if (selectedDay === 3 || selectedDay === 4) {
      if (!(hour >= 16 && hour <= 20)) {
        setIsTimeValid(false);
        setTimeError("Select a time between 4PM-8PM");
        return;
      } else if (hour === 20 && min > 0) {
        setIsTimeValid(false);
        setTimeError("Select a time between 4PM-8PM");
      } else {
        setIsTimeValid(true);
      }
    }
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isDateValid || !isTimeValid) {
      toast.error("Please select valid date or time");
      return;
    }
    if (form.current) {
      emailjs
        .sendForm(
          "service_jmj1hfs",
          "template_ep2ijdl",
          form.current,
          "iE_ITgMchnoenrgMC"
        )
        .then(
          (result) => {
            toast.success("Sent: Appointment Request");
          },
          (error) => {
            toast.error("Can't request at the moment");
          }
        );
    }
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
  };

  return (
    <div
      className="flex mobile:items-center font-poppins w-full tablet:items-start"
      id="appointment"
    >
      <div className="w-full">
        <div className=" font-bold text-4xl mb-10">Make Appointment</div>
        <form
          ref={form}
          className="--form w-full tablet:w-[80%] mx-auto flex flex-col justify-between"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
            required
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
            required
          />
          <input
            type="text"
            name="user_email"
            id="email"
            placeholder="Email"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
            required
          />
          <input
            type="text"
            name="user_phone"
            id="user_phone"
            placeholder="Phone"
            className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
            required
          />
          <div className="flex flex-col w-full mb-6">
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Appointment Date"
              className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]"
              required
              onChange={validateDay}
            />
            {!isDateValid && (
              <p className="text-red-500 text-sm pl-4">
                Appointments cannot be placed for this day.
              </p>
            )}
          </div>
          {selectedDay && isDateValid && (
            <div className="flex flex-col w-full mb-6">
              <input
                type="time"
                name="time"
                id="time"
                placeholder="Appointment Time"
                className="bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] "
                required
                onChange={validateTime}
              />
              {!isTimeValid && (
                <p className="text-red-500 text-sm pl-4">
                  {timeError ??
                    "Please select a valid time between opening hours."}
                </p>
              )}
            </div>
          )}
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Describe what you’re looking for..."
            className="w-full h-32 bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-6"
          ></textarea>
          <button
            type="submit"
            className=" tablet:px-6 tablet:py-4 mobile:px-6 mobile:py-2 bg-[#24bee0] text-xl font-medium rounded-full text-white flex gap-4 items-center mx-auto active:scale-95"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
