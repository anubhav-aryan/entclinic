import React, { useState } from "react";
import Image from "next/image";
import Label from "@/components/Label";
import Link from "next/link";
import AskQuestion from "@/components/AskQuestion";
export default function Hero() {
  const [showQuestionModal, setQuestionModal] = useState(false);
  return (
    <div className="mobile:gap-[1rem] w-full flex mobile:justify-between tablet:justify-center font-poppins mobile:flex-col tablet:flex-row items-center relative">
      {showQuestionModal && (
        <>
          <AskQuestion showModal={setQuestionModal} />
          <div
            className="overlay fixed top-0 left-0 w-screen h-screen z-[120] bg-[rgba(0,0,0,0.2)] cursor-pointer "
            onClick={() => setQuestionModal(false)}
          ></div>
        </>
      )}

      <div className=" w-full h-full flex flex-col gap-[1rem]">
        <div className=" tablet:text-5xl font-bold mobile:text-3xl mobile:text-left">
          Feel The Senses
        </div>
        <div className="--sub-heading text-subheading leading-6">
          <p>
            SCENT, Dr. Swapna's clinic, specializes in the delicate balance of
            your ears, nose, and throat (ENT). With expert care and in-depth
            knowledge of this complex head and neck region, we diagnose and
            treat a wide range of conditions, including:
          </p>
          <p className="mt-2">
            Ear Infections & Hearing Loss, Pediatric ENT Concerns, Sleep Apnea &
            Snoring, Tonsillitis & Nosebleeds, Voice Problems & Facial Pain,
            Tinnitus & Vertigo, Nasal Obstructions, Allergies & Sinus Problems,
            Thyroid Diseases, Salivary Gland Disorders, and Head & Neck Tumors.
          </p>
          <p className="mt-2">
            ENT clinics typically offer a variety of diagnostic and treatment
            services, including:
          </p>
          <p className="mt-2">
            Physical Examinations, Audiometry (hearing tests), Allergy Testing
            Imaging tests, such as X-rays, CT scans, and MRIs, Endoscopy (visual
            examination of the inside of the ears, nose, and throat), Lab
            investigations, Medications, and Surgery.
          </p>
        </div>
        <div className="--informatics w-full h-fit p-6 bg-[#f5eae6] rounded-2xl flex gap-[2%] mobile:flex-col tablet:flex-row mobile:items-center tablet:flex-wrap">
          {/* <Label
              img={"Calendar.svg"}
              heading={"Make an Appointment"}
              subheading={"Select best time for you."}
            /> */}
          {/* <Label
              img={"user.svg"}
              heading={"Find the Best Doctor"}
              subheading={"find the best doctor in a minute"}
            /> */}
          <Label
            img={"Location.svg"}
            heading={"Visit the clinic"}
            subheading={"take care of your issues"}
            link={
              "https://www.google.com/maps/dir//scent+clinic+vellore/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bad47f93fa3063d:0xd432109c39374bff?sa=X&ved=2ahUKEwiCvP7wsrqEAxUQqFYBHWnmBhcQ9Rd6BAhcEAA"
            }
          />
          <Label
            img={"Message.svg"}
            heading={"Ask Questions"}
            subheading={"Ask questions any time"}
            onClickHandler={setQuestionModal}
          />
        </div>
        <Link href="/#appointment">
          <div className="w-full flex gap-8 items-center mobile:flex-col tablet:flex-row mobile:flex-row">
            <button className="inline-flex items-center bg-[#24BEE0] border-0 rounded-full py-3 px-5 font-semibold focus:outline-none text-white">
              Make Appointment &rarr;
            </button>
            <div className="flex flex-col gap-2 text-[rgba(207, 125, 78, 1)] font-medium text-xs">
              <p>Mon - Tue - Fri - Sat 10AM-1PM, 4PM-8PM</p>
              <p>Wed - Thu 4PM-8PM</p>
              <p>Sun - Closed</p>
            </div>
          </div>
        </Link>
      </div>
      {/* <Image
        src="/hero_banner.png"
        alt=""
        width={350}
        height={600}
        className=""
      /> */}
    </div>
  );
}
