import React from "react";

const AnalyticLabel = () => {
  return (
    <div className="w-full  py-12 flex justify-center gap-12 bg-[#062126] mobile:flex-col laptop:flex-row">
      <div className="label flex flex-col items-center gap-2">
        <h1 className="text-5xl text-white font-bold">99%</h1>
        <h3 className="text-[#11b7db] text-lg font-semibold">
          Positive Feedback
        </h3>
      </div>
      <div className="line w-[2px] bg-[rgba(255,255,255,0.2)]"></div>
      <div className="label flex flex-col items-center gap-2">
        <h1 className="text-5xl text-white font-bold">150+</h1>
        <h3 className="text-[#11b7db] text-lg font-semibold">
          Happy Patients a week
        </h3>
      </div>{" "}
      <div className="line w-[2px] bg-[rgba(255,255,255,0.2)]"></div>
      <div className="label flex flex-col items-center gap-2">
        <h1 className="text-5xl text-white font-bold">20+</h1>
        <h3 className="text-[#11b7db] text-lg font-semibold">
          Years of Experiance
        </h3>
      </div>
    </div>
  );
};

export default AnalyticLabel;
