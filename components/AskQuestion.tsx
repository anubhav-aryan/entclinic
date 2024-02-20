import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AskQuestion = ({ showModal }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const postQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_jmj1hfs",
          "template_i8dodfs",
          form.current,
          "iE_ITgMchnoenrgMC"
        )
        .then(
          (result) => {
            toast.success("Request Sent!");
            showModal(false);
          },
          (error) => {
            toast.error("Can't request at the moment");
            showModal(false);
          }
        );
    }
    const formElement = e.target as HTMLFormElement;
    formElement.reset();
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] tablet:w-[60vh] h-fit bg-white shadow-2xl rounded-xl p-8 z-[150]">
      <div className="--heading font-bold text-3xl tablet:text-4xl mb-10">
        Ask a question
      </div>
      <form ref={form} action="submit" onSubmit={postQuestion}>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Your name"
          className="w-full bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40] mb-2 tablet:mb-6"
          required
        />
        <input
          type="text"
          name="user_phone"
          id="user_phone"
          placeholder="Phone"
          className="w-full bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]   mb-2 tablet:mb-6"
          required
        />
        <textarea
          name="message"
          id="message"
          className="w-full min-h-40 bg-[#fcfcfc] px-4 py-3 rounded-xl border-2 border-[#aeaeae40]  mb-2 tablet:mb-6"
          placeholder="Write your question here..."
        ></textarea>
        <button
          type="submit"
          className="bg-[#24bee0] px-8 py-2 rounded-xl text-white font-medium"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
