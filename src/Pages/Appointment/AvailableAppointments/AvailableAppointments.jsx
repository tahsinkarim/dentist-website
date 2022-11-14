import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <section className='mt-16'>
      <h4 className='text-center text-secondary font-bold'>
        Available Appointment on {format(selectedDate, "PP")}
      </h4>
    </section>
  );
};

export default AvailableAppointments;
