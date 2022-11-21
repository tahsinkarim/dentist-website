import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "./BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["options", date],
    queryFn: () =>
      fetch(`http://localhost:5000/options?date=${date}`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className='my-16'>
      <h4 className='text-center text-secondary font-bold'>
        Available Appointment on {format(selectedDate, "PP")}
      </h4>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
