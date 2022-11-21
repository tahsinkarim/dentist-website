import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className='text-2xl font-bold mx-8 mb-4'>My Appointment</h1>
      <div className='overflow-x-auto mx-8'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i + 1}>
                <th>{i + 1}</th>
                <th>{booking.name}</th>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
