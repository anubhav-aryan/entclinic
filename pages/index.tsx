import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import React from "react";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Doctors from "@/sections/Doctors";
import AnalyticLabel from "@/components/AnalyticLabel";
import Appointment from "@/sections/Appointment";
import Footer from "@/sections/Footer";
const index = () => {
  return (
    <div className="flex flex-col justify-center items-center tablet:px-[13rem] mobile:px-[2rem] gap-[2rem]">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Doctors />
      <AnalyticLabel />
      <Testimonial />
      <Appointment />
      <Footer />
    </div>
  );
};

export default index;
