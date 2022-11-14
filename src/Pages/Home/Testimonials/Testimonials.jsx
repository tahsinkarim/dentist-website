import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quia error delectus! Suscipit, perspiciatis temporibus quis dolore reprehenderit voluptas ipsa.",
      location: "California",
    },
    {
      id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quia error delectus! Suscipit, perspiciatis temporibus quis dolore reprehenderit voluptas ipsa.",
      location: "California",
    },
    {
      id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quia error delectus! Suscipit, perspiciatis temporibus quis dolore reprehenderit voluptas ipsa.",
      location: "California",
    },
  ];
  return (
    <section className='mt-16'>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-lg text-primary font-bold'>Testimonials</h4>
          <h1 className='text-4xl'>What Our Patients Says</h1>
        </div>
        <figure>
          <img className='w-24 lg:w-48' src={quote} alt='' />
        </figure>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {reviews.map((review) => (
          <Review key={review.id} rev={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
