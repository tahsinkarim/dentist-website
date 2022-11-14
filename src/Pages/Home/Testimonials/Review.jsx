import React from "react";

const Review = ({ rev }) => {
  const { name, img, review, location } = rev;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p>{review}</p>
        <div className='flex items-center mt-6'>
          <div className='avatar mr-4'>
            <div className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <h5 className='font-semibold'>{name}</h5>
            <p className='text-sm'>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
