import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; // treatment is appointment options
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>{name}</h3>
          <form
            onSubmit={handleBooking}
            className='flex flex-col gap-4 justify-center w-full mt-10'
          >
            <input
              type='text'
              value={date}
              class='input input-bordered w-full '
              disabled
            />
            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot) => (
                <option value={slot} key={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name='name'
              type='text'
              placeholder='Your Name'
              class='input input-bordered w-full '
            />
            <input
              name='email'
              type='text'
              placeholder='Email Address'
              class='input input-bordered w-full '
            />
            <input
              name='phone'
              type='text'
              placeholder='Phone Number'
              class='input input-bordered w-full '
            />
            <div className='modal-action'>
              <input className='w-full  btn' type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
