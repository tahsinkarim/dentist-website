import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className='card shadow-xl py-1'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-center text-xl text-secondary font-bold'>
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className='card-actions'>
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            className='btn bg-gradient-to-r from-primary to-secondary text-white border-none'
            htmlFor='booking-modal'
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
