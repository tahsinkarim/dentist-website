import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className='mt-32'
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row text-white'>
          <img
            src={doctor}
            className='-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl'
          />
          <div>
            <h4 className='text-lg text-primary font-bold'>Appointment</h4>
            <h1 className='text-4xl font-bold'>Make an appointment today</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
