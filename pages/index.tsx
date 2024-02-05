import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import React from "react";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Doctors from "@/sections/Doctors";
import AnalyticLabel from "@/components/AnalyticLabel";
const index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Doctors />
      <AnalyticLabel />
      <Testimonial />
    </div>
  );
};

export default index;
