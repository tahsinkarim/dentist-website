import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../infoCards/infoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className='mx-1'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
